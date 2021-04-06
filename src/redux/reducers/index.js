import {combineReducers} from 'redux'
import WikiInfoReducer from './wikiInfo';
import WikiTreeReducer from './fetchTree';

const wikiReducers=combineReducers({
    'wikiInfo':WikiInfoReducer,
    'catalogTree':WikiTreeReducer
})

export default wikiReducers;