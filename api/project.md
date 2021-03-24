入口文件
1.
真实找到的入口：
<!-- src/pc/app/index.tsx -->

<!-- src/pc/app/index.tsx -->
<Provider store={store}>
  {browser.isOpendoc && <OpendocApp />}
  <ConnectedRouter history={history} store={store}>
    <Layout />
  </ConnectedRouter>
  <MultiStageRenderContainer keepalive renderOnTimeout renderWhen={renderWhenBusinessDone}>
    <AppChunksPreloader />
  </MultiStageRenderContainer>
</Provider>

<!-- layout -->

<!-- 项目首页：
src/application/pc/components/route-main/RouteMain.tsx -->


<!-- wiki首页
src/application/pc/components/route-main/RouteMain.tsx -->

<!-- src/wiki/components/wiki-route-entry/index.tsx -->

<!-- src/wiki/components/WikiDetailV2/WikiDetailV2.tsx -->
return (
      <>
        <div className="wiki-space-content-container">
          <WikiSidebarV2 />
          <div className="wiki-space-right-area">
            <Switch>
              <IRoute
                path={PATH.WIKI_INDEX}
                exact
                strict
                render={() => (
                  <>
                    <WikiSuiteNavbar />
                    {this.renderSuiteContent()}
                  </>
                )}
              />
              <IRoute path={PATH.WIKI_SPACE_SETTING} exact strict component={SpaceSettingsV3} />
            </Switch>
            {/* <WikiSuiteNavbar />
            {this.renderSuiteContent()} */}
          </div>
        </div>
        {isLoadding && <Loading />}
        {wikiImport && <ProgressViewer />}
      </>
    );

<!-- 侧边栏WikiSidebarV2 -->
<!-- src/wiki/components/wiki-sidebar-v2/WikiSidebar.tsx -->
import { withRouter, RouteComponentProps } from 'react-router-dom';

 <WikiSidebarContainer>
    <SidebarHeader />
    <SidebarMainArea>
      {this.renderWikiTree()}
    </SidebarMainArea>
    <SidebarBottomArea>
      {this.renderWikiSpaceSettingOrInfoEntry()}
    </SidebarBottomArea>

  </WikiSidebarContainer>

export default withRouter(WikiSidebar);

<!-- src/wiki/components/wiki-sidebar-v2/wiki-sidebar-container/index.ts -->

<!-- src/wiki/components/wiki-sidebar-v2/wiki-sidebar-container/WikiSidebarContainerV2.tsx -->




2.
webpack.dev.config.js中配置入口：
src/lark/index.js
ReactDOM.render(
    <App store={store} history={history} />,
    MOUNT_NODE,
  );

// src/lark/components/app/index.tsx
<Provider store={store}>
<ConnectedRouter history={history} store={store}>
  <LayoutRoute />
</ConnectedRouter>
</Provider>


// layout：src/lark/components/layout/layout.tsx
<Switch>
<IRoute path={route.PATH.DOC} render={() => (<Home {...{ Component: Doc }} />)} />
{!sheetGarrEnable && <IRoute path={route.PATH.SHEET} render={() => (<Home {...{ Component: Sheet }} />)} />}
<IRoute path={route.PATH.MINDNOTE} render={() => (<Home {...{ Component: MindNote }} />)} />
<IRoute path={route.PATH.FILE} render={() => (<Home {...{ Component: Box }} />)} />
<IRoute path={route.PATH.DEFAULT} render={() => (<Default />)} />
{getModuleListData('navs').filter(nav => nav.module !== 'sheet' || sheetGarrEnable).map(nav => {
  nav.path = prependSpace(nav.path);

  garrCmpCache[nav.name] = garrCmpCache[nav.name] || getLoadableGarrComponent(nav);

  return (<IRoute
    path={nav.path}
    render={() => (<Home {...{ Component: garrCmpCache[nav.name] }} />)}
    key={nav.module}
  />);
})}
</Switch>
<IRoute path="/" component={OverlayManager} />
<RedirectRoutes />
项目分模块了解
1.根据启动速度查看，启动时webpack做了哪些事情？

2.启动之后，初始化时，react生态，做了哪些事情？

3.初始化为从哪里为wiki做准备？

4.wiki对外暴露的接口，以及wiki监听内部（外是否跨项目？）redux/saga可监听范围？


