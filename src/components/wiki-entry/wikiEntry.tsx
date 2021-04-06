import React from 'react';
// import MyTree from '$components/tree'
import {fetchWikiInfo,fetchWikiCataLogTree} from '$redux/actions/pageTree'; 
import WikiSidebar from '$components/wiki-sidebar';

import './wikiEntry.less';

interface IPropsDispatch{
    fetchWikiInfo:typeof fetchWikiInfo,
    fetchWikiCataLogTree:typeof fetchWikiCataLogTree,
    // testAction2:typeof testAction2,
    // testAction3:typeof testAction3
}
interface IPropsState{
    // curWikiToken:typeof curWikiToken,
    // wikiCatalogTree:typeof wikiCatalogTree,
    // wikiInfo:typeof wikiInfo
}

interface IPropsCustomize{
    callback:()=>void,
}
type IProps=IPropsDispatch&IPropsCustomize


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
        console.log('wikiEntry props',this.props)
    }

    init(){
        const {fetchWikiInfo,fetchWikiCataLogTree}=this.props
        // 初始化当前wiki知识库信息
        fetchWikiInfo({userId:'123',session:`123_${Math.random()}`,wikiToken:`123_${Math.random()}`})
        // 初始化wiki详情页目录树
        fetchWikiCataLogTree({wikiNodeMap:{
            '1':'1',
            '2':'2'
        }})
    }

    handleClick(params){
        // console.log('withEntry click executed',24,params)
    }

    render(){

        return(
            <div className="wiki-wrapper">
                <div className="wiki-sidebar">
                    <WikiSidebar/>
                </div>
                <div className="wiki-content">
                    <div className="wiki-content-nav">
                        this is wiki entry-wrapper:
                        
 <div >
                    {/* this is tree container */}
                    {/* <MyTree onClick={this.handleClick}/> */}
                </div>
                    </div>
                </div>
               
            </div>
        )
    }
}