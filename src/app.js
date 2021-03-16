import React,{Component} from 'react';
import {Provider} from 'react-redux';
import RouteMain from './routes/routeMain.jsx';
class App extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // console.log('app mounted')
    }
    render(){
        return(
            <div className="app-wrapper">
                this is app wrapper
            {/* <Provider store={this.props.store}> */}
                <RouteMain/>
            {/* </Provider> */}
            </div>
        )
    }
}
export default App;