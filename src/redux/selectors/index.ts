import {createSelector} from 'reselect';

export const wikiInfo=state=>state.wiki&&state.wiki.wikiInfo;

export const curWikiToken=createSelector(wikiInfo,val=>val&&val.wikiToken)

export const wikiCatalogTree=state=>state.wiki&&state.wiki.wikiCatalogTree;
