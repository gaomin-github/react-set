import React from 'react';
// import MyTree from '$components/tree'
import {testAction2,testAction3} from '$redux/actions/pageTree.ts'; 

interface IProps{
    testAction2:typeof testAction2,
    testAction3:typeof testAction3
}

export default class WikiEntry extends React.Component<IProps>{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.init()
    }

    init(){
        const {testAction2}=this.props
        // console.log('testAction2',testAction3)
        testAction2({params:{spaceId:'space1',wikiToken:'wiki_token_1'}})
        // console.log(testAction2);

    }

    handleClick(params){
        // console.log('withEntry click executed',24,params)
    }

    render(){
        // console.log('props',this.props,23)
        // const {wikiDescription}=this.props;
        // console.log(wikiDescription,24)
        // console.log(a,25)
        return(
            <div className="wiki-entry-wrapper">
                this is wiki entry-wrapper
                {/* {wikiDescription} */}
                <div >
                    {/* this is tree container */}
                    {/* <MyTree onClick={this.handleClick}/> */}
                </div>
            </div>
        )
    }
}