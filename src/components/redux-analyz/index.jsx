import React from 'react';


export default class ReduxAnalyz extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
       
        
    }


    render(){
     
        return (
            <div className="redux-analyz">
                <div className="analyz_panel">

                </div>
                <div className="analyz_banner">

                </div>
                <div id="graph">
                  {/* <CytoscapeComponent elements={elements} style={{width:'1600px',height:'800px'}}/> */}

                </div>
            </div>
        )

    }
}