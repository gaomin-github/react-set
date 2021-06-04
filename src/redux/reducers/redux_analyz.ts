import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';

const In = handleAction('updateIn', (state, { payload }) => payload, null);

const Out = handleAction('updateOut', (state, { payload }) => {
  // console.log('fetchout touched')
  // console.log('payload',payload)
  // if(!payload){
  //     return JSON.parse(localStorage.getItem('myout'))
  // }
  // localStorage.setItem('myout',JSON.stringify(payload));
  return payload;
}, null);

const S_title = handleAction('updatetitle', (state, { payload }) => payload, null);

const curNodeRefer = handleAction('update_NodeRefer', (state, { payload }) => payload, []);

const selectedName = handleAction('updateSelectedName', (state, { payload }) => payload, null);
const nodeType = handleAction('updateNodeType', (state, { payload }) => {
  return payload;
}, 'all');

const moduleList = handleAction('initModuleList', (state, { payload }) => {
  // console.log('payload',payload)
  payload = payload || [];
  payload.push('all');
  return payload;
}, []);

const curModuleKey = handleAction('updateModuleKey', (state, { payload }) => {
  console.log('payload', payload);
  return payload;
}, 'all');

export const reduxAnalyzReducer = combineReducers({
  In,
  Out,
  S_title,
  curNodeRefer,
  selectedName,
  nodeType,
  moduleList,
  curModuleKey,
});
