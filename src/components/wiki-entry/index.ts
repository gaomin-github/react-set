import React from 'react';
import {connect} from 'react-redux';
import {fetchWikiCataLogTree,fetchWikiInfo} from '$redux/actions/pageTree'
// import {wikiCatalogTree,wikiInfo} from '$redux/selectors/index';

import wikiEntry from './wikiEntry';

const mapStateToProps=(state)=>({
    // mySpaceTest1:state.a&&state.a.mySpaceTest1,
    // curWikiToken:curWikiToken(state),
    // curWikiInfo:curWikiInfo(state),
    // wikiCatalogTree:wikiCatalogTree(state)
    // wikiInfo:wikiInfo(state)
})
const mapDispatchToProps={
    fetchWikiInfo,
    fetchWikiCataLogTree
}
export default connect(mapStateToProps,mapDispatchToProps)(wikiEntry) as React.ComponentClass
