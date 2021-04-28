1.SuiteHeader组件(wiki首页和详情页共用)
前置数据：
selectCurrentMembersWithoutSelf:state.appState.members-currentUser

数据初始化:
1）触发action：actionTypes.FETCH_CURRENT_SUITE，更新suite.currentSsid
触发action: actionTypes.explorer.FETCH_SUBSCRIBE_STATUS;saga监听，触发action:actionTypes.explorer.UPDATE_SUBSCRIBE_STATUS
触发action：actionTypes.explorer.FETCH_OBJ_PATHS，
2）获取wiki实体信息(fetchWikiEntity)

事件初始化：
1）监听keydown。快捷键调起功能（全局搜素，高级搜索，全屏/演示）
2）App.utils订阅'searchBox_blur‘，隐藏搜索？？？
3）粘贴板Clipboard初始化，存储分享链接内容，监听调用，调用成功toast提示
4）eventEmitter监听TRANSLATE_EVENT.UPDATE_TRANS_TITLE，更新translateTitle内容???

当前页面是详情页或首页，通过route判断（参考：isUnderWiki path:src/common/helpers/routeHelper.ts）
wiki详情页进入：展示wikiLogo组件+share+MoreMenu
wiki首页进入：展示WikiLogo+搜索组件
wiki文件类型？：wikiLogo+Share+OpenWith
单品用户进入详情页：搜索icon右侧多展示一个Notification组件
hover到more按钮上时

在wiki知识库设置页时，不展示协同用户信息

2.LoadablewikiLogo组件
数据初始化：
加载中时，展示Spin
加载完成：展示面包屑+更新信息

3.SuiteMeta

事件初始化：
1）监听doc来源的EventEmitter：EVENTS.PC.DOCS.SYNC_NOTE_META；当前doc内容变更时，更新变更状态（是否修改成功，最近修改时间）
2）根据当前doc状态，展示保存状态提示/最新保存时间
3）监听窗口resize事件。作用？？？

交互：
点击suiteMeta时，根据当前wiki嵌套内容，展示历史版本面板

4.Breadcrumb

数据初始化：
1）根据当前wiki的上下文位置，和容器宽度，计算面包屑展示数量

事件初始化：
1）监听resize，重新计算面包屑数量
2）eventEmitter监听：EVENTS.WIKI_SIDEBAR.CHANGE_SIDEBAR_STATE，重新计算面包屑展示数量

5.BreadcrumbUi组件

6.BreadcrumbItem组件
初始化：
面包屑最后一项，右侧展示收藏；其它项右侧展示指向箭头

交互：
点击面包屑，跳转面包屑对应的wiki
7.BreadcrumbEllipsisList组件
和BreadcrumbItem区别？面包屑项是数组时使用（内容没有空间完全展示，收缩为...时）；内容嵌套在popover中

8.NodeTitle
有编辑权限时，展示为titleInput组件，可以编辑（使用TitleInput实现）
无编辑权限时，只做标题展示，只支持点击


9.TitleInput
使用AutosizeInput(react-input-autosize)支持hover,click，blur等事件；hover时有文案提示



10.StarWiki
交互：
点击：增加收藏，触发action:actionTypes.explorer.ADD_STAR;取消收藏，触发action:actionTypes.explorer.REMOVE_STAR

11.User组件

事件初始化：
监听resize（作用不明确？？？）:预期调整用户列表位置
协同操作用户展示区域：最多展示6人，超过时区域展示5人+more按钮，more被点击时出现下拉列表

交互：
点击more:展示下拉式用户悬浮列表

12.UserList
展示横纵两种类型用户列表。区别：列表展示方向不同；一种hover时有名称提示，不hover不展示；另一种无hover态

13.Share
数据初始化：
1）获取用户在当前套件权限信息。action:actionTypes.permission.FETCH_USER_PERMISSION_ON_SUITE(entities.permissions)

2）action:actionTypes.permission.FETCH_SUITE_PUBLIC_PERMISSION（entities.permissions)
补充entities.permissions.[publicPermission,publicPermissionState,isOwner等信息]
参考：src/common/redux/reducers/share.js
3）获取文档已添加权限的成员数量。action:actionTypes.permission.FETCH_AUTHORIZED_MEMBERS_COUNT（对应处理reducer和saga未找到？？？）

交互：点击分享按钮：打开分享面板；（分享面板已打开时，初次操作，显示指引）

14.ShareMenu
数据初始化：
1）单品用户增加引导

15.InviteMembeer
通过PanelRoute和PanelSwitch管理展示内容
数据初始化：
1）提交action:FETCH_USER_PREFERENCE;appState.userPreference数据初始化

事件初始化：
1）监听keydown，判断分享面板是否失焦，收起面板
2）监听mousedown，和keydown处理类似
3）监听resize，调整面板高度？？？
4）监听shareMenu关闭

16.InviteMemberLayout
DownShift组件，使用‘down-shift'库

数据初始化：
1）增加引导:STEP_TYPES.import_success_share_plan_a

17.InviteMemberListEntry组件(邀请协作者-title功能；展示已邀请的协作者管理面板)
交互：hover协作者展示name;点击弹出协作者管理面板。

18.LinkSharingEntry组件（链接分享功能）
事件初始化：
1）监听shareMenu隐藏（通过window共享shareMenu变量，内部emitter文件注册监听）
参考：sheet-packages/packages/io/src/collaborative/collaborativeContext.ts
2）初始化粘贴板信息

19.WikiPermissionEntry（页面树设置）

