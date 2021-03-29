// 新版wiki详情页拖拽
const {envCfg}=global;
const {wiki,homeUrl,mochaTestRetryTimes}=envCfg;
const {createPage}=require('../utils');
const expect=require('chai').expect;
const {dragHelper}=require('../utils/helper');
describe('wiki详情页：树拖拽操作',function(){
    const timeout=global.envCfg.timeout;
    let page;
    this.timeout(timeout)
    this.retries(mochaTestRetryTimes);
    before(async()=>{
        page=await createPage(1392,877);
        const wikiTestBase='.wiki-home-wiki-main h3',//wiki首页知识库
            testBaseKeyword='e2e测试';//wiki首页测试知识库名
        await page.goto(wiki);
        await page.waitFor(4000)
        await page.waitForSelector(wikiTestBase)
        let testBaseHandler=await getElementHandler(page,wikiTestBase,testBaseKeyword)
        await expect(testBaseHandler).to.exist;
        await Promise.all([page.waitForNavigation(),await testBaseHandler.click()]);

        // 需要确认进入的知识库，当前用户有拖拽权限？
    })
    after(async()=>{
        await page.close()
    })
    it('拖拽到某节点上方',async ()=>{
    
        // 预期：
        // 是父节点，不动
        // 非父节点，成为最后一个子节点
        // 父节点不能拖动到子节点
        // tip：需要至少两个节点
        await page.waitFor(2000);
        const dragNode='.tree-node-wrapper[draggable="true"] div div .tree-item';
        await page.waitForSelector(dragNode)
        let dragHandlers=await page.$$(dragNode);
        let toHandler=dragHandlers[0];
        let curHandler=dragHandlers[1];        
        let curParent=await curHandler.evaluate(el=>el.getAttribute('data-parent'))
        let toToken=await toHandler.evaluate(el=>el.getAttribute('data-token'))
        if(toToken===curParent){
            return;
        }
        let curToken=await curHandler.evaluate(el=>el.getAttribute('data-token'))
        let toLen=await toHandler.evaluate(el=>el.getAttribute('data-extend-btn'))
        await dragAndDrop(page,`[data-token=${curToken}]`,`[data-token=${toToken}]`)
        await page.waitFor(500)
        // 拖拽后子节点数量变化
        let toLen_new=await toHandler.evaluate(el=>el.getAttribute('data-extend-btn'));
        expect(Number(toLen_new)).to.equal(Number(toLen)+1);
        await page.waitForSelector(`${dragNode}[data-parent=${toToken}]`)
        // 最后一个子节点为新节点
        let childHandlers=await page.$$(`${dragNode}[data-parent=${toToken}]`);
        let finalToken=await childHandlers[childHandlers.length-1].evaluate(el=>el.getAttribute('data-token'))

        expect(finalToken).to.equal(curToken)
    })
    // it('在同一层中拖拽，层级不变改变顺序',async()=>{

    // })
    // it('拖到两个节点之间？没有这种状态')
    it('悬停在未展开节点',async()=>{
        // tip：需要至少一个目录节点
        await page.waitFor(1500);

        const dragNode='.tree-node-wrapper[draggable="true"] .tree-item',
            switchNode=`span.tree-switcher-has-icon`
            closeNode=`${dragNode} span.tree-switcher-icon-close`,
            openNode='span.tree-switcher-icon-open';
        await page.waitForSelector(closeNode)
        let closeHandlers=await page.$$(closeNode);
        let toHandler=closeHandlers[0]
        let toParentToken=await toHandler.evaluate(el=>el.parentElement.getAttribute('data-parent'));
        let toToken=await toHandler.evaluate(el=>el.parentElement.getAttribute('data-token'));
        await page.waitForSelector(`${dragNode}[data-parent="${toParentToken}"]`)
        let nextHandlers=await page.$$(`${dragNode}:not([data-token="${toToken}"])[data-parent="${toParentToken}"]`);
        let fromHandler=nextHandlers[0];

        let fromToken=await fromHandler.evaluate(el=>el.getAttribute('data-token'));
        await dragAndHover(page,`[data-token=${fromToken}]`,`[data-token=${toToken}] ${switchNode}`)
        await page.waitFor(2500)
        await page.waitForSelector(`${dragNode}[data-token=${toToken}]`)
        toHandler=await page.$(`${dragNode}[data-token=${toToken}] ${switchNode}`)
        let toHandlerClass=await toHandler.evaluate(el=>el.getAttribute('class'));
        await page.waitForSelector(`${dragNode}[data-token=${toToken}] ${openNode}`)
    })
})

