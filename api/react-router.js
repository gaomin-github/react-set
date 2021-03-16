// 1.重定向。参考：src/common/components/redirect-routes/RedirectRoutes.tsx
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

<Route
key={index}
path={route.REDIRECT_FROM_PATH[key]}
strict
exact
render={({ location }) => {
  const { pathname, search, hash } = location;
  const targetPathname = prependSpace(`${pathname}`);
  const toPath = `${targetPathname}${search}${hash}`;
  // 这里传完整 URL 使得 generateDomainLocation 里面不会重写 origin 而避免无限重定向问题
  // 这种 URL 校正发生在拉取模板后, 不需要校正 domain, 模板服务已按需 302
  // 这是为绕过 overwriteHistory 的逻辑, feed 中没有此逻辑, 故需区分传不同的东西
  const to = browserHelper.isFeed ? toPath : docsLocation.origin + toPath;
  return <Redirect to={to} />;
}}
/>