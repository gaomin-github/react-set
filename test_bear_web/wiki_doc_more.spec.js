// wiki详情页
// “新版wiki页面”用例，doc内容hover右上角
const {envCfg}=global;
const {wiki,homeUrl,mochaTestRetryTimes}=envCfg;
const {cratePage, createPage}=require('../utils');
const expect=require('chai').expect;

describe('wiki详情页：doc右上角...',async()=>{
    const timeout=global.envCfg.timeout;
    let page;
    this.timeout(timeout)
    this.retries(mochaTestRetryTimes);

    before(async()=>{
        page=await createPage(1392,877);
        // await showMouseHelper(page);
    },timeout);
    after(async()=>{
        await page.close()
    })
    it('wiki详情页',async()=>{
        const wikiTestBase='wiki测试知识库';
        await page.goto(wiki);
        await page.waitForSelector('wiki测试知识库')
        await Promise([page.waitForNavigation(),await page.click('wiki测试知识库')]);
    })
    it('hover到doc右上角',async()=>{
        const more='.more-menu',
        morePopMenu='ul[data-sel="spark-menu"]',
        morePopMenuItem='li[data-sel="spark-menu-item"]',
        

        ;
        await page.hover(more);
        await page.waitForSelector(morePopMenu);
        
        // 判断弹窗出现

        // 判断快速访问添加移除

        // 收藏/取消收藏

        //文档信息弹窗
        // data-sel="spark-dialog-title" text="文档信息"

    })
    it('doc搜索替换',async()=>{
        const searchBox='.docs-find-replace-box__dom-wrapper',
        searchBoxClose='.find-replace-box__close-button';
        let searchHandler=await getElementHandler(page,`${morePopMenu} ${morePopMenuItem} span`,'查找');
        searchHandler.click();
        await page.waitFor(500)
        await page.waitForSelector(searchBox)
        await page.waitForSelector(searchBoxClose)
        await page.click(searchBoxClose)
        let searchHandler=await getElementHandler(page,`${morePopMenu} ${morePopMenuItem} span`,'查找');
        expect(searchHandler).to.not.exist;
    })
    it('doc添加删除快捷方式，添加取消收藏',async()=>{
        // const 
        await visitBoolHandler(page,`${morePopMenu} ${morePopMenuItem} span`,['从快速访问移除','添加至快速访问']);
        await visitBoolHandler(page,`${morePopMenu} ${morePopMenuItem} span`,['从收藏移除','添加至收藏']);
    })
    it('doc文档信息',async()=>{

        await page.waitFor(500)
        const popTitle='div [data-sel]=spark-dialog-title';
        const dialogTitle=await getElementHandler(page,popTitle,'文档信息');
        expect(dialogTitle).to.exist;
    })
    it('查看评论',async()=>{
        await page.waitFor(500)
        const history='.comment-history';
        // const dialogTitle=await getElementHandler(page,popTitle,'文档信息');
        // expect(dialogTitle).to.exist;
    })
    it('翻译',async()=>{
        // 出现已翻译为/退出翻译
        // await page.waitFor(500)
        // const history='.comment-history';
        // const dialogTitle=await getElementHandler(page,popTitle,'文档信息');
        // expect(dialogTitle).to.exist;
    })

})

async function getElementHandler(page,selector,text){
    const elementHandlers=await page.$$(selector);
    for(let i=0;i<elementHandlers.length;i++){
        const innerText=await elementHandlers[i].evaluate(el=>el.textContent)
        if(innerText===text){
            return elementHandlers[i]
        }
    }
    return null;
}
// ???有问题，需修改
async function visitBoolHandler(page,selector,texts){
    let handle_1=await getElementHandler(page,selector,texts[0]);
    let handle_2=await getElementHandler(page,selector,texts[1]);
    let curText,nextText;
    if(handle_1&&handle_2) {
        // 抛出异常
        throw new Error('visitBoolHandler')
    }
    if(handle_1){
        curText=texts[0];
        nextText=texts[1];
    }else{
        curText=texts[1];
        nextText=texts[0];
    }
    let curHandler=await getElementHandler(page,selector,curText);
    curHandler.click();
    curHandler=await getElementHandler(page,selector,curText);
    expect(curHandler).to.not.exist;
    curHandler=await getElementHandler(page,selector,nextText);
    expect(curHandler).to.exist;
    curHandler.click();
    let tmp=curText;
    curText=nextText,nextText=tmp;
    curHandler=await getElementHandler(page,selector,curText);
    expect(curHandler).to.not.exist;
    curHandler=await getElementHandler(page,selector,nextText);
    expect(curHandler).to.exist;
}