async function getElementHandler(page,selector,text,isApprox){
    const elementHandlers=await page.$$(selector);
    for(let i=0;i<elementHandlers.length;i++){
        const innerText=await elementHandlers[i].evaluate(el=>el.textContent);
        if(isApprox&&innerText&&innerText.includes(text)){
            //近似匹配
            console.log('approx match')
            return elementHandlers[i]
        }
        if(!isApprox&&innerText&&innerText===text){
            console.log('accurate match')
            return elementHandlers[i]
        }
    }
}

async function dragAndDrop(page,sourceSelector,targetSelector){
    await page.evaluate((sourceSelector, targetSelector) => {
        let event;
        const source = document.querySelector(sourceSelector);
    
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('mousedown', true, true, null);
        event.clientX = source.getBoundingClientRect().left;
        event.clientY = source.getBoundingClientRect().top+10;
        source.dispatchEvent(event);
    
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('dragstart', true, true, null);
        event.clientX = source.getBoundingClientRect().left;
        event.clientY = source.getBoundingClientRect().top+10;
        source.dispatchEvent(event);
    
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('drag', true, true, null);
        event.clientX = source.getBoundingClientRect().left;
        event.clientY = source.getBoundingClientRect().top+10;
        source.dispatchEvent(event);
    
        const target = document.querySelector(targetSelector);
    
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('dragover', true, true, null);
        event.clientX = target.getBoundingClientRect().left+5;
        event.clientY = target.getBoundingClientRect().top+5;
        target.dispatchEvent(event);

        event = document.createEvent('CustomEvent');
        event.initCustomEvent('drop', true, true, null);
        event.clientX = target.getBoundingClientRect().left+5;
        event.clientY = target.getBoundingClientRect().top+5;
        target.dispatchEvent(event);


        event = document.createEvent('CustomEvent');
        event.initCustomEvent('dragend', true, true, null);
        event.clientX = target.getBoundingClientRect().left+5;
        event.clientY = target.getBoundingClientRect().top+5;
        target.dispatchEvent(event);
    
    },sourceSelector,targetSelector)
}

async function dragAndHover(page,sourceSelector,targetSelector){
    // 对比dragAndDrop需要触发目的元素dragenter
    await page.evaluate((sourceSelector,targetSelector)=>{
        let event;
        const source = document.querySelector(sourceSelector);
    
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('mousedown', true, true, null);
        event.clientX = source.getBoundingClientRect().left;
        event.clientY = source.getBoundingClientRect().top+10;
        source.dispatchEvent(event);
    
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('dragstart', true, true, null);
        event.clientX = source.getBoundingClientRect().left;
        event.clientY = source.getBoundingClientRect().top+5;
        source.dispatchEvent(event);
    
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('drag', true, true, null);
        event.clientX = source.getBoundingClientRect().left;
        event.clientY = source.getBoundingClientRect().top+5;
        source.dispatchEvent(event);
    
        const target = document.querySelector(targetSelector);
    
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('dragover', true, true, null);
        event.clientX = target.getBoundingClientRect().left+5;
        event.clientY = target.getBoundingClientRect().top;
        target.dispatchEvent(event);

        event = document.createEvent('CustomEvent');
        event.initCustomEvent('dragenter', true, true, null);
        event.clientX = target.getBoundingClientRect().left+5;
        event.clientY = target.getBoundingClientRect().top;
        target.dispatchEvent(event);

        // event = document.createEvent('CustomEvent');
        // event.initCustomEvent('dragend', true, true, null);
        // event.clientX = target.getBoundingClientRect().left+5;
        // event.clientY = target.getBoundingClientRect().top;
        // target.dispatchEvent(event);



    },sourceSelector,targetSelector)
}