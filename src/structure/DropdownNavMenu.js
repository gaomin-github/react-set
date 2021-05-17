import {createSelector} from 'reselect';



  const wiki=state=>state.wiki;
  const appState=(state)=>state.appState;
  const pc=state=>state.pc;
  const entities=state=>state.entities;
  const indexes=state=>state.indexes;
  

const selectBackUrl=createSelector(pc,pc=>pc.backUrlMap)

  const selectQuery=createSelector(appState,appState=>appState.route)

  const selectCurrentUser=createSelector(appState,appState=>appState.currentUser);

const selectCurrentSuiteByObjToken=createSelector(entities,appState,(entities,appState)=>({entities:entities.objs,token:appState.currentNoteToken['obj_token']}));
  
  const selectAppconfigFavoritesHidden=createSelector(appState,appState=>appState.leanModeConfig.favoritesHidden);

  const selectAppconfigWikiHidden=createSelector(appState,appState=>appState.leanModeConfig.wikiHidden);

// #DropDownMavMenu
// export const DropdownNavMenu_Com=createSelector(selectBackUrl,selectQuery,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,data=>data);


const selectBackUrlTest=createSelector(selectBackUrl,selectBackUrl=>`${selectBackUrl}_1`);
export const DropdownNavMenu_com=createSelector(selectBackUrlTest,selectBackUrlTest=>`${selectBackUrlTest}_2`);
// export const DropdownNavMenu_Com=createSelector(selectBackUrl,selectBackUrl=>`${selectBackUrl}_1`);

const selectRecentObjTokensInBackNav=createSelector(indexes,indexes=>indexes.selectRecentObjTokensInBackNav);

const selectRecentWikiInBackNav=createSelector(appState,appState=>appState.recentWikiInSuiteBackNav);

// #ReturnMenu
// export const ReturnMenu_com=createSelector(DropdownNavMenu_com,selectBackUrl,selectRecentWikiInBackNav,a=>{
//   let p=[...a];
//   return {
//     ...p.slice(1,p.length)
//   }
// });

// export const ReturnMenu_com=createSelector(DropdownNavMenu_com,selectBackUrl,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,selectRecentObjTokensInBackNav,selectRecentWikiInBackNav,a=>{
//   let p=[...a];
//   return {
//     ...p.slice(1,p.length)
//   }
// });
export const ReturnMenu_com=createSelector(DropdownNavMenu_com,selectBackUrl,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,selectRecentObjTokensInBackNav,selectRecentWikiInBackNav,(...p)=>{
  return { ...[...p].slice(1,Object.keys(p).length) };
});



export const GoBackIcon_com=createSelector(DropdownNavMenu_com,()=>null);