20.FolderConfigEntry组件（分享方式）？？？
SuiteConfigEntry和FolderConfigEntry各自对应业务？
 {
    shareMethod ?
    this.isFolder ? !this.isTeamSpaceShareRoot ? <FolderConfigEntry /> : null
    : <SuiteConfigEntry /> : null
    }

21.LoadableMoreMenu+MoreMenu
MOreMenu组件
读取wikiconfig配置信息，封装后。按照配置展示面板

22.CommentHistory（wiki doc右侧评论区）
引入位置：src/pc/components/navigationbar/SuiteNavbar/SuiteNavbar.tsx

wiki/doc中有两个评论功能。moreMenu中的是commentHistory，展示已解决的历史评论记录
doc右侧有评论按钮，右侧可以展示当前文档的所有评论信息

初始化：监听评论信息触发'commentDataChangeRemote'（使用commentSdk）
参考：src/pc/components/history/comment-history-v2/CommentHistory.tsx
处理方法：src/common/helpers/commentSDKHelper.ts
调用sdk：@platform-fe/comment

23.CommentHistoryItem
使用{IComment,ReplyList}实现

24.SearchNote组件：SearchBox+SearchList
数据初始化：
1）获取搜索历史。actionTypes.search.FETCH_SEARCH_HISTORY
2）获取最近浏览记录:[actionTypes.search.FETCH_RECENT_WIKI,actionTypes.search.FETCH_REFINE_SEARCH]

事件初始化
1）监听keydown，快捷方式调起搜索功能
2）监听mousedown，判断搜素icon是否被点击；搜索框是否失焦（失焦隐藏搜索框和结果）
3）展示搜索历史和最近浏览信息

交互：
actionTypes.search.FETCH_SEARCH_WIKI
<!-- 
只在wiki中搜索：actionTypes.search.FETCH_RECENT_WIKI
在文件中搜索：actionTypes.search.FETCH_REFINE_SEARCH
其它情况：actionTypes.search.FETCH_RECENT_IN_SEARCH_BOX -->

25.Notification（仅单品用户展示/单品模式下展示）

26.NewNoticeButton
事件初始化：
1）监听eventEmitter：SUITE_CAN_READY,提醒完成时，修改图标
2）获取新功能信息（依赖：@lark/web-core/es/net）

交互：
1）hover到icon上，展示更新信息。没有更新信息展示兜底
2）点击icon,跳转帮助页面。icon更新。
3）hover后出现面板，点击跳转帮助页面

27.TodoButton
ToDoCenter在RouteMain中嵌入。
路径：src/common/components/todo-center/TodoCenterWrapper.tsx
src/application/pc/components/route-main/RouteMain.tsx

事件初始化：监听keydown,作用？？？


28.TodoCenter
路径：src/common/components/todo-center/TodoCenter.tsx

事件初始化：
监听visibilitychange,刷新页面内容
监听mousedown，关闭弹窗

29.NewUserAvatarWithMenu（语言切换，团队切换，设置等功能）













qa？
1。suiteType映射关系参照：NUM_SUITE_TYPE:src/common/constants/common.ts
2.文件类型如何在wiki打开，展示？
3.translate的具体含义？
4.Tooltip用法？popover用法？autosizeInput和input区别？
5.接口？
6.Reac.children.forEach(el,fun)用法？INviteMember中PanelSwitch实现原理？
7.Tenant 租户相关
8.登陆信息验证
9.saga拦截哪些action
10.tea用于做性能日志打点
参考：https://bytedance.feishu.cn/docs/8YSvsFv8OIelbLxsVbB4Gg
11.tenant是租户/团队管理相关
12.wiki中
entity,obj；objToken,wikiToken区别？
13.导航面板信息，配置数据位置：
14.异步管理组件方案/位置
14.src/pc/common和src/bussiness负责哪些模块？
15.协同创建流程？
参考：
16.项目相关
1）e2e在镜像运行
参考：https://bytedance.feishu.cn/docs/doccnWAr9w0DmeqGnhEhwAYwO7c
2）发布项目实操，参考：
https://bytedance.feishu.cn/docs/oPVcimcogJM1xMpRpjQnSc
3）ab测试如何使用参考：
https://bytedance.feishu.cn/docs/cHdspjPcqDwnLN0hFLI4Lg

17.wiki实现业务，代码块分布


17.租户+管理员+空间成员（成员+角色）+一级页面+游离树+单容器+suite+知识库的meta
知识库meta?(知识库设置信息。管理员信息，成员，对外分享开放程度等)
游离树？singleTree

18.前前端（数据模式）
19.block
20.路径
wiki首页
src/application/pc/components/route-main/RouteMain.tsx
（初始化Guide,ModalManager)
src/pc/components/explorer-v3/explorer-main-entry/wiki-new-home/WikiNewHomeContainer.tsx
(首页内容渲染)

wiki详情页入口：
src/application/pc/components/route-suite/RouteSuite.tsx

（wiki详情页路由匹配）
src/wiki/components/WikiDetailV2/WikiDetailV2.tsx
(详情页内容渲染)

wikiSuiteEntry：
详情页数据初始化：
enterWiki：初始化知识库配置信息:appState.search
fetchUserEditable：接口请求，初始化：wiki.permission.editable

加载doc,sheet,wiki对应的redux子模块
参考redux动态加载：
监听路由变化。wiki详情页跳转时，更新window.wiki_info_map信息

wikiDetail:
数据初始化：更新wiki.spaces
首次进入，更新wiki.wikiInfos
获取树信息时，聚合接口，也提供了【知识库，权限，角色，树节点】等的信息



wiki业务侧redux数据管理：src/business/wiki/redux


learnings：
1.动画插件使用：react-motion
2.列表插件使用
3.