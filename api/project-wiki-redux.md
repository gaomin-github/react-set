1.action有自定义分类
参考：src/common/constants/actionTypes/doc.js
src/common/redux/sagas/fetchStatus.ts
为action包装prefix数据，saga拦截符合条件的action，记录action类型状态：loaded,sucess,failed
记录位置：appState.fetchStatus

具体哪些action被记载（请求相关？）？

2.