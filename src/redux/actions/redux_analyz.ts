import {createAction} from 'redux-actions';

export const update_In=payload=>({
    type:'update_In',
    payload
})

export const update_Out=payload=>({
    type:'update_Out',
    payload
})

export const update_Title=payload=>({
    type:'update_title',
    payload
})