import * as React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

// import {createContext} from 'react';//
import Loadables  from './loadables.tsx';

// import wikiEntry from '$components/wiki-entry/wikiEntry'
// const globalServiceContext={
//     requestLoading(){

//     },
//     requestEndLoading(){

//     }
// }
// const LoadingServiceContext=createContext(globalServiceContext)
// console.log('wikiEntry1',Loadables.WikiEntry)
// console.log('wikiEntry1',WikiEntry)

const testCom=()=><div>testCom</div>

const RouteMain=()=>{
    return(
        <div className='route-wrapper'>
            {<Router>
                
            {/* <LoadingServiceContext.provider value={globalServiceContext}> */}
                <Switch>
                    <Route path="/test" component={testCom}/>

                    <Route path="/wiki" component={Loadables.WikiEntry}/>
                    {/* <Route path='/doc' component={Loadables.DocEntry}/> */}
                </Switch>
            {/* </LoadingServiceContext.provider> */}
            </Router>}

        </div>
    )
}
export default RouteMain;