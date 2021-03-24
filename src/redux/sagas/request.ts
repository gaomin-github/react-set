// import axiosInstance from '$service/index'
import 'redux-saga';
import {take,put} from 'redux-saga/effects'
// import {SagaIterator} from 'redux-saga';

// export function* requestWatcher(){
//     console.log('saga touched')
//     const {type,get,p}=yield take('testAction3');
//     console.log('get',get,'type',type,'p',p)

//     // if(!_isRequestAction(anyAction)){
//     //     return;
//     // }

//     // if(!anyAction['testAction3']){
//     //     // console.log('not testAction3')
//     //     return;
//     // }
//     // let response=yield axiosInstance.get('/space/api/wiki/tree/get_info/?space_id=6915038928504356865&wiki_token=wikcn2RKXvXS0ubOprb3YhLYBRD&with_space=true&with_perm=true')
//     // // console.log('response',response);
//     let response={
//         spaceId:'001',
//         children:[
//             {
//                 spaceId:'002'
//             },
//             {
//                 spaceId:'003'
//             }
//         ]
//     }
//     // yield put({
//     //     type:'testAction2',
//     //     payload:response
//     // })
// }

export function* testSaga1(){
    console.log('testSata1');

    const anyAction=yield take('*');
    yield put({
        type:'testAction2'
    })
    console.log('testSata1',anyAction);
    // yield fork(requestWatcher)
    // yield all([fork(requestWatcher)])
}

export function* testSaga2(){
    console.log('testSata2');
    // yield fork(requestWatcher)
    // yield all([fork(requestWatcher)])
}


// export default requestSaga