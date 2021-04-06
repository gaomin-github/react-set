组件模仿问题：
// 1.class a extends React.Component<Props,State>{
// }
// Props和state类型声明是否必须？

// 2.react引入less
// （必须操作）安装less-loader ,less，添加postcss.config.js

// 3.react组件css隔离
// 1）行内样式/名称区分
// 2）使用styled-component样式组件（随机生成class）
// 3）对象中存储样式，应用到行内
4）使用插件
3.4实现参考：https://juejin.cn/post/6884047587649781767

4.react-redux使用@connect装饰器
1）安装@babel/plugin-proposal-decorators插件
2）tsconfig配置，允许装饰器
3)babel配置中，设置decorators合法
结论：失败。抽离出connector时成功，用装饰器连接失败，。

5.生命周期 componentDidCatch不生效。
使用参考：src/wiki/components/wiki-sidebar-v2/WikiSidebar.tsx