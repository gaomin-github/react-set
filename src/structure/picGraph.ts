import {
  registerSelectors,
  getStateWith,
  checkSelector,
  selectorGraphSelf,
} from '$modules/reselect-tools';
import { createSelector } from 'reselect';

import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import EventEmitter from '$libs/eventEmitter';
import { updateIn, updateOut, updateTitle, updateRefer, updateSelectedName, initModuleList } from '$redux/actions';
import curStore from './store';
import * as allSelectors from './index';
import store from '$redux/store';

store.dispatch(initModuleList(['appState', 'allSpaces', 'SwitchSpace_com', 'DropdownNavMenu_com']));

const ranalyz = state => state.ranalyz;
const nodeType = createSelector(ranalyz, data => data.nodeType);
const curModuleKey = createSelector(ranalyz, data => data.curModuleKey);

cytoscape.use(dagre);

const truncateText = (str, maxChars = 20) => {
  if (str.startsWith('function')) {
    str = str.replace(/^function/i, 'f');
    // str=`f${str}`
  }
  return (str.length > maxChars ? str.slice(0, maxChars) : str);
};
const labelText = (id, recomputations) => truncateText(id) + (recomputations === null ? '' : ` (${recomputations})`);

const colors = {
  // defaultEdge: 'rgb(79, 90, 101)',
  childEdge:'rgb(79, 90, 101)',
  parentEdge:'orange',
  defaultEdge:'rgb(133,133,133)',
  defaultNodeLabel: 'rgb(111, 179, 210)',
  defaultNode: 'rgb(232, 234, 246)',
  selectedNode: 'orange',
  lockedNode:'rgb(188,188,188)',
  dependency: '#ffeb3b',
  dependent: '#f868d0',
  recomputed: 'red',
  comLineColor:'rgb(55,155,210)',
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
      },
    },
    {
      selector:'edge[class=\'comedge\']',
      style:{
        'line-style':'solid',
      },
    },
    {
      selector:'edge[class=\'selected_edge\']',
      style:{
        'line-style':'solid',
      },
    },
    {
      selector: 'node',
      style:  {
        label: 'data(label)',
        color: colors.defaultNodeLabel,
        'background-color': colors.defaultNode,
      },
    },
    {
      selector: 'node[class=\'locked\']',
      style:  {
        label: 'data(label)',
        color: colors.lockedNode,
        'background-color': colors.lockedNode,
      },
    },
    {
      selector: 'node[class=\'selectedNode\']',
      style:  {
        label: 'data(label)',
        color: colors.defaultNodeLabel,
        'background-color': 'rgba(210,20,20,1)',
      },
    },
    {
      selector: 'node[class=\'pnode\']',
      style:  {
        label: 'data(label)',
        color: colors.defaultNodeLabel,
        'background-color': 'orange',
      },
    },
    {
      selector: 'node[class=\'cnode\']',
      style:  {
        label: 'data(label)',
        color: colors.defaultNodeLabel,
        'background-color': 'rgba(50,160,240,1)',
      },
    },

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
    },
  },
};

function createCytoElements(nodes, edges) {
  const cytoNodes = Object.keys(nodes).map(name => {
    const node = {
      data: Object.assign({}, nodes[name], {
        id: name,
        label:name.replace(/_com$/g, ''),
        class:name.endsWith('_overall') ? 'locked' : '',
      }),
    };
    return node;
  });

  const cytoEdges = edges.map((edge, i) => {
    let className = '';
    if ((!edge.from || edge.from.endsWith('_com')) && (!edge.to || edge.to.endsWith('_com'))) className = 'comedge';
    return {
      data:{
        source:edge.from,
        target:edge.to,
        id:i,
        class:className,
      },
    };
  });

  return cytoNodes.concat(cytoEdges);
}

// 监听redux-analyz是否加载
EventEmitter.once('redux_analyz_loaded', () => {
  getStateWith(() => curStore);
  paintTypeGraph();
});

EventEmitter.on('redux_analyz_update', () => {
  // console.log('redux_analyz_update executed')
  paintTypeGraph();
});

// graph生成元素，绘制到canvas上
function paintTypeGraph() {
  const moduleKey = curModuleKey(store.getState()); const type = nodeType(store.getState());
  registerSelectors(allSelectors);
  // console.log('allSelectors---223',allSelectors)
  getStateWith(() => curStore);

  const graph = selectorGraphSelf();
  let curNodes = {}; let curEdges = [];

  // 是否只展示组件过滤
  if (type === 'component') {
    Object.keys(graph.nodes).map(nodeName => {
      if (nodeName.endsWith('_com')) curNodes[nodeName] = graph.nodes[nodeName];
    });

    curEdges = graph.edges.filter(edge => {
      if (edge.from.endsWith('_com') && edge.to.endsWith('_com')) return true;
    });
  } else {
    curNodes = graph.nodes;
    curEdges = graph.edges;
  }

  // 展示选中组件
  if (moduleKey && moduleKey !== 'all') {
    const childSKeys = getChildNodes(allSelectors, moduleKey);
    Object.keys(curNodes).map(nodeName => {
      if (!childSKeys.includes(nodeName)) {
        delete curNodes[nodeName];
      }
    });

    curEdges = curEdges.filter(edge => {
      if (edge.from && !childSKeys.includes(edge.from)) return false;
      if (edge.to && !childSKeys.includes(edge.to)) return false;
      return true;
    });
  }

  const elements = createCytoElements(curNodes, curEdges);
  const container = document.getElementById('graph');
  const myCy = cytoscape({ ...cytoDefaults, container, elements });

  myCy.on('tap', 'node', event => {
    const selectedName = event.target.id();
    const res = checkSelector(selectedName);
    notifyCurSelectorInfo(res);

    if (selectedName.endsWith('_overall')) return;
    // 高亮graph
    emphasize(myCy, graph, selectedName);
  });
}

