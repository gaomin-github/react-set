import {createSelector} from 'reselect';



  const wiki=state=>state.wiki;
  const appState=(state)=>state.appState;
  const pc=state=>state.pc;
  const entities=state=>state.entities;
  const indexes=state=>state.indexes;


   export const wikiToken=createSelector(appState,wiki,appState=>appState.currentNoteToken['obj_token'])

   export const allSpaces=createSelector(wiki,wiki=>wiki.spaces);

  export const SwitchSpace_com=createSelector(wikiToken,allSpaces,data=>data);

  export const Menu_com=createSelector(SwitchSpace_com,wikiToken,allSpaces,(...p)=>{
    return { ...[...p].slice(1,Object.keys(p).length) };
  })