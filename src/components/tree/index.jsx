import React,{Component} from 'react';

import './tree.less'

export default class MyTree extends Component{
    constructor(p){
        super(p)
        // console.log('mytree component init',5)
        this.state={
            targetProps:{}
        }
        
    }
    
    componentDidMount(){
        this._initTargetProps()

    }

    _initTargetProps(){
        const {...originProps}=this.props;
        // console.log(originProps,9)
        this._bindEvent(originProps)

    }
    _bindEvent(originProps){
        let eventHandles=this._wrapEventHandles();
        let newProps={}
        newProps=Object.keys(eventHandles).reduce((newProps,key)=>{
            let curRes= eventHandles[key](originProps,newProps)
            return curRes
        },newProps)
        this.setState({
            targetProps:newProps
        })
    }

    _wrapEventHandles(){
        return{
            onClick:(originProps,targetProps)=>{
                const {...resProps}=targetProps
                if(originProps.onClick){
                    resProps.onClick=(params)=>{
                        console.log('tree clicked executed',24, )
                        originProps.onClick()
                    }
                }
                return resProps
            },
            onDrag:(originProps,targetProps)=>{
                const {...resProps}=targetProps;
                resProps.onDrag=(params)=>{
                    console.log('tree drag executed',44)
                }
                return resProps;
            }   
        }
    }

    render(){
        return <div className="tree-wrapper"
        {...this.state.targetProps}>
            this is my Tree
        </div>
    }

}