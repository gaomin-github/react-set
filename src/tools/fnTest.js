function createSelector(){
    let args=Array.from(arguments)
    let fn=args.slice(args.length-1,1);
    return (args)=>{
        fn.call(this,...args.slice(1,args.length-1))
    }
}
const a=createSelector('1',p=>p)

const b=createSelector(a,'2',p=>p)

const c=createSelector(a,'3',p=>p)

// console.log(c.name,'name');
function getCloserName(fun){
    console.log('fun',fun);
    console.log('fun.toString',fun.toString())
    console.log('callee.name',arguments.callee.name)
}
getCloserName(c)

