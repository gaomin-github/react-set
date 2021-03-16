import {createStore} from 'redux-dynamic-modules'
// export default function configureStore(initialState){
//     return createStore({
//         initialState
//     },
//     // ...reducerModules,
//     // ...sagas
//     )
// }

const initialState={
    description:'init my redux state'
}
export default createStore({
        initialState
    },
    // ...reducerModules,
    // ...sagas
    )



