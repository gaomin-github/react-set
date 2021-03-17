import { combineReducers } from 'redux';
import {handleActions,handleAction} from 'redux-actions';

export const fetchTreeReducer=handleActions(
    {
        ['fetchPageTree']:(state,payload)=>{
            console.log('state',4,state)
            return {};
        }
    },
    []
)

export const reducerModule=()=>({
    id:'aState',
    reducerMap:{
        // wikiReducer
        fetchTreeReducer
    }
})

export const testReducer2=handleAction(
    'testAction2',
    (state,action)=>{
        console.log('testAction2 touched')
        // console.log('action',28,action)
        return{

        }
    },
    null
)

export const testReducer3=handleAction(
    'testAction3',
    (state,{payload})=>{
        // console.log('testAction3 touched','state',state)
        console.log('testAction3 touched','action')
        // console.log(action)
        let res={
            wikiDescription:payload.wikiDescription
        }
        console.log('res',res)
        return res;
    },
    {}
)

export const reducerModel1=()=>{
    return {
        id:"test3",
        reducerMap:{
            // test3:testReducer3
        }
    }
}

export const defaultReducer=combineReducers({
    'testReducer2':testReducer2,
    'mySpaceTest1':testReducer3
})

// export const defaultReducer=combineReducers({testReducer2,testReducer3})