function notifyCurSelectorInfo(res) {
  const { inputs, output, content } = res;
  store.dispatch(updateIn(inputs));
  store.dispatch(updateOut(output));
  store.dispatch(updateTitle(content));
}

function emphasize(cy, graph, selectedName) {
  // selectedName=selectedName;
  let childSelectors = [selectedName]; let childComs = [];
  // 收集关联子节点集合
  let sIndex = 0;
  while (sIndex < childSelectors.length) {
    const curS = childSelectors[sIndex];
    sIndex++;
    graph.edges.map(edge => {
      if (edge.to !== curS) return;
      if (edge.from.endsWith('_com')) {
        // childComs[edge.from]=true
        childComs.push(edge.from);
        childComs = Array.from(new Set(childComs));
        return;
      }
      if (edge.from) {
        // childSelectors[edge.from]=true;
        childSelectors.push(edge.from);
        childSelectors = Array.from(new Set(childSelectors));
      }
    });
  }
  childSelectors.shift();
  store.dispatch(updateRefer(childComs));

  // 收集关联父节点
  let parentSelectors = [selectedName]; let parentComs = [];
  let eIndex = 0;
  while (eIndex < parentSelectors.length) {
    const curS = parentSelectors[eIndex];
    eIndex++;
    graph.edges.map(edge => {
      if (edge.from !== curS) return;
      if (edge.to.endsWith('_com')) {
        parentComs.push(edge.from);
        parentComs = Array.from(new Set(parentComs));
        return;
      }
      if (edge.to) {
        parentSelectors.push(edge.to);
        parentSelectors = Array.from(new Set(parentSelectors));
      }
    });
  }
  parentSelectors.shift();

  // 修改关联节点样式
  Object.keys(graph.nodes).map(nodeKey => {
    if (parentComs.includes(nodeKey)) {
      cy.nodes(`[id="${nodeKey}"]`).style({
        'background-color': 'orange',
      });
      return;
    }
    if (childComs.includes(nodeKey)) {
      cy.nodes(`[id="${nodeKey}"]`).style({
        'background-color': 'rgba(50,160,240,1)',
      });
      return;
    }
    if (selectedName === nodeKey) {
      cy.nodes(`[id="${nodeKey}"]`).style({
        'background-color': 'rgba(210,20,20,1)',
      });
      return;
    }

    cy.nodes(`[id="${nodeKey}"]`).style({
      'background-color': colors.defaultNode,
    });
  });

  // 修改关联边样式
  const pS = [selectedName, ...parentSelectors, ...parentComs]; const cS = [selectedName, ...childSelectors, ...childComs];
  graph.edges.map(edge => {
    if (pS.includes(edge.to) && pS.includes(edge.from)) {
      cy.edges(`[source="${edge.from}"][target="${edge.to}"]`).style({
        'line-color':colors.parentEdge,
        'target-arrow-color': colors.parentEdge,
      });
      return;
    }
    if (cS.includes(edge.to) && cS.includes(edge.from)) {
      // console.log('edge.from',edge.from,'to',edge.to)
      cy.edges(`[source="${edge.from}"][target="${edge.to}"]`).style({
        'line-color':colors.childEdge,
        'target-arrow-color': colors.childEdge,
      });
      return;
    }
    // 清理历史设置样式
    cy.edges(`[source="${edge.from}"][target="${edge.to}"]`).style({
      'line-color':colors.defaultEdge,
      'target-arrow-color': colors.defaultEdge,
    });
  });
}

// 通过dependencies得到所有子节点 selectedName
export function getChildNodes(selectors, curName) {
  let childSelectors = [curName];
  let sIndex = 0;

  while (sIndex < childSelectors.length) {
    const curSName = childSelectors[sIndex];
    sIndex++;
    Object.keys(selectors).map(sName => {
      const s = selectors[sName];
      const curDeps = s.dependencies;
      if (curDeps) {
        const isChildIndex = curDeps.findIndex(sd => {
          return sd.selectorName === curSName || sd.name === curSName;
        });
        if (isChildIndex >= 0) {
          childSelectors.push(sName);
          childSelectors = Array.from(new Set(childSelectors));
        }
      }
    });
  }
  return childSelectors;
}
