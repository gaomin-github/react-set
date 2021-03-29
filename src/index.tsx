import React from 'react';
import ReactDOM from 'react-dom';
// import 'regenerator-runtime/runtime'
import App from './app';
import store from '$redux/store/index'

const MOUNT_NODE=document.getElementById('mainBox');
// console.log('MOUNt_NODE',MOUNT_NODE,6)
// ReactDOM.render(<App store={store}/>,MOUNT_NODE)

ReactDOM.render(<App store={store}/>,MOUNT_NODE)


// console.log('this is my-bear-web index.js')