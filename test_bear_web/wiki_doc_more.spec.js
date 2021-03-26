// wiki详情页
// “新版wiki页面”用例，doc内容hover右上角
const {envCfg}=global;
const {wiki,homeUrl,mochaTestRetryTimes}=envCfg;
const {cratePage, createPage}=require('../utils');
const expect=require('chai').expect;

const more='button[data-selector="more-menu"]',
    morePopMenu='ul[data-sel="spark-menu"]',
    morePopMenuItem='li[data-sel="spark-menu-item"]',
    dialogTitle='div[data-sel="spark-dialog-title"]',
    dialogClose='span[data-sel="spark-dialog-close"]'

describe('wiki详情页：doc右上角...',function(){
    const timeout=global.envCfg.timeout;
    let page;
    this.timeout(timeout)
    this.retries(mochaTestRetryTimes);
    
    before(async()=>{
        page=await createPage(1392,877);
        const wikiTestBase='.wiki-home-wiki-main h3',//wiki首页知识库
            testBaseKeyword='WIKI前端测试';//wiki首页测试知识库名
        await page.goto(wiki);
        await page.waitFor(3000)
        await page.waitForSelector(wikiTestBase)
        let testBaseHandler=await getElementHandler(page,wikiTestBase,testBaseKeyword,true)
        await Promise.all([page.waitForNavigation(),await testBaseHandler.click()]);
        
    },timeout);
    after(async()=>{
        await page.close()
    })
    beforeEach(async ()=>{
        // hover到doc右上角
        await page.waitForSelector(more);
        await page.hover(more);
        await page.waitForSelector(morePopMenu);
    })
    // it('doc搜索替换',async()=>{
    //     const searchBox='.docs-find-replace-box__dom-wrapper',
    //         searchBoxClose='.find-replace-box__close-button';
        
    //     let searchHandler=await getElementHandler(page,`${morePopMenu} ${morePopMenuItem} span`,'查找');
    //     await searchHandler.click();
    //     await page.waitFor(500)
    //     await page.waitForSelector(searchBox)
    //     await page.waitForSelector(searchBoxClose)
    //     await page.click(searchBoxClose)
    //     await page.waitFor(500)
    //     searchHandler=await getElementHandler(page,`${morePopMenu} ${morePopMenuItem} span`,'查找');
    //     expect(searchHandler).to.not.exist;
    // })
    // it('doc添加删除快捷方式',async()=>{
    //     await visitBoolHandler(page,`${morePopMenu} ${morePopMenuItem} span`,['从快速访问移除','添加至快速访问']);
    // })
    // it('doc添加取消收藏',async()=>{
    //     await visitBoolHandler(page,`${morePopMenu} ${morePopMenuItem} span`,['从收藏移除','添加至收藏']);
    // })
    
    // it('doc 文档信息',async()=>{
    //     await page.waitFor(500)
    //     let itemContent='文档信息'
    //     let itemHandler=await getElementHandler(page,`${morePopMenu} div ${morePopMenuItem} span`,itemContent);
    //     expect(itemHandler).to.exist;
    //     await itemHandler.click()
    //     await page.waitFor(1000);
    //     await page.waitForSelector(dialogTitle)
    //     let dialogTitleHandler=await page.$(dialogTitle)
    //     let dialogTitleContent=await dialogTitleHandler.evaluate(el=>el.textContent);
    //     expect(dialogTitleContent).to.equal(itemContent);
    //     await page.waitForSelector(dialogClose)
    //     await page.click(dialogClose);
    //     await page.waitFor(500);
    //     dialogTitleHandler=await getElementHandler(page,dialogTitle,itemContent)
    //     expect(dialogTitleHandler).to.not.exist;
    // })
    // it('doc 创建副本',async()=>{
    //     await page.waitFor(500)
    //     let itemContent='文档信息'
    //     let itemHandler=await getElementHandler(page,`${morePopMenu} div ${morePopMenuItem} span`,itemContent);
    //     expect(itemHandler).to.exist;
    //     await itemHandler.click()
    //     await page.waitFor(1000);
    //     await page.waitForSelector(dialogTitle)
    //     let dialogTitleHandler=await page.$(dialogTitle)
    //     let dialogTitleContent=await dialogTitleHandler.evaluate(el=>el.textContent);
    //     expect(dialogTitleContent).to.equal(itemContent);
    //     await page.waitForSelector(dialogClose)
    //     await page.click(dialogClose);
    //     await page.waitFor(500);
    //     dialogTitleHandler=await getElementHandler(page,dialogTitle,itemContent)
    //     expect(dialogTitleHandler).to.not.exist;
    // })
    // it('导出',async()=>{
    //         // hover窗口
    //         // 两个pop弹窗调试

    // })
    it('显示编写者',async()=>{
            // 出现span【class]
            //  op-author-line
            // 按钮样式变化
            // li button aria-checked=true/false

        const authorSelector='span .op-author-line',
        switchSelector=`${morePopMenu} ${morePopMenuItem} `;
        // 根据description判断
        await page.waitFor(500);
        let itemHandlers=await page.$$(`${morePopMenu} ${morePopMenuItem}`);
        let curActiveHandler
        for(let i=0;i<itemHandlers.length;i++){
            let curHandler=await itemHandlers[i].$('span')
            let innerText=await curHandler.evaluate(el=>el.textContent);
            if(innerText==='显示编写者'){
                curActiveHandler=itemHandlers[i]
                break;
            }
        }
        expect(curActiveHandler).to.exist;

        let switchBtnHandler=await curActiveHandler.$('button[aria-checked="true"]');
        if(switchBtnHandler){
            await page.waitForSelector(authorSelector);
            await switchBtnHandler.click()
            await page.waitFor(500)
            expect(await curActiveHandler.$('button[aria-checked="true"]')).to.exist;
        }else{
            switchBtnHandler=await curActiveHandler.$('button[aria-checked="false"]');
            await switchBtnHandler.click()
            await page.waitFor(500)
            await page.waitForSelector(authorSelector);
        }

        // const itemHandler=await getElementHandler(page,`${morePopMenu} ${morePopMenuItem} span`,'显示编写者');
        // let parentHandler=await itemHandler.evaluate(el=>{
        //     console.log(el,112)
        //     let curElement=el.asElement();
        //     return curElement.parentElement;
        // })
        // expect(parentHandler).to.exist;
        // console.log('parentHandler',parentHandler,113)
        // let switchHandler=await parentHandler.waitForSelector('button[aria-checked="true"]');
        // if(switchHandler){
        //     await page.waitForSelector(authorSelector);
        //     await parentHandler.click();
        //     await page.waitFor(500);
        //     let authorHandler=await page.waitForSelector(authorSelector);
        //     expect(authorHandler).to.not.exist;
        // }else{
        //     let authorHandler=await page.waitForSelector(authorSelector);
        //     expect(authorHandler).to.not.exist;
        //     await parentHandler.click();
        //     await page.waitFor(500);
        //     await page.waitForSelector(authorSelector);
        // }
        // if(parentHandler)

        // await itemHandler.click();

        // await page.waitFor(500);
        // await waitFor(authorSelector)


    })
    // it('查看评论',async()=>{
    //     // 出现评论弹窗。点击空白处消失
    //     await page.waitFor(500)
    //     const history='.comment-history';
    //     // const dialogTitle=await getElementHandler(page,popTitle,'文档信息');
    //     // expect(dialogTitle).to.exist;
    // })
    // it('翻译',async()=>{
    //     // 出现已翻译为/退出翻译
    //     // await page.waitFor(500)
    //     // const history='.comment-history';
    //     // const dialogTitle=await getElementHandler(page,popTitle,'文档信息');
    //     // expect(dialogTitle).to.exist;
    // })

})

