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
        let selectors2={
            'curName':{
                dependencies:[],
                selectorName:'curName'
            },
            'a':{
                dependencies:['curName'],
                selectorName:'a'
            },
            'b':{
                dependencies:[],                
                selectorName:'b'
            }
        }
        expect(getChildNodes(selectors2,curName)).toEqual(['a'])
        // // 当前节点有多层嵌套子节点
        let selectors3={
            'curName':{
                dependencies:[],
                selectorName:'curName'
            },
            'a':{
                dependencies:['curName'],
                selectorName:'a'
            },
            'b':{
                dependencies:[],                
                selectorName:'b'
            },
            'c':{
                dependencies:['a'],                
                selectorName:'c'
            },
            'd':{
                dependencies:['b','c'],                
                selectorName:'d'
            },
            'e':{
                dependencies:['curName'],                
            }
        }
        expect(getChildNodes(selectors3,curName)).toEqual(['a','e','c','d'])


    })
})