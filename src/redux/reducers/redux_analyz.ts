import {handleAction} from 'redux-actions';
import {combineReducers} from 'redux';

const In=handleAction('update_In',(state,{payload})=>payload,null)

const Out=handleAction('update_Out',(state,{payload})=>{
    // console.log('fetchout touched')
        // console.log('payload',payload)
        // if(!payload){
        //     return JSON.parse(localStorage.getItem('myout'))
        // }
        // localStorage.setItem('myout',JSON.stringify(payload));
        return payload;
},null)

const S_title=handleAction('update_title',(state,{payload})=>payload,null)

export const reduxAnalyzReducer=combineReducers({
    In,
    Out,
    S_title
})



