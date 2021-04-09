import React from 'react';
import Tree from '$components/tree';
import TreeNav from '$components/tree-nav';
interface IProps{
    
}

export default class WikiSideBar extends React.PureComponent<IProps>{
    // componentDidMount(){
    //     console.log('wiki-sidebar did mount')
    // }
    // componentDidUpdate(){
    //     console.log('wiki-sidebar did update')

    // }
    constructor(p){
        super(p)
    }
    componentWillUnmount(){

    }

    render(){
        return(
            <>
            {/* <TreeNav/>
            <Tree/> */}
            </>
        )
    }
}