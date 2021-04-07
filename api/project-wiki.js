import { isClassOrTypeElement } from "typescript"

1.WIKI详情页入口：src/wiki/components/wiki-route-entry/WikiSuiteEntry.tsx
组件：
1）WikiAnnounce
2)BranchMenuBlock
3）wikiDetailV2

数据,action初始化：
enterWiki：
fetchWikiAdminPermission；
leaveWiki

tip页面的props类型：
1）selector中获取
2）自定义业务实体数据存储。参考：src/business/wiki/typings/index.ts

2.wiki详情页：wikiDetailV2
组件：
WikiSidebarV2（左侧边栏）
右侧（根据路由匹配进入）[WikiSuiteNavbar&([WikiSuiteContent,WikiSuiteVisibilityChangeReport]|Permissionrequest)]
Loading(加载兜底)
ProgressViewer（进度条）

数据,action初始化：
[isSingleTree,currentWikiToken,currentBaseWikiInfo,currentWikiSpaceId,currentSpaceInfo,hasCurrentWiki,pageTreeFetchState,cleanUpPageTreeState,currentSuitePermissionInfo,currentSuiteError,currentSuite,singleNode,singleTree,isSameTenantAsOwner,currentUser,permRequestConfig,isLoadding]
[updateCurrentWikiInfo,changeSpaceSettingVisible,cleanUpPageTreeState,updateCurrentWikiArea,setExplorerWikiEntity,changeWikiReadonlyMode,initPageTreeV2,setWikiPermReuestConfig,initCurrentWikiInfo,setDefaultAreaId,insertStandardAloneRootNode]


数据初始化：
1）wikiInfo信息获取：从window上获取validWikiInfoFromWindow并同步到store中，或者，直接调用api请求按照wikiToken获取wikiInfo再同步到store中（这里获取的信息包括area_id)
其中包括对权限异常处理，请求繁忙处理；
权限不足处理：通过接口返回，同步权限配置信息

2）wikiTree信息获取：按照spaceId和wikiToken获取目录树初始化信息，通过saga获取，同步到saga；
3）获取wiki只读模式限制时间（？？？作用）
4)按照spaceId创建协同


问题：permission如何获取？
areaId作用？
SET_EXPLORER_WIKI_ENTITY：含义和作用不明的action
错误收集：wikiCollector
调用action如何获取返回结果？saga拦截action，内部异步如何处理？
进入场景：有链接，通过wikiToken进入？通过知识库spaceId进入？（要控制处理顺序）

3.wiki详情页左侧目录：
组件：
sidebarHeader
wiki目录树
sidebarBottomArea：根据知识库权限，展示设置/知识库[SettingsEntry，WikiSpaceInfo]

数据/action：
[currentSpacePermission,settingEditable]

数据初始化：

4.wiki详情页左侧目录导航：sidebarHeader
组件：DropdownNavMenu,LoadableSidebarLogo,SwitchSpace

4.1.DropdownNavMenu
组件：DropDown{ReturnMenu,GoBackIcon}

4.1.1.DropDown来自byte组件库
4.1.2.ReturnMenu{NavList,NavSectionSeparator,RecentList}
数据/action：
[recentObjListSize, recentWikiListSize,currentSuite, currentUser,isFavoritesHidden, isWikiHidden,visible]

4.1.2.1.ExploreNavList返回和返回弹窗中的主目录导航（业务组件，不具有通用性）
数据初始化：
navList写为静态变量，动态读取渲染
4.1.2.2.RecentList/BackNavRecentList
数据/action： 
[expandNodeMaxHeight,fetchStatus,recentObjects,]
[fetchRecentObjListInBackNav,setInitialHasMore,setInitialLoaded,resetCurrentFolderImageListInfo,saveScrollToNode,scrollParentNode]
数据初始化：
触发action：fetchRecentObjListInBackNav 拉取数据（用户相关信息封装到action/全局请求中。待研究？）
事件初始化：
列表封装在组件中，包含分页加载等处理（具体实现:使用react-infinite-scroller？）

4.2.LoadableSidebarLogo(wiki详情页logo)
组件：[BranchMenuHOC,renderNoPerm，logo]
数据/action：
[currentSuiteError,spaceRole,userGuideStatus,userGuide]
数据初始化：
根据action:userGuideStatus判断引导是否已展示过。
引导展示数据通过addSteps
问题：
renderNoPerm：和fg有关？作用？
BranchMenuHoc作用？有branch相关数据。作用？

