import {handleActions} from 'redux-actions';

//目录树
export default handleActions({
    'fetchCataLogTree':(state,{payload})=>{
        return payload
    },
    'addCatalogNode':(state,{payload})=>{
        console.log('add','payload',payload)
    }
},null)

