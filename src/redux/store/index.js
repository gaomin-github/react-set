import {createStore as ConfigStore} from 'redux-dynamic-modules'
import {createStore} from 'redux';
import {fetchTreeReducer,reducerModule,testReducer2,testReducer3} from '$redux/reducers/fetchTree'
const initialState={
    description:'init my redux state'
}
// const store=ConfigStore({
//     initialState,
//     },
// )

// store.addModule(reducerModule())


const store2=createStore(testReducer3,initialState)
export default store2;