4.3.SwitchSpace(知识库切换)
组件：[PopOver{Menu：知识库切换弹窗，MenuItem：当前知识库文案,DownIcon:右侧下拉收起箭头}]
数据/action：
[currentWikiSpaceId,allSpaces,hasSpaceInfo]
[jumpSpaceHome,fetchSearchedWiki,getAllSpace]
数据初始化：
从state中取数据，展示到space切换弹窗上
this.props.allSpaces或者 state.querySpaces,state.query

4.3.1.Menu
组件：[input：过滤,SpaceList:知识库列表]
数据/action：
[data,fromQuery,value,isLoading]
[onSearch,onChange,]
数据初始化：
事件初始化：监听键盘keydown，切换当前选中的知识库

5.wiki详情页左侧目录树：
HomeNode(目录树根节点)
PageTree

6.HomeNode（wiki详情页目录树，根节点）
组件：sideBarMainItem{SubMenu{Popover{Menu,subMenuIcon}}}
说明：Popover和menu来自组件库

数据/action：
[isWikiSheetCreateDone,userGuideStatus,isSubMenuAddShow,currentSpaceInfo,currentWikiToken,rootNode]
[jumpWiki,onToggleNode,editable,isSidebarVisible]


业务初始化：
展示sheet创建指引（指引创建目录：src/common/utils/onboarding/events.ts）


6.1.sideBarMainItem（属性和样式传递中转站）
组件：ArrowIcon，Tooltip(标题文案展示)

6.2.SubMenu(hover加号展示操作的弹窗)
组件：Popover{Menu,subMenuIcon}
数据/action：
[node,suitePermissions,suppressMore,popoverConfig.role,isOnline,nodeEditable,settingEditable,node,isSelected,suitePermissions]
[fetchUserPermissionOnSuite]

数据初始化：根节点的弹窗操作和非根节点的两个弹窗操作区分处理。读取静态配置数据，展示弹窗内容



7.wiki详情页左侧目录树：PageTree
组件：
renderMainRootTree:{homeNode,WikiTree}
renderSingleTree：{restrictedAreaHeader,WikiTree}
renderRequestBanner:{PermissionRequestBanner}(位置不明确？具体使用不明确？用于操作权限申请)

数据/action：
[expandedKeys,nodeMap,memberProp,currentBaseWikiInfo,currentWikiToken,isSpaceSettingVisible,spaceId,loadingKeys,singleTreeRootNode,isFetchingPageTree,expandNode,defaultAreaId,dragNodeDispatchV2,openModal,rhomePageEnable,renameNode,defaultAreaId,ootNode,editable,loadingKeys,isShowRequestBanner,isScrollWrapperDisable]

[collectWikiEvent,jumpWiki,updateExpandedKeys,addLoadingKey,fetchChildren,changeIsTreeWrapScroll,updateNodeTitle,setRenameNode,openModal,permRequestConfig]

数据初始化：
1）eventEmitter监听滚动到当前事件，并做处理。（eventEmitter监听）
为所有树目录节点绑定mousedown事件。触发去加载子节点
fetchChildObserver是加载子节点时的判断处理，和wikiToken映射
同时为目录节点绑定click事件，判断节点的子节点数据是否存在。不存在则延迟展开
2）将root节点数据，expandedKeys，selectKeys，拖拽能力和拖拽权限数据 格式处理，传递给wikiTree
将click,expand,loadData,drop，updatenodeTitle,setRenameNode等事件处理传递给wikiTree
click：判断是打开新页面链接/展开当前节点(通过e.currentTarget和e.target判断)将对展开按钮和点击目录文案处理合并
expand:节点展开。包括对树加载中的处理；同步展开节点信息到stisClassOrTypeElement
loadData：判断数据是否已在预先加载,主动拉去数据，拉去成功/失败定时检查？？？
loadFail：加载失败，取消节点展开样式
drop:根据操作节点和目标节点，做拖拽权限判断，拖拽不同位置策略判断，最后将结果同步到redux


事件初始化：
Wikitree上注册 
问题：eventEmitter在项目中的作用？
用法：$.contains(e.currentTarget as Element, e.target as Element);
renderMainRootTree和renderSingleTree：区别？

(正在展示的目录树)renderMainRootTree，data源：this.props.rootNode:state.wiki.pageTree.rootNode
（暂时没有用到的树）renderSingleTree，data源：this.props.singleTreeRootNode:state.wiki.pageTree.singleTreeRootNode


8.WikiTree
组件：
Tree{WikiTreeNode{nodeTitle}}：树节点（对antd的tree节点做封装）。循环嵌套生成树结构。在根节点监听拖动，构造拖拽样式

数据/action：
[loadingKeys,defaultTitle,isPageTree,currentWikiToken,renameNode,href,]
[onLoadDataFail,getController,setRenameNode]

