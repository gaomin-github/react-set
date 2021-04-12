import { createSelector } from 'reselect'

let _getState = null
let _allSelectors = new Set()


const _isFunction = (func) => typeof func === 'function'

/*
 * This function is only exported for legacy purposes.
 * It will be removed in future versions.
 * 
 */
export function createSelectorWithDependencies(...args) {
  return createSelector(...args)
}

const _isSelector = (selector) => (selector && selector.resultFunc) || _isFunction(selector)

const _addSelector = (selector) => {
  // console.log('21---------name',selector.name,'selectorName',selector.selectorName)
  _allSelectors.add(selector)

  const dependencies = selector.dependencies || []
  if(dependencies.length===0){
    // console.log('selector',selector)
  }
  // console.log('dependencies.len',dependencies)
  dependencies.forEach(_addSelector)
}

export function registerSelectors(selectors) {

  Object.keys(selectors).forEach((name) => {
    const selector = selectors[name]
    // console.log('denpendencies',36,selector.dependencies)
    // console.log('name',35,name)
    if (_isSelector(selector)) {
      // console.log('isSelector')
      selector.selectorName = name
      _addSelector(selector)
    }
  })
}


export function reset() {
  _getState = null
  _allSelectors = new Set()
}


export function checkSelector(selector) {
  if (typeof selector === 'string') {
    // console.log('string selector',53)

    for (const possibleSelector of _allSelectors) {
      // console.log('possibleSelector.selectorName',possibleSelector.selectorName,56)
      console.log(possibleSelector)
      if (possibleSelector.selectorName === selector||possibleSelector.name===selector) {
        console.log('get entire Selector')
        selector = possibleSelector
        break
      }
    }
  }
  // console.log('selector',selector,60)

  if (!_isFunction(selector)) {
    throw new Error(`Selector ${selector} is not a function...has it been registered?`)
  }


  const { dependencies = [], selectorName = null } = selector
  const isNamed = typeof selectorName === 'string'
  const recomputations = selector.recomputations ? selector.recomputations() : null

  const ret = { dependencies, recomputations, isNamed, selectorName }
  if (_getState) {
    const state = _getState()
    const inputs = dependencies.map((parentSelector) => parentSelector.toString())

    // const inputs = dependencies.map((parentSelector) => parentSelector(state))
    const extra = { inputs }
    extra.content=selector.toString()
    try {
      const output = selector(state)
      extra.output = output
      // console.log('state',state);
      // console.log('output',extra.output)
    } catch (e) {
      const error = `checkSelector: error getting output of selector ${selectorName}. The error was:\n${e}`
      extra.error = error
    }
    Object.assign(ret, extra)
  }

  return ret
}


export function getStateWith(stateGetter) {
  _getState = stateGetter
}


function _sumString(str) {
  return Array.from(str.toString()).reduce((sum, char) => char.charCodeAt(0) + sum, 0)
}

const defaultSelectorKey = (selector) => {
  if (selector.selectorName) {
    return selector.selectorName
  }

  if (selector.name) { // if it's a vanilla function, it will have a name.
    return selector.name
  }

  return (selector.dependencies || []).reduce((base, dep) => {
    console.log('base',base,'dep',dep)
    return base + _sumString(dep)
  }, (selector.resultFunc ? selector.resultFunc : selector).toString())
}

export function selectorGraph(selectorKey = defaultSelectorKey) {
  const graph = { nodes: {}, edges: [] }
  const addToGraph = (selector) => {
    const name = selectorKey(selector)
    console.log('graph.nodes',name,121)
    if (graph.nodes[name]) return
    const { recomputations, isNamed } = checkSelector(selector)
    // console.log(recomputations,isNamed,124)
    graph.nodes[name] = {
      recomputations,
      isNamed,
      name
    }

    let dependencies = selector.dependencies || []
    // dependencies.forEach((dependency) => {
    //   addToGraph(dependency)
    //   graph.edges.push({ from: name, to: selectorKey(dependency) })
    // })
  }
  // console.log('allSelectors',_allSelectors)
  for (let selector of _allSelectors) {
    console.log('selector.name',selector.name,'selectorName',selector.selectorName,131)
    // console.log('selector',selector.toString(),132)

    addToGraph(selector)
  }
  return graph
}

// hack for devtools
/* istanbul ignore if */
if (typeof window !== 'undefined') {
  window.__RESELECT_TOOLS__ = {
    selectorGraph,
    checkSelector
  }
}
