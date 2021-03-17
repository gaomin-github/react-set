import {createStore as ConfigStore} from 'redux-dynamic-modules'
import {createStore} from 'redux';
import {fetchTreeReducer,reducerModule,testReducer2} from '$redux/reducers/fetchTree'
const initialState={
    description:'init my redux state'
}
// const store=ConfigStore({
//     initialState,
//     },
// )

// store.addModule(reducerModule())


const store2=createStore(testReducer2,initialState)
export default store2;