数据初始化：


事件处理初始化：
树的所有节点，监听[dragenter,dragover,dragover事件]
树节点标题绑定 mouseenter 节点重命名等处理；
scrollClient：选中目录节点自动进入可视区域


qa?
拖拽树和不可拖拽区别？
节点中需要preventDefault和stopProgation场景？
全局用法：t('Creat...')作用：按钮等多语言模式翻译
an:[config/webpack.config.base.js,config/i18nHelperEject.js)

9.WikiSuiteNavbar
组件：
?[ExpandSidebarBtn,DropDownNavMenu](作用不明确)
MultiStagerenderContainer(处理组件加载中状态)
SuiteHeader[renderLeftContent:,translateBanner,renderRightContent]
MoreMenuPreloader
(LoadableCommentServiceHistory|LoadableCommentHistory)
Print
BranchList

数据和action：
[history,currentPermission,currentSuite,currentUrlType,otherPermissions,type,toggleNavBar,disable,opendocHeaderConfig,openDocFullscreenConfig,isNavBarInContainer]
[setIframeLayerShow,clickDropdownMenuItem,triggerFindReplace]

事件初始化：
监听键盘keydown
调用doc相关api（registerOpendocApi）

9.3.SuiteHeader
组件：[renderLeftContent,TranslateBanner,renderRightContent]

数据/action：
[suiteToken, suiteType, currentSuite, currentWikiTokenFromUrl, fetchWikiEntity,isAllDataSuccessLoaded,settingEditable,isWikiSpaceSettingVisible, currentSpaceInfo, isRouterLocationInitial,disable,isToCUser,urlType,isWikiHidden,currentFileInfo,settingEditable, isWikiSpaceSettingVisible, isWikiSpaceInfoReadable,isInitialLoaded,isFavoritesHidden,members, shouldEnableAdvancedSearchBox,
    createGuideRedDot,translated,isShareMenuInPopover,currentSuiteError,mindnoteCurrentView,currentUser]
[isAllDataSuccessLoaded,moreMenuVisible,removeSuiteWikiInfo,openModal,showToast]

数据初始化：
1）根据当前wikiToken获取文档订阅状态，文档类型等
2）根据当前wikiToken获取wiki实体对象信息(参考state.appState.currentWikiEntiry：包含space_id，area_id等)

事件初始化：
1）监听键盘keydown，
2）监听剪切板行为。使用Clipboard实现
3）performanceStageCollector收集header_nav渲染状态
4）eventEmitter监听TRANSLATE_EVENT.UPDATE_TRANS_TITLE，切换/过渡期间title

9.3.1.renderLeftContent
组件：
wiki:[SuiteIcon|Icon,LaodableWikiLogo,LoadableWikiSearchNote]


9.3.1.2.LaodableWikiLogo
组件：
[WikiLogo,renderNewLayoutNavbar(Spin|BreadcrumbV2)]
Spin：加载中展示
BreadcrumbV2
数据/action:
[hideWikiEntrace,isWikiHome,hasSpaceInfo,spaceRole,currentSuiteError,isSidebarVisible,isSidebarDisappear,meta,isLoading,editable,hideWikiEntrace]

9.3.1.2.1.BreadcrumbV2
组件：BreadcrumbUi{BreadcrumbItem{BreadcrumbItemWrapper{Nodetitle,BreadcrumbArrowIcon,StarWiki}}}
数据/action：
[currentBaseWikiInfo,breadcrumbData,currentSuiteInfo,suitePermissions,currentMemberCount,isInTranslateMode]
[jumpWiki]
数据初始化：
1）数据来源：在selector中，通过父节点向上追溯获取。
参考：selectBreadcrumbData：src/wiki/components/breadcrumbV2/utils.ts
2）可展示的面包屑数量计算（数量上限和宽度上限两个因素）

事件初始化：
1）监听resize事件，更新面包屑数量
2）eventEmitter监听EVENTS.WIKI_SIDEBAR.CHANGE_SIDEBAR_STATE，更新面包屑数量


9.3.1.3.LoadableWikiSearchNote/SearchNote（wiki首页时会展示）
组件：
[SearchBox,SearchList]
数据/action：
[type,currentSpaceInfo,isSearchHistoryShown, isBrowseHistoryShown,isSearchWikiOnly,isMoreRecentBtnShown]
[fetchRefineSearch,fetchSearchedWiki,cancelSearchedSuite,fetchSearchHistory,onSearchNoteMaskChange,updateSearchHistory,deleteSearchHistory,openModal,fetchRecentWiki]
事件初始化：
keydown：展示搜索框
mousedown：判断输入框是否失焦，收起搜索框

