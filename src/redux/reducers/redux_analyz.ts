import {handleActions} from 'redux-actions';

export const reduxAnalyzReducer=handleActions({
    ['fetchIn']:(state,{payload})=>payload,
    ['fetchOut']:(state,{payload})=>payload
},{})

