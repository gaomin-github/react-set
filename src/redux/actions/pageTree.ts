import {createAction} from 'redux-actions'


export const testAction2=createAction('testAction2');

// export const testAction3=createAction('testAction3');
// export const testAction3=()=>{
//     return{
//         type:'testAction3',
//     }
// }

export const testAction3=(params)=>({
    type:'testAction3',
    ['get']:{
        info:'safa test',
        params,
    },
    p:[1,2,3]
    // payload:params
})
export const fetchWikiCataLogTree=(payload)=>({
    type:'fetchCataLogTree',
    payload
})
export const fetchWikiInfo=(payload)=>({
    type:'fetchWikiInfo',
    payload
})

export const addCatalogNode=(payload)=>({
    type:'addCatalogNode',
    payload
})