import {createAction} from 'redux-actions'
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

export const testAction2=createAction('testAction2')
