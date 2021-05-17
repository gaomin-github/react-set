wiki模块整理
基础了解
路由管理：src/common/constants/route.ts
角色配置参考：src/business/wiki/constants/permission.ts
性能打点（作用？实现方式？区别？）：
1）tea打点：Web端 JS SDK 使用说明 
demo参考：src/pc/components/navigationbar/DropdownNavMenu/ExplorerNavList.tsx
2）performanceStageCollector性能收集。
文件路径（path:$common/utils/performanceStageCollector)
demo参考：src/wiki/components/WikiDetailV2/WikiDetailV2.tsx
3）WikiCollector
路径：src/business/wiki/helpers/wikiCollector.ts
demo参考（收集节点展开时间）：src/wiki/components/page-tree/PageTree.tsx
错误收集
1）Collector
路径：src/business/wiki/utils/errorReport/index.ts
demo参考：src/pc/components/navigationbar/SuiteNavbar/SuiteNavbar.tsx
fg(featureGate)工作方式：Feature Gating 用户手册 
1）将fg key数据通过模版，注册到window.User中。
2）通过fgHelper获取具体某一项权限。
实现参考：src/business/common/helpers/featureGateHelper.ts
demo参考：src/pc/components/navigationbar/DropdownNavMenu/ReturnMenu.tsx
兜底策略
1）ProgressViewer（进度条loading)（path:src/wiki/components/upload-manager/progress-viewer/index.ts)
2）全局globalLoading：参考WikiSuiteContent；；WikiDetail
3）Spin图标：（面包屑中使用）
4）GlobalLoadingHost：WikiSuiteContent(wiki嵌套的其它内容）
5）列表loading(fetchStatus+SpinIndicator实现)：参考BackNavRecentList；
wiki详情页展示兜底（WikiDetail):
Loading （path:src/wiki/components/common/loading/index.tsx）

请求管理：
1）直接调用api请求
2）提交action，通过saga拦截request标识的action统一处理

组件通信方式：
eventEmitter
window：（参考LinkSharingEntry)
mock方式：


业务词汇：
租户.单品：
代码关键字
tea：用于做性能日志打点
tenant：租户相关
fg：版本控制方法
1）将fg key通过模版，注册到window.User中。
2）通过fgHelper获取具体某一项权限。
实现参考：src/business/common/helpers/featureGateHelper.ts
wiki入口
RouteMain:src/application/pc/components/route-main/RouteMain.tsx
WikiNewHomeContainer:src/pc/components/explorer-v3/explorer-main-entry/wiki-new-home/
WikiSuiteEntry:src/wiki/components/wiki-route-entry/WikiSuiteEntry.tsx
WikiDetail:src/wiki/components/WikiDetailV2/

全局组件初始化：
RouteMain中注册ModalManager（弹窗管理），TourGuide（用户引导）
wiki详情页数据初始化：
wikiSuiteEntry：
初始化知识库配置信息（非接口，wiki特性）；（enterWiki：appState.search)
用户编辑权限接口请求；（fetchUserEditable：wiki.permission.editable）
WikiDetail:
1）数据初始化
2）redux子模块动态加载
3）监听路由变化。wiki详情页跳转时，更新window.wiki_info_map信息
4）协同连接
wiki详情页面结构

