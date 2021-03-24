let a=[1,2,3]
let test={}
let b=a.reduce((add,item)=>{
    console.log('add',add,'item',item)
    return add+item;
},10)
console.log('b',b)
