import { combineReducers } from 'redux';
import {handleAction,handleActions} from 'redux-actions';  

// export default handleAction('fetchWikiInfo',(state,{payload})=>{
//     return payload;
// },null)

export default handleActions({
    ['fetchWikiInfo']:(state,{payload})=>{
        return payload
    },
},{})
// export const defaultReducer=combineReducers({testReducer2,testReducer3})
