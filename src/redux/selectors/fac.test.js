import {createSelector,createSelectorCreator} from 'reselect';

// export const appId=state=>state.app&&state.app.id;

// export const appTokenStr=createSelector(curWikiToken,appId,(token,id)=>`this is appTokenStr refer to:${id}_${token}`)


const createSelectorTest=createSelectorCreator(
    createSelectorFun,
    (a,b)=>a===b,
    (oldVal,newVal)=>{
        return oldVal===newVal?oldVal:newVal
    }
)

function createSelectorFun(selector,valCheck,getNewResult){
    return (...args)=>{
        const newResult=selector(...args);
        let lastResult=null;
        lastResult=getNewResult(lastResult,newResult)
        return lastResult
    }
}


const wikiInfo=state=>state.wiki&&state.wiki.wikiInfo;


export const createAppStr=createSelectorTest(
    state=>state.wiki&&state.wiki.wikiInfo,
    state=>state.app&&state.app.id,
    (token,id)=>`this is appTokenStr refer to:${id}_${token}`
)