9.3.1.3.1.SearchBox
组件：[SearchIcon，IMEFriendlyInput,iput]（包含高级搜索触发按钮）

数据/action：(都来自父组件)
[searchWord,isInputMode,disabled,]
[onblur,onFocus]

事件初始化：
mousedown:监听focus和blur;

9.3.1.3.2.SearchList:和左侧知识库悬浮快速导航实现有相似之处
组件：ResponsiveHeightList{(SearchItem|HistoryItem|adVancedSearch|RecommendItem)}
数据/action：来自父组件
事件初始化：keydown

ResponsiveHeightList作用？（并非虚拟列表，也没有根据鼠标位置调整高度功能，有最大高度限制）
SearchItem
AdvancedSearch：依赖redux和父组件


9.3.3.renderRightContent
组件:[User(协同用户),Share，PcTool(不是实际组件，～功能块。演示),MoreMenu,(SearchNote|SearchIcon),Notification,CreateFileMenu,NewNoticeButton，TodoButton,AdvancedSearchBox?,renderWikiSpaceBtn?,NewUserAvatarWithMenu,SuiteHeaderDelay]

9.3.3.1.User：
组件：[UserList,DropDown]
(数据/action:来源于父组件+redux)
数据和事件初始化：初始化users宽度；监听resize
9.3.3.2.Share
组件：[TransitionMotion{LazyRender{Align{(PermissionApplication|ShareMenu)}}}]
组件：[LazyRender,PermissionApplication,ShareMenu{InviteMember},Popover]
数据/action：来源于父组件+redux
数据初始化：
获取当前用户在当前套件权限
获取当前套件所有权限
获取协作用户数量
获取文件拷贝权限？（enableContextMenu作用？handleCopyPermission？作用？）

问题：ShareMenu.preload() //作用？


9.3.3.2.2.ShareMenu

组件：[InviteMember{RenderPanelRoutes{[InviteMemberLayout,InviteMemberManager,AskLinkSharingPanel,QrcodePanel,PasswordSettingPanel]},AnyoneVisitRemindDialog,AskOwnerExternalDialog,RemoveMinuteModal,TransferOwnerModal,CopyLinkToast}]
数据/action：来源于父组件+redux
数据初始化：增加引导初始化

9.3.3.2.2.1.inviteMemberLayout
组件：[InvitedMemberListEntry,SearchEntry,CrossTenantSharetips,LinkSharingEntry,WikiPermissionEntry,FolderConfigEntry,SuiteConfigEntry,SearchMemberList]
数据/action:来源于父组件

数据初始化：初始化引导步骤

9.3.3.2.2.2.InvitedMemberManager
组件：[InfiniteScroll{InvitedMemberItem}]

9.3.3.3.MoreMenu：（数据来源：父组件+redux)
数据初始化：
1）获取当前Suite信息
2）获取当前文档订阅信息
3）获取wiki实体信息
事件初始化：
1）监听keydown
2）App.utils订阅：searchBox_blur
3)clipBoard监听
4）eventEmitter监听

9.3.3.4.NewNoticeButton
组件：[CustomSuiteBtn,CustomBtn,NoticeCallout]
数据/action：继承父组件
数据初始化：
拉取最新信息
事件初始化：
监听最新消息被触发完成，更新页面状态

9.3.3.4.3.NoticeCallout
事件初始化：
监听广播事件：BroadcastChannel，接收发送的最新数据，更新到通知中。（借助插件@byted/broadcast-channel）
问题：broadcast和协同，eventEmitter区别？适用场景？



















左侧拖拽在哪里实现？

suite含义？（参考fetchCurrentSuite)
subscribe含义？订阅。对应于关注文档更新
areaId：（早期用于权限划分，现阶段不清楚？）

react:userCallback作用？

browserHelper.isLarkPcTab含义？wiki有在飞书pc的预览？适配如何实现的？有哪些功能？


权限如何划分？前端如何管理？
登陆信息如何塞进去？
fg需要在哪里通过代码判断？（fg通过go生成模板，内部携带fg控制的版本资源）代码中是否需要对fg做处理？
tea打点的不同方式

fg用于判断功能是否开放，只有是否两种情况。
fg数据集中获取：
src/business/wiki/helpers/featureGateHelper.ts

逻辑可视化控制？

常出现词汇
[translateTitle，suite，wikiEntity]
wikiEntity作用？
App.utils订阅：searchBox_blur
clipBoard监听
eventEmitter监听
broadcast和协同，eventEmitter区别？适用场景？
租户？tenant cross-tenant
重复拉取的请求？