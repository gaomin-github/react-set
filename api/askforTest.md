// 1.项目测试相关文件
// test/mocha.wiki.opts
// test/config/wiki-online.js
// demo:test/wiki/wiki_space_setting/member.spec.js


1）puppeteer:模拟浏览器，提供浏览器控制方法
let browser=await puppeteer.launch({
    headless:false, //（测试时浏览器可见）
    devtools:true,  //
    slowMo:100, //测试运行速度
})
2）jest:app测试

3）faker：造假数据

describe(str,fun):测试单元
test(jest)：
let page=browser.newPage()打开浏览器
page.goto(url)：进入项目中
page.waitForSelector(css选择器) 等待dom加载好，选择器有内容；
page.emulate(options) 模拟浏览器属性。meta，userAgent,viewport
page.evaluateHandle((selector)=>{},selector)；//以指定selector为参数，执行函数
expect(var).toBe(val) 判断变量值

beforeAll
afterAll
before
after


定义全局变量/执行全局操作/挂载：？
参考：https://www.habx.com/tech/puppeteer
page.evaluateOnNewDocument(`
   Object.defineProperty(window, '${name}', {
     get() {
       return '${value}'
     }
   })
 `)

 模拟鼠标操作？参考：//test/wiki/utils/showMouse.js

 

 page.evaluate：执行脚本
 page.$eval：对dom元素执行操作。
 page.exposeFunction:暴露方法到window上

 测试报表？
 详细设计？



 动态添加的css选择器，随编译变化。脚本用data-testid写

1.测试用例类型，诉求，真实作用概率，覆盖率，效果，缺陷？

e2e：模仿用户从入口处稳定跑完路径。（界面布局，内容信息）（黑盒，屏蔽代码如何实现）（不受代码重构影响）
单元测试：测试函数稳定可靠执行
集成测试（功能测试）
三种类型比例控制参考：https://codeahoy.com/2016/07/05/unit-integration-and-end-to-end-tests-finding-the-right-balance/



2.不同测试类型结合可能性？
e2e和单元测试如何结合？

3.各类型测试库，能力？
puppeter监听网络连接，得到连接数？

4.自动化测试问题？
参考：https://segmentfault.com/a/1190000018519089

5.参考webpack的e2e测试（nightwatch.js)

6.go 单元测试，基准测试 并发基准测试


7.分布式session

8.前端操作原子性->服务端执行原子性
1）服务端接口原子性保证？
2）前端限流
3）

9.用例数据隔离
1）类似问题（账号提供服务）：https://ceshiren.com/t/topic/7256
2）e2e测试（答案未知）：https://medium.com/@steven.lemon182/our-teams-troubles-with-hand-written-automated-ui-tests-cb189cbbff90
措施：设置前提条件（测试编写复杂化，运行速度变慢）
3）ui测试结果比对（截图后比对图像）：https://medium.com/@tyy.sh/%E6%BB%B4%E5%A2%A8%E4%B9%A6%E6%91%98-ios-ui%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%96%B9%E6%A1%88-e229c7fc63b6
4）自动化测试需要的数据，应该尽可能自动创建和销毁（操作后恢复初始状态）

10.e2e测试中问题？

11.e2e测试框架（流程识别）

12.测试用例模版参考：https://tech.meituan.com/2016/03/22/testcase-templete.html

13.自动化测试报告，集成后，做可视化输出
https://tech.meituan.com/2017/06/23/mobile-app-automation.html

14.测试用例未通过，问题定位友好性提示？

15.自动化开展顺序：单元测试->api测试->模块测试->ui自动化
测试数据恢复/清理

参考：https://zhuanlan.zhihu.com/p/81030253


16.test中陌生代码
1）buttons是数字
for (let i = 0; i < 5; i++) {
    box.classList.toggle('button-' + i, buttons & (1 << i));
}
目的：
2）

17.需要研究的用法
1）chai包
expect(obj).to.have.lengthOf(3)
参考：tree.spec.js
2）page.$$
puppeteer 的$和$$用法。$选择一个，$$选择多个
参考：https://ithelp.ithome.com.tw/articles/10194328
代码：tree.spec.js
3）创建文档。只确保新建时弹窗正常弹出，上面的按钮可以正确响应？
4）对于悬浮窗，确保移入时显示，移出时隐藏？
5）新建文档/删除文档时，在selector指定token？可以利用url抓取，动态指定吗?
6）class内容判断？
const operationDocAttr = await domHelper.getDomAttribute($operationDoc, ['class']);
    const isOpen = /open/.test(operationDocAttr.class);
7）挂载文档中，探测，删除添加的节点？(需要自己测试)
const attr = await domHelper.getDomAttribute($li.asElement(), ['data-token']);
    await treeHelper.deleteDoc(page, `li[data-token=${attr['data-token']}]`);
8）puppeter设置timeout和retries作用？
9）展开和折叠文档树，token都是写静态串。（动态获取token可能性？优势（性价比）？）
10）按照标题匹配树结点。精准匹配/近似匹配


e2e结构
1.全局变量和通用方法结构
1）初始化全局变量：test/init_wiki.js
超时设置：test/config/wiki-online.js




test/wiki/wiki_details/tree/tree.spec.js 代码解读
1）创建用例，打开页面
2）全局监听按钮click事件
3）定义全局变量到global：
4）元素追加，样式修改；元素查找；按钮点击
5）判断指定dom数量
6）展开文档树
获取dom节点常规操作：page.waitForSelector->page.$
page.waitFor(selector)->page.$
a=page.evaluateHandle();    a.$(selector)
element.evaluate((node,attr)=>{},attr)  //以element为node传参，执行fun

判断树是否展开（根据class属性判断）。测试展开，实际已展开，不处理。测试展开，实际未展开，点击
7）模仿鼠标操作
page.waitForSelector->page.hover(selector||null)
page.mouse.move(0,0)    //鼠标位置
inputElement.type(str,{delay:100})  //选中input框，输入内容
page.type(selector,str)
page.click(btnSelector)
btnElement.click()
8）导航页相关
page.waitForNavigation()    //和promie.all结合使用
page.url()  //获取当前url
9）element.asElement()
10）判断hover弹窗有效性







