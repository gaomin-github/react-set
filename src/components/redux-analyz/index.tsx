import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import ReactJson from 'react-json-view';
import {Radio} from 'antd';
import EventEmitter from '$libs/eventEmitter'
import {update_ModuleKey, update_NodeType} from '$redux/actions'
import './index.less';


const r_analyz=state=>state.r_analyz
const curnode_in=createSelector(r_analyz,data=>data.In)
const curnode_out=createSelector(r_analyz,data=>data.Out)
const curnode_content=createSelector(r_analyz,data=>data.S_title)
const nodeType=createSelector(r_analyz,data=>data.nodeType)
const moduleList=createSelector(r_analyz,data=>{
  let moduleList=data.moduleList;
  return moduleList&&(moduleList instanceof Array)?moduleList:[]
})
const curModuleKey=createSelector(r_analyz,data=>data.curModuleKey)
const curNodeRefer=createSelector(r_analyz,data=>data.curNodeRefer)

const RadioGroup=Radio.Group;
interface IProp{
    curnode_in:typeof curnode_in,
    curnode_out:typeof curnode_out,
    curnode_content:typeof curnode_content,
    nodeType:typeof nodeType,
    moduleList: string[],
    curModuleKey:typeof curModuleKey,
    curNodeRefer:string[]
}
interface IDispatchProps{
  update_NodeType:typeof update_NodeType,
  update_ModuleKey:typeof update_ModuleKey
}
interface stateProps{
  currentTypeVal:string,
  sliderMouseDown:boolean,
  sliderXPosition:Number
}

class ReduxAnalyz extends PureComponent<IProp&IDispatchProps,stateProps>{
    constructor(props){
        super(props);
        this.state={
          currentTypeVal:'',
          sliderMouseDown:false,
          sliderXPosition:100
        }
    }

    componentDidMount(){
        // console.log('redux_analyz_loaded')
        EventEmitter.emit('redux_analyz_loaded')
        window.addEventListener('mousemove',this.handleMouseMove.bind(this));
        window.addEventListener('mouseup',this.handleMouseUp.bind(this));

    }

    private handleTypeChange(event:any){
      const {update_NodeType}=this.props;
      // console.log('handleChange------')
      let target=event.target;
      if(!target) return;
      let curVal=target.value;
      if(curVal==='all') curVal='';
      update_NodeType(curVal)
      
      EventEmitter.emit('redux_analyz_update',curVal)
    }

    private handleModuleChange(event:any){
      const {update_ModuleKey}=this.props;
      if(!event.target) return;
      let curVal=event.target.value==='all'?'':event.target.value;
      console.log('curVal',curVal)
      update_ModuleKey(curVal);
      EventEmitter.emit('redux_analyz_update',curVal)

    }

    private handleMouseDown(){
      this.setState({
        sliderMouseDown:true
      })
    }

    private handleMouseMove(e:MouseEvent){
      if(!this.state.sliderMouseDown) return;
      this.setState({
        sliderXPosition:Math.min(e.clientX,500)
      })

    }
    private handleMouseUp(){
      this.setState({
        sliderMouseDown:false
      })

    }


    render(){
      const {curnode_in,curnode_out,curnode_content,nodeType,moduleList,curModuleKey,curNodeRefer}=this.props;

      // console.log(curnode_content,'curnode_content');
      console.log(curNodeRefer,'curNodeRefer--------90');
        const typeChoices=['component','state','all']
        return (
            <div className="redux-analyz">
                <div className="analyz_panel" style={{width:`${this.state.sliderXPosition}px`}}>
                  <div className="analyz_panel-title">
                    <div className="analyz_panel-label">
                      title
                    </div>
                    {curnode_content&&curnode_content.toString().substring(0,100)}
                  </div>
                  <div className="analyz_panel-output">
                    <div className="analyz_panel-label">
                      input
                    </div>
                    {curnode_in?(typeof curnode_in==='object')?<ReactJson src={curnode_in} name={false} collapsed={true} indentWidth={1}/>:curnode_in:null}
                    </div>
                  <div className="analyz_panel-input">
                    <div className="analyz_panel-label">
                    output
                    </div>
                    {curnode_out?(typeof curnode_out==='object')?<ReactJson src={curnode_out} name={false} collapsed={true} indentWidth={1}/>:curnode_out:null}

                  </div>
                  <div className="analyz_panel-refer">
                    <div className="analyz_panel-label">
                      引用组件<b>({curNodeRefer&&curNodeRefer.length||0}):</b>
                    </div>
                    <div className="refer_list">
                      {curNodeRefer?curNodeRefer.map((refer,index)=>{
                        return <div key={refer} className="refer_list-item">{refer}</div>
                      }):null}
                    </div>
                  </div>
  
                </div>
                <div className="analyz_slider" onMouseDown={this.handleMouseDown.bind(this)} style={{left:`${this.state.sliderXPosition}px`}}></div>
                <div className="analyz_banner">
                  <div className="analyz_banner-type">
                    <span>redux or component</span>
                    <RadioGroup prefixCls="analyz_banner-radio" onChange={this.handleTypeChange.bind(this)} value={nodeType}>
                      {
                        typeChoices.map((item,index)=>{
                          return (
                            <Radio
                              prefixCls="analyz_banner-radio"
                              value={item}
                              data-index={index}
                              data-selector="graph-type"
                              key={index}>
                                {item}
                              </Radio>
                          )
                        })
                      }
                    </RadioGroup>
                  </div>
                  <div className="analyz_banner-module">
                    <span>which module</span>
                    <RadioGroup prefixCls="analyz_banner-radio" onChange={this.handleModuleChange.bind(this)} value={curModuleKey}>
                      {
                        moduleList&&moduleList.map((item,index)=>{
                          return (
                            <Radio
                              prefixCls="analyz_banner-radio"
                              value={item}
                              data-index={index}
                              data-selector="graph-type"
                              key={index}>
                                {item}
                              </Radio>
                          )
                        })
                        // moduleList&&JSON.stringify(moduleList)
                      }
                    </RadioGroup>
                  </div>
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
  curnode_content:curnode_content(state),
  nodeType:nodeType(state),
  moduleList:moduleList(state),
  curModuleKey:curModuleKey(state),
  curNodeRefer:curNodeRefer(state)
}),{update_NodeType,update_ModuleKey})(ReduxAnalyz)