import {createStore as ConfigStore} from 'redux-dynamic-modules'
// import {createStore} from 'redux';
import {getSagaExtension} from 'redux-dynamic-modules-saga';
// import {fetchTreeReducer,reducerModule,testReducer2,testReducer3,reducerModel1,defaultReducer} from '$redux/reducers/fetchTree'
// import {defaultReducer} from '$redux/reducers/fetchTree.ts'
import defaultWikiReducer,{fetchAppInfo,reduxAnalyzReducer} from '$redux/reducers'

import {testSaga1,testSaga2} from '$redux/sagas/request'



var initialState={
    // data: {
    //     users: {
    //       '1': {
    //         id: '1',
    //         name: 'bob',
    //         pets: ['a', 'b'],
    //       },
    //       '2': {
    //         id: '2',
    //         name: 'alice',
    //         pets: ['a'],
    //       }
    //     },
    //     pets: {
    //       'a': {
    //         name: 'fluffy',
    //       },
    //       'b': {
    //         name: 'paws',
    //       }
    //     }
    //   },
    //   ui: {
    //     currentUser: '1',
    //   },
    //   wiki:{
          
    //   },
    //   app:{
    //         id:''
    //     }
}
const commonExtension=[getSagaExtension(),]

const reducerModule1={
    id:'totest',
    reducerMap:{
        // testReducer2, //是从redux工具中看到的store数据结构key
        'wiki':defaultWikiReducer,
        'app':fetchAppInfo,
        'data':fetchAppInfo,
        'r_analyz':reduxAnalyzReducer
    },
    sagas:[testSaga1,testSaga2]
}

const store3=ConfigStore({
        initialState,
        extensions:commonExtension
    },
    reducerModule1,
);


export default store3;
