import {createAction} from 'redux-actions';

export const fetchIn=payload=>({
    type:'fetchIn',
    payload
})

export const fetchOut=payload=>({
    type:'fetchOut',
    payload
})