import {handleActions,handleAction} from 'redux-actions';
// import {combineReducers} from 'redux'
import {testAction2,fetchPageTree} from '$redux/actions/pageTree'


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
    testAction2,
    (state,action)=>{
        console.log('testAction2 touched')
        return{

        }
    },
    null
)
