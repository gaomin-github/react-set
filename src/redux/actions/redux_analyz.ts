import { createAction } from 'redux-actions';

export const updateIn = payload => ({
  type:'updateIn',
  payload,
});

export const updateOut = payload => ({
  type:'updateOut',
  payload,
});

export const updateTitle = payload => ({
  type:'updatetitle',
  payload,
});

export const updateRefer = payload => ({
  type:'update_NodeRefer',
  payload,
});

export const updateSelectedName = payload => ({
  type:'updateSelectedName',
  payload,
});

export const updateNodeType = payload => ({
  type:'updateNodeType',
  payload,
});

export const initModuleList = payload => ({
  type:'initModuleList',
  payload,
});
export const updateModuleKey = payload => ({
  type:'updateModuleKey',
  payload,
});
