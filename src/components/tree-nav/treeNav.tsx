import React,{PureComponent} from 'react';
import {connect} from 'react-redux';

import {wikiInfo} from '$redux/selectors/index';

import './treeNav.less';
// const mapStateToProps=(state)=>({
//     wikiInfo:wikiInfo(state),
// })

interface IProps{
    wikiInfo:typeof wikiInfo
}

// @connect(mapStateToProps,{})
export default class TreeNav extends PureComponent<IProps>{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('wiki-treenav did mount')
    }
    componentDidUpdate(prevProps:IProps){
        console.log('wiki-treenav did update')
        console.log('prevProps 25',prevProps)
        console.log('curProps 26',this.props)
        // throw new Error('error test')
    }

    componentDidCatch(error){
        console.log('error',30)
    }

    render(){
        console.log('treeNav props',this.props)
        const {wikiInfo}=this.props;
        // throw new Error('error test')
        const operatorCollectors=['add','del','clear']
        return(
            <div className="treeNav-wrapper">

                用户id：{wikiInfo&&wikiInfo['userId']}
                {/* <div className="tree-nav">
                    {operatorCollectors.map((o,oIndex)=><div className="tree-nav-item" key={oIndex}>{o}</div>)}
                </div> */}
            </div>
        )
    }

}