WikiDetail(wiki详情页入口）
1. 初始化：
1）加载redux子模块（wiki,doc,sheet等）（redux子模块动态加载参考🍰 Dynamic Modules 食用指南 ）
2）数据初始化：
获取当前wikiToken实体信息；更新wiki.spaces；更新wiki.wikiInfos;
（api调用request请求，获取当前wikiToken对应的wikiEntity，重封装为[wiki.wikiInfos,wiki.spaces]）
获取树信息(聚合接口，提供【知识库:wiki.spaces，权限:wiki.permission.editable，角色:wiki.permission.role，树节点:wiki.pareTree.rootNode;展开节点:wiki.pageTree.expendedKeys】等信息)。
（提交[actionTypes.WIKI_PAGE_TREE_FETCH_INIT_DATA_V2]，聚合接口返回树，知识库，角色，权限等信息；saga中更新数据到redux【知识库:wiki.spaces，权限:wiki.permission.editable，角色:wiki.permission.role，树节点:wiki.pareTree.rootNode;展开节点:wiki.pageTree.expendedKeys】）
3）监听路由变化。wiki详情页跳转时，更新window.wiki_info_map信息
4）协同初始化：按照知识库id创建协同连接（协同依赖公司内部开发插件）
应用参考：WikiSyncV2(src/wiki/components/WikiDetailV2/WikiDetailV2.tsx)

2.页面展示：进入详情页，初始化时做fg判断
- 无fg权限：跳转wiki首页
- 无space权限，跳转wiki首页
- 无wiki节点权限：兜底展示
- 无内嵌组件权限。doc/sheet等，展示权限申请弹窗；
3.交互：
wiki节点切换，重新获取wikiEntity信息
知识库切换：spaceId先变空，再赋予新的知识库id；重新请求聚合接口，重新获取wikiEntity（知识库切换时默认访问知识库根节点对应wiki）

tips：currentWikiEntity和wikiInfos[wikiToken]区别？
- wikiEntity是从服务端，按照wikiToken获取的相关信息
- WikiInfos是前端对WikiEntity做格式重构得到的数据
SidebarHeader

ExporeNavList
功能：返回按钮的快速导航面板中，展示固定几项。
实现方式：展示内容以及点击跳转等行为从项目配置文件读取
配置文件：(src/pc/components/navigationbar/DropdownNavMenu/config.ts)
BackNavRecentWikiList
功能：返回按钮的快速导航中，展示最近访问项。最近访问记录，hover可通过缩略图形式预览每一项内容；
实现：
滚动列表依赖库：react-infinite-scroller
内容缩略图实现：src/pc/components/explorer-v3/common/file-preview/FilePreview.tsx
兜底：LoadingWrapper+SpinIndicator
兜底参考：src/pc/components/navigationbar/DropdownNavMenu/back-nav-common-recent-list/BackNavCommonRecentList.tsx
兜底展示时机：recentList为空，且对应数据拉取中
SidebarLogo：BranchMenuHoc作用？在哪些条件可用？
SwitchSpace：知识库切换
功能：知识库切换
实现：
切换知识库时，会提交[actionTypes.JUMP_WIKI_HOME,actionTypes.WIKI_JUMP]，更新wiki.spaces信息，修改url
PageTree

功能：wiki当前知识库树展示。按照权限，支持拖动，点击；
实现（antd库）：
1）数据初始化：
eventEmitter监听WIKI_EVENTS.SCROLL_INTO_CURRENT_NODE，树列表滚动到指定节点。在saga中触发；
监听节点mousedown，请求子节点信息[actionTypes.WIKI_PAGE_TREE_FETCH_CHILDREN] 
组件注销，断开协同连接
2）拖拽样式：监听拖拽，构造拖拽节点，跟随鼠标
3）交互：
点击节点：触发[actionTypes.WIKI_JUMP]，saga拦截，更新currentWikiInfo，修改url；(参考：src/business/wiki/redux/sagas/ui.ts)
点击节点下拉箭头：更新ui信息，收集节点展开时间消耗（收集工具：wikiCollector：business/wiki/helpers/wikiCollector）
节点拖动：判断是否同级拖动。同级，改变节点位置；非同级，展示确认弹窗
兜底：ant-tree

renderMainRootTree和RenderSingleTree（游离树）
WikiTree
功能：收集当前拖动节点信息，拖动位置；设置节点拖动样式；提供节点hover时，交互面板；
NodeTitle
(src/wiki/components/wiki-tree/NodeTitle.tsx)
功能：提供树节点hover功能窗口展示；树节点重命名（重命名功能是否开放，和当前用户权限有关）
1）ui初始化：
新建面板初始化：根据用户当前权限信息，展示的可新建内容[wiki，sheet，drive...]，所有可新建选项为静态配置数据；
WikiNodeSubMenu(src/wiki/components/page-tree/sub-menu/connector.ts)
更多操作面板初始化：根据用户权限，展示（重命名，移动，删除，批量删除，拷贝)等内容
2）事件注册：监听mouseEnter，更新hoverId

WikiSpaceInfo和SettingEntry
当前用户是知识库管理员：SettingEntry；非管理员：WikiSpaceInfo
SettingEntry：跳转到当前知识库设置页面
WikiSpaceInfo：以弹窗形式展示知识库相关信息

WikiSuiteContent
展示策略：
1）sheet/doc展示：按照currentWikiInfo信息，获取嵌套类型，调用相应展示组件
兜底：
1）不支持的内嵌内容展示：
NotSupportType
2）loading态
GlobalLoadingHost：src/wiki/components/WikiDetailV2/wiki-loading/GlobalLoadingHostComponent.tsx

