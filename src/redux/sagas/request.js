// import axiosInstance from '$service/index'
import {take,put,call,select, all,fork} from 'redux-saga/effects'

export function* requestWatcher(){

    // const testSaga3=yield take('testAction3');

    // console.log(testSaga3,9)

    const anyAction=yield take('*');

    console.log(anyAction,11)
    // console.log('anyAction touched-------saga',anyAction)

    // if(!_isRequestAction(anyAction)){
    //     return;
    // }

    if(!anyAction['testAction3']){
        // console.log('not testAction3')
        return;
    }
    // let response=yield axiosInstance.get('/space/api/wiki/tree/get_info/?space_id=6915038928504356865&wiki_token=wikcn2RKXvXS0ubOprb3YhLYBRD&with_space=true&with_perm=true')
    // // console.log('response',response);
    let response={
        spaceId:'001',
        children:[
            {
                spaceId:'002'
            },
            {
                spaceId:'003'
            }
        ]
    }
    yield put({
        type:'testAction2',
        payload:response
    })
}

export function* testSaga1(){
    // console.log('testSata1');
    // yield fork(requestWatcher)
    yield all([fork(requestWatcher)])
}

// export default requestSaga