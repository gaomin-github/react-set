import {createAction, createActions} from 'redux-actions'
export const fetchPageTree=(wikiInfo,force)=>{
    return {
        type:'fetchPageTree',
        ['get']:{
            url:'',
            method:'get',
            params:{
                space_id:wikiInfo.spaceId,
                wiki_token:wikiInfo.wikiToken
            }
        }
    }
}

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
    // payload:params
})
