import React,{Component} from 'react';
import {Provider} from 'react-redux';
import RouteMain from './routes/routeMain';

interface AppProps{
    store:any
}

class App extends Component<AppProps>{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('app mounted')
    }
    render(){
        return(
            <div className="app-wrapper">
                this is app wrapper1
            <Provider store={this.props.store}>
                <RouteMain/>
            </Provider>
            </div>
        )
    }
}
export default App;