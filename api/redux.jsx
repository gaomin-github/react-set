// redux //api：
createStore(reducer,preloadedState,enhancer)
combineReducers(reducers)
applyMiddleware(...middlewares)
bindActionCreators(actionCreators,dispatch)


// redux store api
getState()
dispatchEvent(action)
subscribe(listenerFun)
replaceReducer(nextReducer)


// redux/tookit api
// 1)createReducer
createReducer(state,(builder)=>{
    builder.addCase(action,fun1).addCase(action2,fun2)
})

// 2)createAction
let actionCr=createAction(actionString);
let action=actionCr(1)  ==={type:actionString,payload:1}

// 3)createSlice
// slice作用：提取reducer和action片段
import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
    name:'sliceName',
    initialState:{
        val:0
    },
    reducers:{
        reducer1:(state)=>{
            state.val+=1
        },
        reducer2:(state,action)=>{
            state.val-=action.payload
        },
        reducer3:(state,action)=>{
            //默认不直接对state内变量赋值，因为对象不可追溯性，数值改变无法正确同步到ui上
            return {
                ...state,
                value:state.value-1
            }
        }
    }
})
const {reducer1,reducer2}=slice.actions

const sliceReducer=slice.reducer


// 含义：自动获取action内容
console.log(slice.actions.reducer1())//=={type:'sliceName/reducer1'}

slice.reducer({val:1},slice.action.reducer1())//==reducer1(1)

// 4)createSelector和reselect结合

// 5）configureStore({reducer,middleware,preloadedState})
//  创建store。configureStore代表创建的store,拥有了slice的state和reducers
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, bindActionCreators, combineReducers } from 'redux';
const store1= configureStore({
    reducer: {
      counter: sliceReducer
    }
})


//redux-dynamic-modules api


// 1.基本创建store的方法//参考：src/application/lark/services/store.ts
import { createStore, IModuleStore } from 'redux-dynamic-modules';
const store=createStore({
    state,
    enhancers:[],
    extensions:[]
},...reducers)


// slice创建store法(局部action和reducer提取出来，模块化)
//参考：https://redux.js.org/tutorials/essentials/part-2-app-structure#the-react-counter-component
// 1

