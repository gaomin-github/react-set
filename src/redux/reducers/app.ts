import {handleAction,handleActions} from 'redux-actions';  
export const fetchAppInfo=handleActions({
    ['fetchAppInfo']:(state,{payload})=>{
        console.log('fetchAppInfo action touched')
        console.log('payload',payload)
        return payload
    },
},{})
