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

const selectedName=handleAction('update_SelectedName',(state,{payload})=>payload,null)

const nodeType=handleAction('update_NodeType',(state,{payload})=>{
    return payload;
},'all')

const moduleList=handleAction('init_ModuleList',(state,{payload})=>{
    payload=payload||[]
    payload.push('all')
    return payload

},[])

const curModuleKey=handleAction('update_ModuleKey',(state,{payload})=>{
    return payload;
},'all')


export const reduxAnalyzReducer=combineReducers({
    In,
    Out,
    S_title,
    selectedName,
    nodeType,
    moduleList,
    curModuleKey

})



