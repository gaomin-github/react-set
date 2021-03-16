import {handleAction} from 'redux-action';
const fetchTreeAction=handleAction({
    ['fetchPageTree_success']:(state,actions,payload)=>{
        console.log('state',4,state)
    }
})