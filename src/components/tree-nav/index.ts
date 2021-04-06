import {connect} from 'react-redux';
import treeNav from './treeNav';
import {wikiInfo} from '$redux/selectors/index';

const mapStateToProps=(state)=>({
    // wikiInfo:wikiInfo(state),
})

// interface IProps{
//     curWikiInfo:typeof curWikiInfo
// }

export default connect(mapStateToProps,null)(treeNav)