import {createStore as ConfigStore} from 'redux-dynamic-modules'
// import {createStore} from 'redux';
import {getSagaExtension} from 'redux-dynamic-modules-saga';
// import {fetchTreeReducer,reducerModule,testReducer2,testReducer3,reducerModel1,defaultReducer} from '$redux/reducers/fetchTree'
// import {defaultReducer} from '$redux/reducers/fetchTree.ts'
import {testReducer2,testReducer3} from '$redux/reducers/fetchTree'

import {testSaga1,testSaga2} from '$redux/sagas/request'
const initialState={
}
// const store=ConfigStore({
//     initialState,
//     },
// )

// store.addModule(reducerModule())


// const store2=createStore(defaultReducer,initialState)

const commonExtension=[getSagaExtension(),]

// console.log(testReducer3,'testReducer3')
const reducerModule1={
    id:'totest',
    reducerMap:{
        testReducer2, //是从redux工具中看到的store数据结构key
        'b':testReducer3
    },
    sagas:[testSaga1,testSaga2]
}

const store3=ConfigStore({
        initialState,
        extensions:commonExtension
    },
    reducerModule1,
);
    // {
    //   id:'totest',
    //   reducerMap:{
    //       testReducer2
    //   },
    //   sagas:[testSaga1,testSaga2]  
    // }
    // ...getReduceModule()



function getReduceModule(){
    return [reducerModule1]
}

// store3.addModules([{
//     id:'totest',
//     reducerMap:{
//         'a':defaultReducer,//是从工具中看到的store数据结构key
//     },
//     sagas:[testSaga1]

// }])


export default store3;

