import {createSelector} from 'reselect';



  const wiki=state=>state.wiki;
  const appState=(state)=>state.appState;
  const pc=state=>state.pc;
  const entities=state=>state.entities;
  const indexes=state=>state.indexes;
  

export  const selectBackUrl=createSelector(pc,pc=>pc.backUrlMap)

  const selectQuery=createSelector(appState,appState=>appState.route)

  const selectCurrentUser=createSelector(appState,appState=>appState.currentUser);

  const selectCurrentSuiteByObjToken=createSelector(entities,appState,(entities,appState)=>[entities.objs,appState.currentNoteToken['obj_token']]);
  
  const selectAppconfigFavoritesHidden=createSelector(appState,appState=>appState.leanModeConfig.favoritesHidden);

  const selectAppconfigWikiHidden=createSelector(appState,appState=>appState.leanModeConfig.wikiHidden);

// #DropDownMavMenu
export const DropdownNavMenu_Com=createSelector(selectBackUrl,selectQuery,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,data=>data);





const selectRecentObjTokensInBackNav=createSelector(indexes,indexes=>indexes.selectRecentObjTokensInBackNav);

const selectRecentWikiInBackNav=createSelector(appState,appState=>appState.recentWikiInSuiteBackNav);

// // #ReturnMenu
const ReturnMenu_Com=createSelector(selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,selectRecentObjTokensInBackNav,selectRecentWikiInBackNav,(a)=>a);



// // const selectRecentWikiInBackNav = createSelector(appState,appState.recentWikiInSuiteBackNav);
// // #exploreNavList
// const ExploreNavList_Com=createSelector(selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,data=>data);



// const fetchStatusSelector=createSelector(appState,appState=>appState.fetchStatus)
// const BackNavRecentWikiList_Com=createSelector(fetchStatusSelector,)  

  
// console.log('DropdownNavMenu_Com',DropdownNavMenu_Com,
// DropdownNavMenu_Com.dependencies
// );