async function getElementHandler(page,selector,text,isApprox){
    // console.log('getElementHandler',129)
    const elementHandlers=await page.$$(selector);
    // console.log('selector',selector,'text',text,'len',elementHandlers.length)
    for(let i=0;i<elementHandlers.length;i++){
        const innerText=await elementHandlers[i].evaluate(el=>el.textContent);
        // console.log('i',i,'innerText',innerText);
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


async function visitBoolHandler(page,selector,texts){
    let handle_1=await getElementHandler(page,selector,texts[0]);
    let handle_2=await getElementHandler(page,selector,texts[1]);
    let isFirst;
    if(handle_1&&handle_2||!(handle_1||handle_2)) {
        // 抛出异常
        console.log('exception Error',140)
        throw new Error('visitBoolHandler')
    }
    // console.log('visitBoolHandler executed')
    if(handle_1){
        isFirst=true;
        expect(handle_2).to.not.exist;
        await handle_1.click()
    }else{
        expect(handle_1).to.not.exist;
        await handle_2.click()
    }
    await page.waitFor(500)
    handle_1=await getElementHandler(page,selector,texts[0])
    handle_2=await getElementHandler(page,selector,texts[1])
    if(isFirst){
        await expect(handle_1).to.not.exist;
        await expect(handle_2).to.exist;
    }else{
        await expect(handle_2).to.not.exist;
        await expect(handle_1).to.exist;
    }
    
}