// import {Switch} from 'react-router-dom';
import * as React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import {Router} from 'react-router';

import {createContext} from 'react';//
import * as Loadables from './loadables';

import wikiEntry from '$components/wiki-entry/wikiEntry'
const globalServiceContext={
    requestLoading(){

    },
    requestEndLoading(){

    }
}
const LoadingServiceContext=createContext(globalServiceContext)
const RouteEntry=()=>{
    return (
        <div className="route-entry-wrapper">
            route-entry-wrapper
        </div>
    )
}
console.log(wikiEntry,'wikiEntry',19)

const TestCom=()=><div>testCom</div>

const RouteMain=()=>{
    return(
        <div className='route-wrapper'>
            {<Router>
                <Route path="/wiki" component={TestCom}> 
                    {/* <TestCom/>  */}
                </Route>

            </Router>}

        </div>
    )
}
export default RouteMain;