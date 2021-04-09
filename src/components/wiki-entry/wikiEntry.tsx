import React from 'react';
// import MyTree from '$components/tree'
import {fetchWikiInfo,fetchWikiCataLogTree,fetchAppInfo} from '$redux/actions/pageTree'; 
import {curWikiToken,wikiCatalogTree} from '$redux/selectors';

import WikiSidebar from '$components/wiki-sidebar';

import './wikiEntry.less';

// import selectors from '$redux/selectors'
// import {registerSelectors,getStateWith} from 'reselect-tools'
// import store from '$redux/store/index'
// getStateWith(()=>store.getState())
// registerSelectors(selectors)



interface IPropsDispatch{
    fetchWikiInfo:typeof fetchWikiInfo,
    fetchWikiCataLogTree:typeof fetchWikiCataLogTree,
    fetchAppInfo:typeof fetchAppInfo,
    // testAction2:typeof testAction2,
    // testAction3:typeof testAction3
}
interface IPropsState{
    curWikiToken:typeof curWikiToken,
    wikiCatalogTree:typeof wikiCatalogTree,
    // wikiInfo:typeof wikiInfo
}

interface IPropsCustomize{
    callback:()=>void,
}
type IProps=IPropsDispatch&IPropsCustomize&IPropsState


interface iState{
    pageTitle:string
}

export default class WikiEntry extends React.Component<IProps,iState>{
    constructor(props){
        super(props);
        this.state={
            pageTitle:'wikiEntry'
        }
    }

    componentDidMount(){
        this.init()
    }
    componentDidUpdate(){
        // console.log('wikiEntry props',this.props)
        console.log('wikiEntry props update')
        // setTimeout(()=>{
        // },1000)

    }

    init(){
        const {fetchWikiInfo,fetchWikiCataLogTree,fetchAppInfo}=this.props
        // 初始化当前wiki知识库信息
        fetchWikiInfo({userId:'123',session:`123_${Math.random()}`,wikiToken:`123_${Math.random()}`})
        // 初始化wiki详情页目录树
        fetchWikiCataLogTree({wikiNodeMap:{
            '1':'1',
            '2':'2'
        }})
        fetchAppInfo({id:new Date().getTime()})
    }

    handleClick(params){
        // console.log('withEntry click executed',24,params)
    }

    render(){
        return(
            <div className="wiki-wrapper">
                <div className="wiki-sidebar">
                    <WikiSidebar />
                </div>
                <div className="wiki-content">
                    {/* <div className="wiki-content-nav">
                        this is wiki entry-wrapper:
                        curWikiToken{curWikiToken},
                        appId
                    <div > */}
                </div>
               
            </div>
        )
    }
}