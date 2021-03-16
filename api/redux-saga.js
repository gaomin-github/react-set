
// 参考：https://www.cnblogs.com/libin-1/p/6858558.html#:~:text=put%E6%98%AFsaga%E5%AF%B9Redux,%E5%86%99%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E6%8F%90%E4%BE%9B%E7%9A%84%E3%80%82&text=%E6%9C%89%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F%E6%9D%A5,%E7%BC%93%E5%AD%98%E6%88%90%E5%8A%9F%E5%A4%B1%E8%B4%A5%E7%9A%84%E7%8A%B6%E6%80%81%E3%80%82

// 3.redux saga 
// 是什么？如何工作的？解决什么问题？使用场景？用法？原理？
// 作用：提供副作用方法，当action被dispatch时，扩展内部函数。
// 目的：redux数据更新中的业务数据处理，抽离到redux saga处理
// 使用方法：
// 1）redux-saga和redux连接，生成新的redux实例（applyMiddleWare），再初始化store
// 2）saga文件编写：利用saga自带方法（take,takeEvery），实现一个或多个监听action触发的函数；初始化时，会触发函数，执行监听
// 3）api方法
// takeEvery：监听每个触发任务。
// Take:使监听附加上条件，监听执行可控
// takeEvery&take区别？使用场景？
// https://redux-saga.js.org/docs/advanced/FutureActions.html
// takeLatest：监听最后一次触发任务。之前的触发后任务，都会被取消执行
// Put：触发dispatch（相当于对dispatch做重封装）
put({type:'actionName',errFun})
// Call：执行一个异步调用
call(Api.fetch,params)
// Fork：多个异步执行，不阻塞之后的任务执行。
// Cancel：取消某一个call或fork任务
// 并行任务执行，类似promise.all，race，
spawn(fun,...args)//类似fork，
// fork衍生的fork，会阻塞主线程
// spawn衍生的spawn，不会阻塞主线程
// 参考：https://www.stacknoob.com/s/UUPm4G836VW9oVyGVTV4C2






//1. saga初始化用法？
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

// 创建 saga middleware
const sagaMiddleware = createSagaMiddleware();
// 注入 saga middleware
const enhancer = applyMiddleware(sagaMiddleware);

// 创建 store
const store = createStore(rootReducer, /* preloadedState, */ enhancer);

// 启动 saga
sagaMiddleWare.run(rootSaga);








// 2.使用场景

// 场景1：初始化，获取wiki->space信息
// 1）初始化store时，configStore中，注入saga
// store参考：src/application/pc/services/redux/store.ts
// 2）saga中
// saga参考：src/application/common/services/redux/modules/appState.ts
//  以fetchSpaceInfo为例

// appState.ts收集所有saga
// 3）sagas：
// 参考：src/business/wiki/redux/sagas/index.ts
//     src/business/wiki/redux/sagas/pageTree/index.ts
// 对所有saga作重包装，最终执行位置：
//     src/business/wiki/redux/sagas/pageTree/fetch.ts

export const fetchSagas = takeEveryMap([
    [`${actionTypes.WIKI_PAGE_TREE_FETCH_INIT_DATA_V2}_SUCCESS`, handleInitPageTreeDataSuccess],
  ]);
  const handleInitPageTreeDataSuccess=()=>{
    yield put(fetchSpaceInfo(spaceId));
  }
// 4）fetchSpaceInfo为axios请求
// 参考文件：src/business/wiki/api/index.ts
export async function fetchSpaceInfo(spaceId: string): Promise<any> {
    return fetch({
      method: METHOD.GET,
      url: API_URLS.FETCH_SPACE_INFO,
      params: {
        space_id: spaceId,
      },
    });
  }
  
import { CALL_HISTORY_METHOD } from 'react-router-redux';
import { getSagaExtension } from 'redux-dynamic-modules-saga';



// react-saga/effects
