import {
    getChildNodes
} from '../picGraph'

// import * as getChildNodes from '../picGraph'

// console.log('getChildNodes',getChildNodes)
describe('picGraph test',function(){
    it('getChildNodes',()=>{
        // console.log('jest test 1')
        let curName='curName'
        // 当前节点无依赖关系
        let selectors1={
            'curName':{
                dependencies:[],
                selectorName:'curName'
            },
            'a':{
                dependencies:[],
                selectorName:'a'
            }
        }
        const res1=getChildNodes(selectors1,curName)
        expect(res1).toEqual([])
        // 当前节点仅有一层子节点
        const curNode={
            dependencies:[],
            selectorName:'curName'
        }
        const aNode={
            dependencies:[curNode],
            selectorName:'a'
        }
        const bNode={
            dependencies:[],                
            selectorName:'b'
        }
        let selectors2={
            'curName':curNode,
            'a':aNode,
            'b':bNode
        }
        expect(getChildNodes(selectors2,curName)).toEqual(['a'])
        // // 当前节点有多层嵌套子节点
        const cNode={
            dependencies:[aNode],                
            selectorName:'c'
        }
        const dNode={
            dependencies:[bNode,cNode],                
            selectorName:'d'
        }
        const eNode={
            dependencies:[curNode],                
            selectorName:'e'
        }
        let selectors3={
            'curName':curNode,
            'a':aNode,
            'b':bNode,
            'c':cNode,
            'd':dNode,
            'e':eNode
        }
        expect(getChildNodes(selectors3,curName)).toEqual(['a','e','c','d'])


    })
})