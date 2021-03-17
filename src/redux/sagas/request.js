import axiosInstance from '$service/index'
function* requestWatcher(){
    const anyAction=yield take('*');
    console.log('anyAction touched',4)
    if(!_isRequestAction(anyAction)){
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
        type:'fetchPageTree_success'
    })

}

function _isRequestAction(action){
    return !!(action['get']||action['post'])
}

function _requestWorker(action){

}