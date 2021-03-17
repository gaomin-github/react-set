import {connect} from 'react-redux';
import wikiEntry from './wikiEntry';
import {fetchPageTree,testAction2} from '$redux/actions/pageTree'



const mapStateToProps=(state)=>{
    const selectPageTreeState=(state)=>state.wiki&&state.wiki.pageTree
    return {selectPageTreeState}
}
const mapDispatchToProps={
    // fetchPageTree
    testAction2
}
// console.log('wiki-entry index.jsx executed')
const Connector=connect(mapStateToProps,mapDispatchToProps)(wikiEntry)
// console.log(Connector,14)
export default Connector;