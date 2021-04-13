// import {registerSelectors,getStateWith,selectorGraph,checkSelector} from 'reselect-tools'
import {registerSelectors,getStateWith,selectorGraph,checkSelector} from '$modules/reselect-tools'

import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import EventEmitter from '$libs/eventEmitter'
import {update_In,update_Out,update_Title} from '$redux/actions';
import curStore from './store'
import {selectBackUrl,DropdownNavMenu_Com,selectCurrentSuiteByObjToken,ReturnMenu_Com} from './DropdownNavMenu';
import store from '$redux/store';



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
        'target-arrow-shape': 'triangle',
        'line-color': colors.defaultEdge,
        'target-arrow-color': colors.defaultEdge,
        'z-index': 1,
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
  let cytoNodes = Object.keys(nodes).map(name => ({
    data: Object.assign({}, nodes[name], {
      id: name,
      label: labelText(name, nodes[name].recomputations)
    }),
  }));


  let cytoEdges = edges.map((edge, i) => ({ data: {
    source: edge.from,
    target: edge.to,
    id: i,
  } }));

  return cytoNodes.concat(cytoEdges);
}




getStateWith(()=>curStore)

const selectors = {
  // DropdownNavMenu_Com,
  // selectCurrentSuiteByObjToken,
  // selectBackUrl:DropdownNavMenuSelectors.selectBackUrl,
  //selectQuery,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,
  // DropdownNavMenu_Com,
  ReturnMenu_Com,
  // ExploreNavList_Com
  //   ExploreNavList_Com,
  //   ExploreNavList_Com
}
  // console.log('dependencies.len',117,DropdownNavMenu_Com.dependencies[0].name)

// console.log('selectorName',13,DropdownNavMenu_Com.selectorName)
registerSelectors(selectors)
// console.log('selectorName',DropdownNavMenu_Com.selectorName,115)

let graph=selectorGraph()
console.log('graph',graph,118);
let elements=createCytoElements(graph.nodes,graph.edges);
// 监听redux-analyz是否加载
// store.dispatch(update_Out(null))
// console.log('dependencies',119,selectCurrentSuiteByObjToken.dependencies)
// console.log('elements',elements,121)
EventEmitter.once('redux_analyz_loaded',()=>{
  // console.log('redux_analyz_loaded touched')
  let container=document.getElementById('graph');
  let cy=cytoscape({...cytoDefaults,container,elements});
  cy.on('tap','node',(event)=>{
    let selectorName=event.target.id()
    let res=checkSelector(selectorName)
    // console.log('res',125,res.output)
    store.dispatch(update_In(res.inputs))
    store.dispatch(update_Out(res.output))
    store.dispatch(update_Title(res.content))
    // fetchOut(s)
  })
})
