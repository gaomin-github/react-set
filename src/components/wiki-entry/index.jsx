import {connect} from 'react-redux';
import wikiEntry from './wikiEntry';
import {fetchPageTree,testAction2,testAction3} from '$redux/actions/pageTree'



// const mapStateToProps=(state)=>({
//     // wikiDescription:state.wikiDescription
//     // const wikiDescription=(state)=>state.wikiDescription
//     // return {wikiDescription(state)}
//     state
// })

const mapStateToProps=(state)=>state.a&&state.a.mySpaceTest1
const mapDispatchToProps={
    // fetchPageTree
    testAction2,
    testAction3
}
// console.log('wiki-entry index.jsx executed')
const Connector=connect(mapStateToProps,mapDispatchToProps)(wikiEntry)
// console.log(Connector,14)
export default Connector;