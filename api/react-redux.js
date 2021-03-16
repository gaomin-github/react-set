//允许react组件使用redux的内容

import { useSelector, useDispatch } from 'react-redux'
// 1.useSelector：从redux store state中提取任意片段
// store文件中：
const selectCount=state=>state.val
//使用时
useSelector(selectCount)//==state.val
//或者
userSelector(state=>state.val)

// 2.useDispatch：更新reduxt store state中的值

const dispatch=userDispatch();
dispatch(reducer1(1))


// 3.connect用法(需要newComponent拿到state)

const newComponent=connect(stateFuns,actionsFuns)(oldComponent)
//stateFun返回state
//actionsFun返回action
// 常规用法：connect和provider结合。默认newComponent所有组件可以拿到store,作为自己的state
// 参考：https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

// 4.Provider

// 5.react-redux和redux连接过程
// store.js
import { createStore, IModuleStore } from 'redux-dynamic-modules';
const store=createStore()
export default store;

//index.js
import { Provider } from 'react-redux'
import store from './app/store'
//provider可以传递store，传递history记录，是否可以传递其它值。参照：src/lark/index.js

<Provider store={store}>
<App/>
</Provider>

const store;
<Provider store={store}>
    <newComponent/>
</Provider>
