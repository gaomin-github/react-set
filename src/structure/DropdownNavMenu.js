import {createSelector} from 'reselect';
import {registerSelectors,getStateWith,selectorGraph} from 'reselect-tools'
import curStore from './store'

  const wiki=state=>state.wiki;
  const appState=(state)=>state.appState;
  const pc=state=>state.pc;
  const entities=state=>state.entities;
  const indexes=state=>state.indexes;
  

  const selectBackUrl=createSelector(pc,pc=>pc.backUrlMap)

  const selectQuery=createSelector(appState,appState=>appState.route)

  const selectCurrentUser=createSelector(appState,appState=>appState.currentUser);

  const selectCurrentSuiteByObjToken=createSelector(entities,appState,(entities,appState)=>[entities.objs,appState.currentNoteToken['obj_token']]);

  const selectAppconfigWikiHidden=createSelector(appState,appState=>appState.leanModeConfig.wikiHidden);

// #
// const DropdownNavMenu=createSelector(selectBackUrl,selectQuery,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigWikiHidden,(selectBackUrl,selectQuery,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigWikiHidden)=>{selectBackUrl,selectQuery,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigWikiHidden});




const selectRecentObjTokensInBackNav=createSelector(indexes,indexes=>indexes.selectRecentObjTokensInBackNav);

const selectRecentWikiInBackNav=createSelector(appState,appState=>appState.selectRecentWikiInBackNav);

// const ReturnMenu=createSelector(selectCurrentUser,selectAppconfigWikiHidden,selectRecentObjTokensInBackNav,selectRecentWikiInBackNav,(a,b,c,d)=>c);
const ReturnMenu=createSelector(selectRecentObjTokensInBackNav,(a)=>a);

  
getStateWith(()=>curStore)
  
const selectors = {
    ReturnMenu,
}
  
registerSelectors(selectors)

console.log(selectorGraph())