WikiSuiteNavbar/SuiteNavbar
(路径：src/pc/components/navigationbar/SuiteNavbar/connector.tsx)

SuiteHeader（支持在wiki首页和详情页复用）
1）事件初始化：
1）监听keydown。快捷键调起功能（全局搜素，高级搜索，全屏/演示）
2）App.utils订阅'searchBox_blur‘，隐藏搜索？？？
3）粘贴板Clipboard初始化，存储分享链接内容，监听调用，调用成功toast提示
4）eventEmitter监听TRANSLATE_EVENT.UPDATE_TRANS_TITLE，更新translateTitle内容???

2）页面展示：当前页面是详情页或首页，通过route判断
（参考：isUnderWiki path:src/common/helpers/routeHelper.ts）
wiki详情页进入：展示wikiLogo组件+share+MoreMenu+其它
wiki首页进入：展示WikiLogo+搜索组件+其它
wiki文件类型？：wikiLogo+Share+OpenWith+其它
单品用户进入详情页：搜索icon右侧多展示一个Notification组件

LoadableWikiLogo
1）兜底：
加载中：Spin
加载完成：面包屑Breadcrumb

Breadcrumb
1）ui初始化：
根据当前wiki在知识库的路径，wiki右侧容器宽度，计算可展示的面包屑数量
2）事件初始化
resize监听：重新计算面包屑数量
eventEmitter监听[EVENTS.WIKI_SIDEBAR.CHANGE_SIDEBAR_STATE]（侧边栏宽度改变时触发）
触发位置：src/wiki/components/wiki-sidebar-v2/wiki-sidebar-container/WikiSidebarContainerV2.tsx

BreadcrumbItem和BreadcrumbEllipsisList
BreadcrumbItem：最后一项右侧展示收藏；其它项展示>
BreadcrumbEllipsisList：面包屑为列表时使用。（场景：面包屑过长，收缩为...时使用；hover在...时展示）

NodeTitle
(src/wiki-v2/components/breadcrumbV2/NodeTitle.tsx)
有编辑权限：hover时展示位titleInput组件，支持重命名
无编辑权限：点击时切换wikiToken

StarWiki
功能：收藏或取消收藏
1.0:增加收藏，触发action:actionTypes.explorer.ADD_STAR;取消收藏，触发action:actionTypes.explorer.REMOVE_STAR
2.0: 增加收藏，触发action:actionTypes.ADD_STAR;取消收藏，触发action:actionTypes.REMOVE_STAR

User+UserList：展示协作用户信息
初始化：
监听resize,调整用户列表位置？？？
协同操作用户展示：最多展示6人，超过时区域展示5人+more按钮，more被点击时出现下拉用户列表
（userList内容，协同处理中，触发更新到redux）
Share+ShreMenu+InviteMember+InviteMemberLayout
功能：当前wiki链接分享。为首次分享用户提供引导；
功能实现
1）用户引导：src/common/utils/onboarding/index.ts
demo：src/pc/components/share/share-menu/ShareMenu.tsx
2）分享链接点击拷贝：clipboard库
demo：src/pc/components/suite-header/SuiteHeader.tsx

MoreMenu
（文件路径：src/pc/components/navigationbar/MoreMenu/MoreMenuPreloader.tsx）
功能：...hover后展示更多操作【查找，替换，历史评论...】。具体操作项在配置文件读取
配置文件：src/pc/components/navigationbar/MoreMenu/config.tsx

SearchNote(SearchBox+SearchList) 
功能：支持wiki搜索，当前知识库搜索，高级搜索
数据初始化：
1）获取搜索历史。actionTypes.search.FETCH_SEARCH_HISTORY
2）获取最近浏览记录:[actionTypes.search.FETCH_RECENT_WIKI,actionTypes.search.FETCH_REFINE_SEARCH]
事件初始化：
keydown监听，支持快捷方式调起搜索
mousedown监听，search失焦收起搜索面板和搜索框
交互：
搜索提交[actionTypes.search.FETCH_SEARCH_WIKI]

NewNoticeButton
功能：新功能发布后的提示和功能预览
新功能信息获取：依赖@lark/web-core/es/net
交互：
hover到新功能icon，展示更新信息。没有更新信息展示兜底；hover后出现面板，点击跳转帮助页面
点击icon,跳转帮助页面，icon更新。

WikiSuiteVisibilityChangeReporter
全局事件初始化：监听页面展示隐藏（具体作用？）

结构参考：wiki详情页结构 
