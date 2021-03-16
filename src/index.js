import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'
import store from '$redux/store'

const MOUNT_NODE=document.getElementById('mainBox');
console.log('MOUNt_NODE',MOUNT_NODE,6)
ReactDOM.render(<App store={store}/>,MOUNT_NODE)


// console.log('this is my-bear-web index.js')