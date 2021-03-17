import React from 'react';
import pageTree from './pageTree';
export default class WikiEntry extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // console.log('wikiEntry',9)
        this.init()
    }

    init(){
        // const {fetchPageTree}=this.props;
        // console.log('fetchPageTree',fetchPageTree,15)
        // fetchPageTree({spaceId:'space1',wikiToken:'wiki_token_1'});
        const {testAction2}=this.props
        testAction2()
    }

    render(){
        return(
            <div className="wiki-entry-wrapper">
                {/* <pageTree/> */}
                this is wiki entry-wrapper
            </div>
        )
    }
}