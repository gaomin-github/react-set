import React from 'react';
import MyTree from '$components/tree'
export default class WikiEntry extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.init()
    }

    init(){
        // const {fetchPageTree}=this.props;
        // console.log('fetchPageTree',fetchPageTree,15)
        // fetchPageTree({spaceId:'space1',wikiToken:'wiki_token_1'});
        const {testAction3}=this.props
        // testAction2()
        // testAction3({wikiDescription:new Date().getTime(),spaceId:'space1',wikiToken:'wiki_token_1'})
        testAction3({params:{spaceId:'space1',wikiToken:'wiki_token_1'}})

    }

    render(){
        // console.log('props',this.props,23)
        const {wikiDescription}=this.props;
        // console.log(wikiDescription,24)
        // console.log(a,25)
        return(
            <div className="wiki-entry-wrapper">
                this is wiki entry-wrapper
                {wikiDescription}
                <MyTree/>
            </div>
        )
    }
}