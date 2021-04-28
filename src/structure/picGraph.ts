// import {registerSelectors,getStateWith,selectorGraph,checkSelector} from 'reselect-tools'
import {registerSelectors,getStateWith,selectorGraph,checkSelector,selectorGraph_self,reset} from '$modules/reselect-tools'
import {createSelector} from 'reselect';

import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import EventEmitter from '$libs/eventEmitter'
import {update_In,update_Out,update_Title,update_SelectedName,init_ModuleList} from '$redux/actions';
import curStore from './store'
// import * as DropdownNavMenu_selectors from './DropdownNavMenu';
import allSelectors from './index';
import store from '$redux/store';

let allSelectorKeys=Object.keys(allSelectors)
// allSelectorKeys.splice(0,1)

// console.log(Object.values(allSelectors[allSelectorKeys[0]]),16)
store.dispatch(init_ModuleList(allSelectorKeys))

const r_analyz=state=>state.r_analyz
const nodeType=createSelector(r_analyz,data=>data.nodeType);

const curModuleKey=createSelector(r_analyz,data=>data.curModuleKey)

/* eslint-disable */
cytoscape.use(dagre);

const truncateText = (str, maxChars = 20) =>{
  if(str.startsWith('function')){
    str=str.replace(/^function/i,'f');
    // str=`f${str}`
  }
  return (str.length > maxChars ? str.slice(0, maxChars) : str);
} 
const labelText = (id, recomputations) => truncateText(id) + (recomputations === null ? '' : ` (${recomputations})`);


const colors = {
  defaultEdge: 'rgb(79, 90, 101)',
  defaultNodeLabel: 'rgb(111, 179, 210)',
  defaultNode: 'rgb(232, 234, 246)',
  selectedNode: 'orange',
  dependency: '#ffeb3b',
  dependent: '#f868d0',
  recomputed: 'red',
  comLineColor:'rgb(55,155,210)'
};


const selectedNodeStyle = {
  'background-color': colors.selectedNode
};


const Y_SPACING = 0.1;

const cytoDefaults = {
  style: [
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        width: 4,
        'line-style':'dashed',
        'target-arrow-shape': 'triangle',
        'line-color': colors.defaultEdge,
        'target-arrow-color': colors.defaultEdge,
        'z-index': 1,
      }
    },
    {
      selector:"edge[class='comedge']",
      style:{
        'line-style':'solid',
        'line-color':colors.comLineColor,
        'target-arrow-color': colors.comLineColor,

      }
    },
    {
      selector:"edge[class='selected_edge']",
      style:{
        'line-style':'solid',
        'line-color':'red',
        'target-arrow-color': 'red',

      }
    },
    {
      selector: 'node',
      style:  {
        label: 'data(label)',
        color: colors.defaultNodeLabel,
        'background-color': colors.defaultNode,
      }
    }

  ],
  layout: {
    name: 'dagre',
    rankDir: 'BT',
    // fit: false,
    ranker: 'longest-path',
    spacingFactor: 1.5,
    // minNodeSpacing:55,
    // idealEdgeLength:200,
    // padding: 0,
    nodeDimensionsIncludeLabels: false, // this doesn't really work alas
    transform: (node, { x, y }) => {
      // increase distance between y ranks, and offset some nodes
      // a bit up and down so labels don't collide.
      const offsetDirection = Math.random() > 0.5 ? 1 : -1;
      const offset = y * Y_SPACING;
      return { x, y: y + offset + (offset * offsetDirection) };
    }
  }
};

