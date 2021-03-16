import React from 'react';
import pageTree from './pageTree';
export default class WikiEntry extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.init()
    }

    init(){
        const {fetchPageTree}=this.props;
        fetchPageTree();
    }

    render(){
        return(
            <div className="wiki-entry-wrapper">
                {/* <pageTree/> */}
                thsi is wiki entry-wrapper
            </div>
        )
    }
}