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
    (state,action)=>{
        console.log('testAction3 touched')
        return {}
    },
    null
)
