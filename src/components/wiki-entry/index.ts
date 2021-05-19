import React from 'react';
import {connect} from 'react-redux';
import {fetchWikiInfo,fetchWikiCataLogTree,fetchAppInfo} from '$redux/actions/pageTree'; 
import {curWikiToken,wikiCatalogTree} from '$redux/selectors';
// import {wikiCatalogTree,wikiInfo} from '$redux/selectors/index';

import wikiEntry from './wikiEntry';

const mapStateToProps=(state)=>({
    // curWikiToken,
    // appId
    // mySpaceTest1:state.a&&state.a.mySpaceTest1,
    curWikiToken:curWikiToken(state),
    // curWikiInfo:curWikiInfo(state),
    wikiCatalogTree:wikiCatalogTree(state),
    // appId:appId(state),
    // appTokenStr:appTokenStr(state)
    // wikiInfo:wikiInfo(state)
})
const mapDispatchToProps={
    fetchWikiInfo,
    fetchWikiCataLogTree,
    fetchAppInfo
}
export default connect(mapStateToProps,mapDispatchToProps)(wikiEntry)
