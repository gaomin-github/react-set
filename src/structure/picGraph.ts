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
import { Children } from 'react';

let allSelectorKeys=Object.keys(allSelectors)
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
    },
    {
      selector: "node[class='selectedNode']",
      style:  {
        label: 'data(label)',
        color: colors.defaultNodeLabel,
        'background-color': 'rgba(210,20,20,1)',
      }
    },
    {
      selector: "node[class='pnode']",
      style:  {
        label: 'data(label)',
        color: colors.defaultNodeLabel,
        'background-color': 'orange',
      }
    },
    {
      selector: "node[class='cnode']",
      style:  {
        label: 'data(label)',
        color: colors.defaultNodeLabel,
        'background-color': 'rgba(50,160,240,1)',
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

let childSelectors=[],parentSelectors=[],childComs=[],parentComs=[],selectedName;

function createCytoElements(nodes, edges) {
  // console.log('selectedName',selectedName,)
  //   console.log('parentSelectors',parentSelectors,)
  // console.log('childSelectors',childSelectors,)

  let cytoNodes = Object.keys(nodes).map(name => {
    let nodeClassName='';
    // if(name===selectedName){
    //   nodeClassName='selectedNode'
    // }else if(parentComs.includes(name)){
    //   nodeClassName='pnode'
    // }else if(childComs.includes(name)){
    //   nodeClassName='cnode'
    // }
    // console.log('selector',name,'nodeClassName',nodeClassName)
    let node={
      data: Object.assign({}, nodes[name], {
        id: name,
        label:name.replace(/_com$/g,''),
        class:nodeClassName
      }),
    }
    return node;
  } );
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
// function selectNode(selectorName){
//   checkedNodeName=[];
//   let curNextNodes=[selectorName]
//   while(curNextNodes&&curNextNodes.length){
//     let curNextNode=curNextNodes.shift();
//     checkedNodeName[curNextNode]=true
//     graph.edges.map(edge=>{
//       if(edge.to===curNextNode) curNextNodes.push(edge.from);
//     })
//   }
//   // curNextNodes=Array.from(new Set(curNextNodes));
//   // console.log('checkedNodeName----',checkedNodeName)
// }

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
  
  let elements=createCytoElements(curNodes,curEdges);
  console.log('elements',elements,197)
  let container=document.getElementById('graph');
  myCy=cytoscape({...cytoDefaults,container,elements})

  myCy.on('tap','node',event=>{
    selectedName=event.target.id()

    let res=checkSelector(selectedName);

    store.dispatch(update_In(res.inputs))
    store.dispatch(update_Out(res.output))
    store.dispatch(update_Title(res.content))

    // 高亮graph
    selectNode(myCy,graph);
    myCy.nodes(`[id="${selectedName}"]`).style({
      'background-color': 'rgba(210,20,20,1)'
    })
    // paintTypeGraph()
    // cytoscape({...cytoDefaults,container,elements})
  })

}

function selectNode(cy,graph){
  // selectedName=selectedName;
  childSelectors=[selectedName],childComs=[];

  let sIndex=0;
  while(sIndex<childSelectors.length){
    let curS=childSelectors[sIndex];
    sIndex++
    graph.edges.map(edge=>{
      if(edge.to!==curS) return;
      if(edge.from.endsWith('_com')){
        // childComs[edge.from]=true
        childComs.push(edge.from)
        return;
      }
      if(edge.from){
        // childSelectors[edge.from]=true;
        childSelectors.push(edge.from)
        childSelectors=Array.from(new Set(childSelectors))
      }
    })
  }
  childSelectors.shift()

  parentSelectors=[selectedName]
  let eIndex=0;
  while(eIndex<parentSelectors.length){
    let curS=parentSelectors[eIndex];
    eIndex++;
    graph.edges.map(edge=>{
      if(edge.from!==curS) return;
      if(edge.to.endsWith('_com')){
        parentComs.push(edge.from);
        parentComs=Array.from(new Set(parentComs))
        return;
      }
      if(edge.to){
        parentSelectors.push(edge.to);
        parentSelectors=Array.from(new Set(parentSelectors))
      }
    })
  }
  parentSelectors.shift()
  Object.keys(graph.nodes).map(nodeKey=>{
    if(parentComs.includes(nodeKey)){
      cy.nodes(`[id="${nodeKey}"]`).style({
        'background-color': 'orange'
      })
      return;
    }
    if(childComs.includes(nodeKey)){
      cy.nodes(`[id="${nodeKey}"]`).style({
        'background-color': 'rgba(50,160,240,1)'
      })
      return;
    }
    if(selectedName===nodeKey) return;
    cy.nodes(`[id="${nodeKey}"]`).style({
      'background-color': colors.defaultNode
    })
  })
  console.log('cy.edges------343',cy.edges)
  // parentSelectors.map()
  let pS=[...parentSelectors,...parentComs],cS=[...childSelectors,...childSelectors]
  graph.edges.map(edge=>{
    if(pS.includes(edge.to)&&pS.includes(edge.from)){
      cy.edges(`[source="${edge.from}" target="${edge.to}"]`).style({
        'line-color':'orange',
        'target-arrow-color': 'orange',
      })
    }else if(cS.includes(edge.to)&&cS.includes(edge.from)){
      cy.edges(`[source="${edge.from}" target="${edge.to}"]`).style({
        'line-color':'rgba(50,160,240,1)',
        'target-arrow-color': 'rgba(50,160,240,1)',
      })
    }
  })


  

  // console.log('childComs',childComs);
  // console.log('parentSelectors',parentSelectors);
  // console.log('parentComs',parentComs);
}




