
左侧目录树导航入口：WikiSidebar
path:src/wiki/components/wiki-sidebar-v2/WikiSidebar.tsx

1.wikiDetail
前置数据：

currentWikiToken
currentBaseWikiInfo
currentWikiSpaceId
currentSuitePermission
currentSuite
currentSpaceInfo
wikitoken相关，space相关，suite以及权限相关信息，已初始化到全局
                                                                            
数据初始化
1）wikiEntity/wikiInfo初始化：根据currentBaseWikiInfo和currentWikiToken匹配，判断当前wiki信息是否需要初始化；以及是否需要更新。
wikiEntity获取：按照wikiToken；
url:tree/get_node/
获取到：wikiEntity，封装后得到wikiInfo
全局window.current_space_wiki中有相关信息，取全局信息，更新到redux；否则接口请求最新资源

2)wikitree初始化。[spaceId,wikiToken]=>treeData
url:
3)wikiTree数据初始化之后，根据spaceIde创建协同
4）嵌套的doc/sheet，根据权限信息，展示doc，或者权限申请弹窗

5）SingleTree？
updateSingleNode：初始化单节点树数据
jumpToDocWhenNoPermAndCrossTenant:跳转doc


全局事件初始化
离开时，撤销App.utils.pub('searchBox_blur)

交互场景区分
1)打开wiki详情页：从wiki首页进入；通过wiki详情页链接进入。都可以获取到wikiToken；
场景：
无fg权限：跳转wiki首页
无space权限，跳转wiki首页
无wiki节点权限：兜底展示
无内嵌组件权限。doc/sheet等，展示权限申请弹窗；
2）wiki节点切换：重新拉取wikiEntity数据
3）space/知识库切换：
spaceId变为null，再变为新知识库id，areaId,treeData清空；
重新获取树信息，wikiEntity信息;
spaceId切换时，saga处理WIKI_PAGE_TREE_FETCH_DATA类型action，每次该action被触发，紧接着执行fetchUserRole，获取用户在新的spaceId权限信息


4）singleTree：


tips：
1.错误收集
参考：collectError(path:business/wiki/utils/errorReport)
2.性能收集
参考：performanceStageCollector。updateState（path:$common/utils/performanceStageCollector)

3.WikiInfo和WikiEntity区别？
1）wikiEntity是从服务端，按照wikiToken获取的相关信息
2）WikiInfo是前端对WikiEntity做格式重构得到的数据
参考：safeMergeWikiInfoIntoState（path:src/business/wiki/redux/models/wikiInfo.ts

4.area_id信息
area_id是获取wikiEntity时，服务端返回的。按照[wikToken]={aredId}格式存储在redux中
是否一一对应？

5.featureGate工作模式
1）将fg key通过模版，注册到window.User中。
2）通过fgHelper获取具体某一项权限。
实现参考：src/business/common/helpers/featureGateHelper.ts

6.灰度范围控制实现？


2.WikiSuiteContent组件

前置条件：
currentWikiToken
currentBaseWikiInfo
isSidebarVisible
suiteConfigMap(静态数据。定义了不同类型嵌套内容，对应的展示组件)

展示策略：
1）sheet/doc展示：按照currentWikiInfo信息，获取嵌套类型，调用相应展示组件
2）globalLoading：使用createContext，React.useContext？？？


3.WikiSuiteVisibilityChangeReporter
全局事件初始化：监听页面展示隐藏


4.WikiSidebar组件
前置条件：
enterTransMode:wiki.currentWikiMode.mode
selectTranslate:appState.translate.translated
selectIsSpaceSettingVisible:[]
selectHasSpaceInfo
selectSettingEditable:根据用户role判断，是否是管理员以及以上权限
selectSpacePermission:用户在当前spaceId下的权限信息
demo:{
    role:4,
    memberProp:255,
    timestamp：1111111111100000
}
角色值和数字对应关系参考：src/business/wiki/constants/permission.ts

5.DropDownNavMenu组件
前置条件：
selectBackUrl:飞书首页地址
//selectQuery:appState.route.get('query)
selectCurrentUser:appState.currentUser,
selectCurrentSuiteByObjToken:
selectAppconfigFavoritesHidden:
selectAppconfigWikiHidden:


6.ReturnMenu组件（path:src/pc/components/navigationbar/DropdownNavMenu/ReturnMenu.tsx)
前置条件：
selectRecentObjTokensInBackNav:最近访问历史记录（wki首页）
selectRecentWikiInBackNav：最近访问历史记录（wiki详情页）
wiki首页/详情页根据当前路由信息判断。参考：（src/common/helpers/routeHelper.ts）

单品用户：
非单品用户：
getIsBoxDegradedMode：当前用户是否suite所有者？？？？

degrademode时：只展示ExpolorerNavList（导航菜单上的固定项）
飞degrademode，展示ExplorerNavList+RecentList（近期访问）（wiki首页时，RecentList为BackNavRecentList；wiki详情页时，recentList为BackNavRecentWikiList)


7.ExplorerNavList（根据是否单品，展示列表项不同）

8.BackNavRecentWikiList（path:src/pc/components/navigationbar/DropdownNavMenu/back-nav-recent-wiki-list/connector.ts)
前置数据：
selectFetchStatus('recentWikiInSuiteBackNav')：该请求拉取状态
selectRecentWikiInBackNav：历史访问数据

数据初始化：
调用fetchRecentWikiInBackNav初始化列表数据
url:



9.BackNavCommonRecentList
使用infiniteScroll(react-infinite-scroller)实现无限滚动，分页加载；

10.CommonRecentObjectItem
封装列表项样式管理，点击处理

11.SidebarLogo（src/wiki/components/logo/SidebarLogo.tsx）

前置数据：
selectSpaces:wiki.spaces
selectHasSpaceInfo
selectAsyncError('currentSuite')
selectFetchStatus('userGuide')
selectUserGuide

业务初始化：
用户指引数据加载完毕&fg通过&当前类型指引未完成，则添加用户指引
指引添加，删除，是否走完所有步骤判断：src/common/utils/onboarding/events.ts
实现原理：tourGuide在路由入口处已添加到页面，使用eventEmitter监听。添加指引通过触发eventEmitter实现

12.SwitchSpace(path：src/wiki/components/switch-space/SwitchSpace.tsx)
前置数据
selectHasSpaceInfo
selectSpaces
selectCurrentWikiSpaceId

数据初始化：
弹窗可见时，提交action：getAllSpace获取space信息

交互：
切换space，提交action：jumpSpaceHome
按照关键词搜索，提交action：fetchSearchedWiki

13.Menu（path:src/wiki/components/switch-space/menu/Menu.tsx)
事件初始化：
监听键盘点击，选中/切换








WikiSuiteEntry
指引组件注入时机：（参考src/application/pc/components/route-main/RouteMain.tsx）
