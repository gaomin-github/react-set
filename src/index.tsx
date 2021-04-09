import React from 'react';
import ReactDOM from 'react-dom';
// import 'regenerator-runtime/runtime'
import App from './app';
import store from '$redux/store/index'

// console.log(selectors,'selectors')

// import {registerSelectors} from 'reselect-tools'
// import selectors from '$redux/selectors'
// import {createSelector} from 'reselect';

// getStateWith(()=>initialState)

import selectors from '$redux/selectors'
import {createAppStr} from '$redux/selectors/fac.test.js'

// import {registerSelectors,getStateWith,checkSelector,selectorGraph} from 'reselect-tools'
// getStateWith(()=>store.getState())
// registerSelectors({...selectors})

// import './structure/LoadableSidebarLogo.js';
import './structure/DropdownNavMenu.js'
const MOUNT_NODE=document.getElementById('mainBox');
// console.log('MOUNt_NODE',MOUNT_NODE,6)
ReactDOM.render(<App store={store}/>,MOUNT_NODE)

// ReactDOM.render(<App store={store}/>,MOUNT_NODE)

// registerSelectors(selectors)


// console.log('this is my-bear-web index.js')
// checkSelector("curWikiToken")
// checkSelector("app")
// checkSelector("wiki")





  

