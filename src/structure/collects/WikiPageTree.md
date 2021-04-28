1.SettingEntry
前置数据
selectCurrentWikiSpaceId:点击时，根据spaceId跳转url
selectIsInSpaceSetting

交互：点击设置，url按照spaceId跳转，右侧出现知识库设置页面

2.WikiSpaceInfo
前置数据：
selectCurrentSpaceInfo

交互：点击时，展示弹窗MODAL_TYPES.SPACE_INFO

3.HomeNode
前置数据
selectCurrentSpaceInfo,
  selectCurrentWikiToken,
  selectCanEditSpaceNode,
  selectRootNode,
  //selectIsSidebarVisible,
  selectIsSubMenuAddShow,
  selectFetchStatus('userGuide')
  makeSelectIsGuideDone

  数据初始化：显示用户指引

  事件初始化：定义了节点展开和节点标题点击事件[onItemClick,onContentClick,onExpanderClick]

4.PageTree组件
前置数据：
selectNodeMap://将pageTree.rootNode这个树结构，重新组织，以wikiToken为key，组合成列表
selectRootNode:wiki.pageTree.rootNode
selectRenameNode:wiki.pageTree.renameNode
selectExpandedKeys:wiki.pageTree.expandedKeys
selectCurrentWikiSpaceId
selectCurrentBaseWikiInfo
selectCurrentWikiToken
selectIsSpaceSettingVisible:wiki.ui.isSpaceSettingVisible
selectCanEditSpaceNode://通过用户角色判断：userRole !== WIKI_ROLE.VISITOR
selectLoadingKeys:wiki.pageTree.loadingKeys
selectSettingEditable:wiki.ui.isSpaceSettingVisible
selectDefaultAreaId
selectIsFetchingPageTree:wiki.pageTree.isFetchingPageTree
selectMemberProp:wiki.permission.memberProp
selectHasSpaceInfo
selectSingleTreeRootNode
selectPermRequestConfig:wiki.permisiion.permRequestConfig
selectIsShowRequestBanner://根据wiki.permission相关信息判断wiki.permission[suiteToken]

数据初始化

事件初始化
1)eventEmitter监听WIKI_EVENTS.SCROLL_INTO_CURRENT_NODE，滚动到指定wikiTOken的节点处
2)全局监听mousedown事件，动作位于节点时，发请求获取节点数据
目的：节点有子节点时，提前拉去子节点信息。
action:fetchChildren
3）节点下拉尖头被点击
更新展开的节点信息；更新当前节点样式；收集树展开时间消耗(wikiCollector);
4）页面注销时断开协同连接

交互：
点击节点内容：触发action：actionTypes.WIKI_JUMP；saga拦截，更新currentWikiInfo，修改url；(参考：src/business/wiki/redux/sagas/ui.ts)
节点内容（子节点）加载失败：将展开节点收起。
节点拖动：判断父节点是否发生变化（同级拖动），非同级，需要展示确认弹窗，然后=触发action:actionTypes.WIKI_PAGE_TREE_DRAG_NODE_V2。

5.WikiTree
数据初始化：
1）重组pageTree的事件监听
2）设置树节点hover的功能面板内容
3）设置树节点图标
4）默认选中节点初始化

交互：
拖动节点：收集当前拖动节点信息，拖动位置信息；设置拖动样式；
进入页面，默认滚动到选中节点

6.NodeTitle组件

交互处理：
监听mouseEnter，更新hoverId
重命名节点，处理节点名称重命名；输入框失焦，新节点名称同步接口
节点重命名，action：actionTypes.UPDATE_TITLE触发，并接收协同信息
wiki协同处理：src/business/wiki/redux/actions/syncPageTreeV2.ts

7.SubMenu/WikiNodeSubMenu
前置数据
selectNodeMap
selectCurrentWikiSpaceId
selectIsOnline
selectCanEditSpaceNode
selectSettingEditable
selectRole
selectMemberProp
selectIsInReadonlyMode
selectCurrentWikiObjType
selectPermissions

新建面板初始化：根据用户当前权限信息，组织展示的新建项目（wiki，sheet，drive等）；
更多操作面板初始化：根据用户权限，面板展示（重命名，移动，删除，批量删除，拷贝)等功能项

交互：
面板可见时，触发action:actionTypes.permission.FETCH_USER_PERMISSION_ON_SUITE,获取用户在当前suite权限信息
新增触发action:actionTypes.WIKI_PAGE_TREE_CREATE_WIKI;服务端请求创建成功，toast反馈

重命名触发action:actionTypes.WIKI_SET_RENAME_NODE

8.PermissionRequest组件
作用？
前置条件：
selectPermRequestConfig
selectHasSpaceInfo

数据初始化：
发请求获取权限信息 （fetchAreaAdmins)

交互：
1）点击权限申请，发请求 applyForWikiSpacePermission；弹出toast提示；




