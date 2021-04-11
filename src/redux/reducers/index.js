import {combineReducers} from 'redux'
import WikiInfoReducer from './wikiInfo';
import WikiTreeReducer from './fetchTree';
import reduxAnalyzReducer from './redux_analyz'
export  * from './app';
export * from './redux_analyz';


const wikiReducers=combineReducers({
    'wikiInfo':WikiInfoReducer,
    'catalogTree':WikiTreeReducer,
    'r_analyz':reduxAnalyzReducer
    // 'app':AppState

})
// export const appReducer=combineReducers({
// })


export default wikiReducers;