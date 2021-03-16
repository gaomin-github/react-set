import {connect} from 'react-redux';
import wikiEntry from './wikiEntry';
import {fetchPageTree} from '$redux/actions/pageTree'

const selectPageTree=(state)=>state.wiki&&state.wiki.pageTree
const mapStateToProps=(state)=>{
    selectPageTree(state)
}

const mapDispatchToProps={
    fetchPageTree
}

export default connect(mapStateToProps,mapDispatchToProps)(wikiEntry)