// 1.Swich路由映射组件：选择第一个路径匹配的路由
import { Switch } from 'react-router-dom';
<Switch>
    <IRoute path={route.PATH.DOC} render={() => (<Home {...{ Component: Doc }} />)} />
    {!sheetGarrEnable && <IRoute path={route.PATH.SHEET} render={() => (<Home {...{ Component: Sheet }} />)} />}
    <IRoute path={route.PATH.MINDNOTE} render={() => (<Home {...{ Component: MindNote }} />)} />
</Switch>


