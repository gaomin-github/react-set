// !运算符
// 作用：避免调用空对象 / 函数报错；避免空赋值（无意义赋值）

type funcType=()=>1
function falseDemo (func?: funcType) {
    func!();
}
falseDemo();

// 学习：src/business/wiki-v2/utils/tea/index.ts
