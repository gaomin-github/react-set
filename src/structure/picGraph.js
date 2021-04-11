import {registerSelectors,getStateWith,selectorGraph,checkSelector} from 'reselect-tools'
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import curStore from './store'
import * as DropdownNavMenuSelectors from './DropdownNavMenu'


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

const defaultEdgeStyle = {
  'curve-style': 'bezier',
  width: 4,
  'target-arrow-shape': 'triangle',
  'line-color': colors.defaultEdge,
  'target-arrow-color': colors.defaultEdge,
  'z-index': 1,
};

const selectedNodeStyle = {
  'background-color': colors.selectedNode
};

const defaultNodeStyle = {
  label: 'data(label)',
  color: colors.defaultNodeLabel,
  'background-color': colors.defaultNode,
};

const Y_SPACING = 0.1;

const cytoDefaults = {
  style: [
    {
      selector: 'edge',
      style: defaultEdgeStyle
    },
    {
      selector: 'node',
      style: defaultNodeStyle
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
    selectBackUrl:DropdownNavMenuSelectors.selectBackUrl,
    //selectQuery,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,
    // DropdownNavMenu_Com,
    // ReturnMenu_Com,
    //   ExploreNavList_Com,
    //   ExploreNavList_Com
  }
registerSelectors(selectors)

let graph=selectorGraph()
let elements=createCytoElements(graph.nodes,graph.edges);
setTimeout(()=>{
let container=document.getElementById('graph');
cytoscape({...cytoDefaults,container,elements});
},1000)
