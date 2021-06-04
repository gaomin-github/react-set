import { createStore as ConfigStore } from 'redux-dynamic-modules';
// import {createStore} from 'redux';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
// import {fetchTreeReducer,reducerModule,testReducer2,testReducer3,reducerModel1,defaultReducer} from '$redux/reducers/fetchTree'
// import {defaultReducer} from '$redux/reducers/fetchTree.ts'
import defaultWikiReducer, { fetchAppInfo, reduxAnalyzReducer } from '$redux/reducers';

import { testSaga1, testSaga2 } from '$redux/sagas/request';

const initialState = {
};
const commonExtension = [getSagaExtension()];

const reducerModule1 = {
  id:'totest',
  reducerMap:{
    // testReducer2, //是从redux工具中看到的store数据结构key
    wiki:defaultWikiReducer,
    app:fetchAppInfo,
    data:fetchAppInfo,
    ranalyz:reduxAnalyzReducer,
  },
  sagas:[testSaga1, testSaga2],
};

const store3 = ConfigStore({
  initialState,
  extensions:commonExtension,
},
reducerModule1,
);

export default store3;
