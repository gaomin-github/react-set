// 1.触发自定义的event事件

import { createStore } from "redux";

// 参考：src/lark/components/layout/layout.tsx
let event1=new CustomEvent(eventName,eventAct)
window.dispatchEvent(event1)

// 2.正则相关用法
let pathname='/space/wiki/wikcnABWR9828OFHuNCUCOszigf';
let matches=pathname.match(/\/(([a-zA-Z-_]+\/)+)([a-zA-Z0-9]+)?/);

// 3.可拖拽节点，拖拽div时自定义拖拽快照
// 参考链接：https://www.zhangxinxu.com/wordpress/2018/09/drag-drop-datatransfer-js/
// 参考代码：src/wiki/components/wiki-tree/WikiTree.tsx
event.dataTransfer.setDragImage(newDragDiv, 0, 13);



// 3.react store初始化
createStore({Obj})