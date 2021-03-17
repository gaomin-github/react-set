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

4.redux数据集中放在哪里管理？store数据如何初始化？（分模块存放？如何存放？有哪几部分数据？）
  初始化时以window.___INITIAL_STATE__为初始化数据，构造store

// 5.etensions代码作用？
export function configureStore(initialState: any = {}): IModuleStore<any> {
  const store = createStore(
    {
      initialState,
      extensions: getCommonExtensions(),
    },
  );

  return store;
}

import { getSagaExtension } from 'redux-dynamic-modules-saga';
const getCommonExtensions=()=>{
  getSagaExtension()
}

6.window.___INITIAL_STATE__由谁来初始化？参考：src/application/pc/services/redux/store.ts


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
8.autoResume重组saga，原理？（初始化saga时map映射对不上）
参考：import { autoResume } from '$helpers/sagaHelper';

9.initWikiTreeData业务作用？
参考：src/wiki/components/WikiDetailV2/WikiDetailV2.tsx

10.tree组件引用的antd
参考：src/wiki/components/wiki-tree/WikiTree.tsx

11.tree数据从哪里加载？

12.reducer和saga执行顺序控制？
saga监听发起的action，做处理
reducer，接收action对应的state的更新

// 13.项目中dispatch如何触发？
// redux触发action的不同方式：https://blog.csdn.net/u011077672/article/details/82684019

// 14.项目接口proxy设置位置：
// config/webpack_dev_server.config.js

// 15.store注入过程？
// src/application/pc/services/redux/store 中初始化store

// 初始化时，引用：business/common/services/store

// 进入wiki时，在wikiSuiteEntry中，动态添加store

16.动态store实现原理？使用动态store后，reducers监听的action是字符串还是？

// 17.redux-actions中的createAction是创建action时必须调用的吗？不使用，reducer会调用不到吗？

// createAction可有可无
// reducer中，按照字符串创建handleAction即可