function createCytoElements(nodes, edges) {
  let cytoNodes = Object.keys(nodes).map(name => {
    let node={
      data: Object.assign({}, nodes[name], {
        id: name,
        label:name.replace(/_com$/g,'')
        // label:labelText(name.replace(/_com$/g,''),'')
        // label: labelText(name, nodes[name].recomputations)
      }),
    }
    if(checkedNodeName[name]){
      node.data['selected']=true;
    }
    return node;

  } );


  // let cytoEdges = edges.map((edge, i) => ({ data: {
  //   source: edge.from,
  //   target: edge.to,
  //   id: i,
  // } }));


  let cytoEdges = edges.map((edge, i) => {

    let className='';
    
    if(checkedNodeName[edge.from]&&checkedNodeName[edge.to]) {
      className='selected_edge'
    }else if(edge.from.endsWith('_com')&&edge.to.endsWith('_com')) className='comedge';
    return {
      data:{
        source:edge.from,
        target:edge.to,
        id:i,
        class:className
      }
    }
    })

  // let index=cytoEdges.length;
  // cytoEdges.map(edge=>{
  //   if(edge.data.class==='comedge'){
  //     cytoEdges.push({
  //       data:{
  //         source:edge.data.source,
  //         target:edge.data.target,
  //         id:index++
  //       }
  //     })
  //   }
  // })

  return cytoNodes.concat(cytoEdges);
}


let graph
// console.log('graph',graph)
// 监听redux-analyz是否加载
EventEmitter.once('redux_analyz_loaded',()=>{
  getStateWith(()=>curStore)

  paintTypeGraph()
})

EventEmitter.on('redux_analyz_update',()=>{
  console.log('redux_analyz_update executed')
  paintTypeGraph();
})

// console.log('graph',graph,172)
let myCy;

let checkedNodeName={}

// 注册被选中节点关联节点
function selectNode(selectorName){
  checkedNodeName=[];
  let curNextNodes=[selectorName]
  while(curNextNodes&&curNextNodes.length){
    let curNextNode=curNextNodes.shift();
    checkedNodeName[curNextNode]=true
    graph.edges.map(edge=>{
      if(edge.to===curNextNode) curNextNodes.push(edge.from);
    })
  }
  // curNextNodes=Array.from(new Set(curNextNodes));
  // console.log('checkedNodeName----',checkedNodeName)
}

// graph生成元素，绘制到canvas上
function paintTypeGraph(){
  let moduleKey=curModuleKey(store.getState()),type=nodeType(store.getState());
  // console.log('moduleKey',moduleKey)
  let selectors={};
  if(moduleKey==='all'){
    Object.keys(allSelectors).map(key=>{
      let curSelectorList=allSelectors[key];
      Object.keys(curSelectorList).map(selectorKey=>{
        selectors[selectorKey]=curSelectorList[selectorKey]
      })
    })
  }else{
    let curSelectors=allSelectors[moduleKey]
    selectors={...curSelectors}
  }
  // console.log('selectors',selectors,220)
  // console.log(Object.keys(selectors),227)
  reset()
  registerSelectors(selectors)
  getStateWith(()=>curStore);
  
  graph=selectorGraph_self()    
  // console.log('graph',graph,230)
  let curNodes={},curEdges=[];
  if(type==='component'){
    Object.keys(graph.nodes).map(nodeName=>{
      if(nodeName.endsWith('_com')) curNodes[nodeName]=graph.nodes[nodeName];
    })
  
    curEdges=graph.edges.filter(edge=>{
      if(edge.from.endsWith('_com')&&edge.to.endsWith('_com')) return true;
    })
  }else{
    curNodes=graph.nodes;
    curEdges=graph.edges;
  }
  
  console.log('curNodes',curNodes,248)
  let elements=createCytoElements(curNodes,curEdges);
  // console.log('elements',elements,197)
  let container=document.getElementById('graph');
  myCy=cytoscape({...cytoDefaults,container,elements})

  myCy.on('tap','node',event=>{
    let selectedName=event.target.id()
  //   update_SelectedName(selectedName)
  //   selectNode(selectedName);

  //   paintTypeGraph()
    let res=checkSelector(selectedName);
    store.dispatch(update_In(res.inputs))
    store.dispatch(update_Out(res.output))
  // console.log('selector.content',res,262)
    store.dispatch(update_Title(res.content))
  })

}




