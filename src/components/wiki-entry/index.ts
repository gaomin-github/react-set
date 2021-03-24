import {connect} from 'react-redux';
import wikiEntry from './wikiEntry.tsx';
import {fetchPageTree,testAction2,testAction3} from '$redux/actions/pageTree'



// const mapStateToProps=(state)=>({
//     // wikiDescription:state.wikiDescription
//     // const wikiDescription=(state)=>state.wikiDescription
//     // return {wikiDescription(state)}
//     state
// })

const mapStateToProps=(state)=>({
    mySpaceTest1:state.a&&state.a.mySpaceTest1
})
const mapDispatchToProps={
    fetchPageTree,
    testAction2,
    testAction3
}
const Connector=connect(mapStateToProps,mapDispatchToProps)(wikiEntry)
// console.log('Connector',Connector)
export default Connector;