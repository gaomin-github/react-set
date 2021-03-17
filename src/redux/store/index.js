import {createStore as ConfigStore} from 'redux-dynamic-modules'
import {createStore} from 'redux';
import {fetchTreeReducer,reducerModule,testReducer2,testReducer3,reducerModel1,defaultReducer} from '$redux/reducers/fetchTree'
const initialState={
    // wikiDescription:'init my redux state'
}
// const store=ConfigStore({
//     initialState,
//     },
// )

// store.addModule(reducerModule())


// const store2=createStore(defaultReducer,initialState)
const store3=ConfigStore({
    initialState
},
// {
//     id:'totest',
//     reducerMap:{
//         defaultReducer
//     }
// }
)

store3.addModules([{
    id:'totest',
    reducerMap:{
        'a':defaultReducer,//是从工具中看到的store数据结构key
    }

}])
export default store3;

