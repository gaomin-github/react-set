// 1.drop down组件
// wiki页面，侧边导航，快速预览目录箭头
import { Dropdown } from '@byted/byted-spark';

<Dropdown
arrow
showActions={showActions}
hideActions={hideActions}
placement="bottomLeft"
getOffset={this.getDropdownOffSet}
content={
  <ReturnMenu
    visible={this.state.visible}
    currentUser={currentUser}
    currentSuite={currentSuite}
    isFavoritesHidden={isFavoritesHidden}
    isWikiHidden={isWikiHidden}
  />
}
onVisibleChange={this.handleOnVisibleChange}
destroyAfterClose
hideDelay={300}
>
    <GoBackIcon />
</Dropdown>
// 2.浮出窗口（文件快照预览）
import { Tooltip, Popover } from 'spark';
import { updateTypePredicateNodeWithModifier } from 'typescript';

<Popover
  content={<StyledFilePreview file={previewObj} sourceForLog={FILE_PREVIEW_SOURCE_FOR_LOG.backRecent} />}
  key={obj.uuid}
  placement="right"
  adjustPlacements={adjustPlacements}
  adjustOverflow
  destroyAfterClose
  showDelay={800}
  disable={this.shouldDisableAccess}
></Popover>

3.文件预览图片生成
src/pc/components/explorer-v3/common/file-preview/FilePreview.tsx
由文件生成图片
src/common/helpers/iconHelper.ts
// 生成方案是啥？
// 每个目录条目有cover_id属性，根据cover_id，结合类型，cdn地址，获取图片快照地址。？？？需确认


// @byte content中嵌入的组件，看不到props,如何调试？（打断点？）

// 4.redux数据集中放在哪里管理？store数据如何初始化？（分模块存放？如何存放？有哪几部分数据？）
  // 初始化时以window.___INITIAL_STATE__为初始化数据，构造store
  // src/pc/index.jsx中调用了store
  // wikiSuiteEntry中添加了wikiModule（模块化store）

// 5.etensions代码作用？
// 没有extendsions时，模块化saga未生效？
// export function configureStore(initialState: any = {}): IModuleStore<any> {
//   const store = createStore(
//     {
//       initialState,
//       extensions: getCommonExtensions(),
//     },
//   );

//   return store;
// }

// import { getSagaExtension } from 'redux-dynamic-modules-saga';
// const getCommonExtensions=()=>{
//   getSagaExtension()
// }

6.window.___INITIAL_STATE__由谁来初始化？
参考：src/application/pc/services/redux/store.ts


// 7.// 三种发起请求方式：
// src/wiki/components/wiki-route-entry/connector.ts
// state和actions，以connect方式注入wikiSuiteEntry
// 参考：WikiDetailV2->getWikiInfo
// syncPageTreeSagaV2组件


// 真实的请求发出操作：src/business/wiki/api/index.ts
// 1）组件从wiki/api中引入请求函数
// 2）组件中触发action,saga监听action，处理函数中执行wiki/api的方法

// 3）action中，做模版化。request中，初始化saga，监听action，做统一请求处理
// saga监听所有action：src/common/redux/sagas/request/request.ts
// saga收集action/action中和请求有关内容：src/business/wiki/redux/sagas/pageTree/fetch.ts
// 请求统一处理：src/common/redux/sagas/request/retryable.ts
  // 流程：WikiDetailV2->initPageTreeV2-




// action触发时，在saga中发出请求
// 8.autoResume重组saga，原理？（初始化saga时map映射对不上）
// 参考：import { autoResume } from '$helpers/sagaHelper';

// 9.initWikiTreeData业务作用？
// 参考：src/wiki/components/WikiDetailV2/WikiDetailV2.tsx
// 触发action，被saga捕获，发起请求

10.tree组件引用的antd
参考：src/wiki/components/wiki-tree/WikiTree.tsx

// 11.tree数据从哪里加载？

12.reducer和saga执行顺序控制？
saga监听发起的action，做处理
reducer，接收action对应的state的更新
1）saga中有异步操作，是否影响reducer响应



// 13.项目中dispatch如何触发？
// redux触发action的不同方式：https://blog.csdn.net/u011077672/article/details/82684019

// 14.项目接口proxy设置位置：
// config/webpack_dev_server.config.js

// 15.store注入过程？
// src/application/pc/services/redux/store 中初始化store

// 初始化时，引用：business/common/services/store

// 进入wiki时，在wikiSuiteEntry中，动态添加store

// 16.动态store实现原理？使用动态store后，reducers监听的action是字符串还是？

// 17.redux-actions中的createAction是创建action时必须调用的吗？不使用，reducer会调用不到吗？

// createAction可有可无
// reducer中，按照字符串创建handleAction即可


// 18.pageTree->WikiTree（点击，扩展等事件如何绑定到结点）
// 父组件onClick以props传入子组件
// 子组件获取属性，对onClick做重封装。封装块最后调用父组件onClick方法。（双向执行）

19.拖拽时，弹窗等事件触发，dom如何操作的？
1）src/wiki/components/wiki-tree/WikiTree.tsx
this.$wikitree = $('.wiki-tree');
this.$wikitree.on('dragenter', 'li', this.limitDragEnter);
含义？

组件事件重绑定，封装原理？

20.组件库位置，如何触发（以弹窗为例）

// 21.saga安装后报错。
// 解决方案参考：https://juejin.cn/post/6844903810482044936#heading-4
// wiki模块未找到处理该问题的代码？

22.saga使用take('*')获取不到action的参数

// 23.pageTree->WikiTree事件重绑定，处理的必要性？
// 双向执行。
需要研究传参数

// 23.多页面入口项目，页面如何重定向到固定首页？

// 24.弹窗组件如何触发展示
//1） lodables中引用modalManager，注入全局；modelManager会初始化所有弹窗类型组件。
// 参考：src/application/pc/components/route-main/loadables.tsx
// src/pc/components/modal-manager/ModalManager.tsx
//2） saga监听弹窗action，改变弹窗可见性数据。
// src/common/redux/sagas/explorer/advancedSearch.ts
//3） 页面中触发action:open_modal,传入弹窗类型和展示文案。
// 参考：WikiTree
//4） dialog，button等组件，引用@byted/byted-spark
// 参考：src/wiki/components/modals/drag-confirm/DragConfirm.tsx
// 5）modal的visible属性查看
// const visible = typeof modalTypeAndProps !== 'undefined';

// 25.saga中对action['request']的监听，以及接口请求处理
// 1）request中监听所有携带'request'的action，捕获请求参数重封装
// 2）在requestAction中得到一个对象实例，存储当前的action.type，已经请求成功的目标action；
// 3）在retryable中利用wiki/api中封装的axios获得请求实例，并对请求重发撤销做处理
// 4）收到3）的结果后，在request中通过2）获得的目标action,更新返回结果

// 26.tree结点点击，如何通知doc方/如何改变doc内容

// pageTree中引入action:jumpWiki{type:WIKI_JUMP}对象
// 参考：src/wiki/components/page-tree/PageTree.tsx
// saga中监听每次WIKI_JUMP，执行handleWikiJump
// 参考：src/business/wiki/redux/sagas/ui.ts
// 在handleWikiJump中，更新currentWikiInfo

// selector数据A依赖于store.wikiInfo[wikiToken]
// wiki容器中使用了selector数据A，并把数据传递给doc展示插件

// 参考：src/wiki/components/WikiDetailV2/WikiDetailV2.tsx
// action：currentBaseWikiInfo


27.项目接入ts报错


28.协同处理

