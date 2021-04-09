import {createSelector,createSelectorCreator} from 'reselect';

export const wiki=state=>state.wiki;

export const wikiInfo=state=>state.wiki&&state.wiki.wikiInfo;

export const curWikiToken=createSelector(wikiInfo,val=>val&&val.wikiToken)

export const wikiCatalogTree=state=>state.wiki&&state.wiki.wikiCatalogTree;



export default{wiki,curWikiToken,wikiCatalogTree}

