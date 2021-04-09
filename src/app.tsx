import React,{Component} from 'react';
import {Provider} from 'react-redux';
import RouteMain from './routes/routeMain';

import './app.less';

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
        const wikiObj={
            wiki:{

            }
        }
        return(
            // <Provider store={this.props.store}>
            //     <RouteMain/>
            // </Provider>
            <Provider store={this.props.store}>
            <RouteMain/>
        </Provider>

        )

    }
}
export default App;