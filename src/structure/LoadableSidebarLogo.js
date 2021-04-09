import {createSelector} from 'reselect';
import {registerSelectors,getStateWith,checkSelector,selectorGraph} from 'reselect-tools'
import curStore from './store'

  const wiki=state=>state.wiki;
  const appState=(state)=>state.appState;

  const wikiToken=createSelector(appState,appState=>appState.currentNoteToken['obj_token'])
  
  const spaceId=createSelector(wikiToken,wiki,(wikiToken,wiki)=>wiki.wikiInfos[wikiToken]);


  const allSpaces=createSelector(wiki,wiki=>wiki.spaces);
  const hasSpaceInfo=createSelector(spaceId,wiki,(spaceId,wiki)=>wiki.spaces[spaceId]);  
  const LoadableSidebarLogo=createSelector(allSpaces,hasSpaceInfo,(allSpaces,hasSpaceInfo)=>{allSpaces,hasSpaceInfo});




  
getStateWith(()=>curStore)
  
  const selectors = {
    wiki,
    appState,
    // spaceId,
    // state,
    // wikiToken,
    allSpaces,
    hasSpaceInfo,
    LoadableSidebarLogo
    }
  
registerSelectors(selectors)