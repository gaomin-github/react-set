import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import ReactJson from 'react-json-view';
import EventEmitter from '$libs/eventEmitter'
import './index.less';

const r_analyz=state=>state.r_analyz
const curnode_in=createSelector(r_analyz,data=>data.In)
const curnode_out=createSelector(r_analyz,data=>data.Out)
const curnode_content=createSelector(r_analyz,data=>data.S_title)


interface IProp{
    curnode_in:typeof curnode_in,
    curnode_out:typeof curnode_out,
    curnode_content:typeof curnode_content
}

class ReduxAnalyz extends React.Component<IProp>{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // console.log('redux_analyz_loaded')
        EventEmitter.emit('redux_analyz_loaded')
        
    }

    render(){
      const {curnode_in,curnode_out,curnode_content}=this.props;
      // console.log(curnode_content,'curnode_content');
      // console.log(curnode_in,'curnode_in');

        return (
            <div className="redux-analyz">
                <div className="analyz_panel">
                  <div className="analyz_panel-title">
                    {curnode_content&&curnode_content.toString().substring(0,100)}
                  </div>
                  <div className="analyz_panel-output">
                    <div className="analyz_panel-label">
                      output
                    </div>
                    {curnode_out?<ReactJson src={curnode_out} name={false} collapsed={true} indentWidth={1}/>:null}
                  </div>
                  <div className="analyz_panel-input">
                    <div className="analyz_panel-label">
                      input
                    </div>
                    {curnode_in?<ReactJson src={curnode_in} name={false} collapsed={true} indentWidth={1}/>:null}

                  </div>
  
                </div>
                <div className="analyz_banner">

                </div>
                <div id="graph">

                </div>
            </div>
        )

    }
}

export default connect((state)=>({
  curnode_in:curnode_in(state),
  curnode_out:curnode_out(state),
  curnode_content:curnode_content(state)
}),null)(ReduxAnalyz)