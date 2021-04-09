import {combineReducers} from 'redux'
import WikiInfoReducer from './wikiInfo';
import WikiTreeReducer from './fetchTree';
export  * from './app';


const wikiReducers=combineReducers({
    'wikiInfo':WikiInfoReducer,
    'catalogTree':WikiTreeReducer,
    // 'app':AppState

})
// export const appReducer=combineReducers({
// })


export default wikiReducers;