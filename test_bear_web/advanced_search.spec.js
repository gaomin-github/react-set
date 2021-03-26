// wiki首页高级搜索
const {envCfg}=global;
const {wiki,homeUrl,mochaTestRetryTimes}=envCfg;
const {cratePage, createPage}=require('../utils');
const expect=require('chai').expect;

const S={
    s_entry:'.search-box-advanced-search-btn',//高级搜索按钮
    s_nav:'advanced-search-tab-list',//高级搜索弹窗关键字分类
    s_result:'advanced-search-result-list',//搜索结果
}

describe('wiki知识库首页：高级搜索用例',function(){
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
    it('进入wiki首页',async()=>{
        // await page.goto(wiki)
        //本地项目wiki首页无高级搜索，boe和线上有
        await page.goto(homeUrl)
    })
    it('点击按钮打开高级搜索弹窗',async()=>{
        const entry='.search-box-advanced-search-btn',
            nav='.advanced-search-tab-list';
        await page.waitForSelector(entry);
        await page.click(entry);
        await page.waitFor(1000);
        await page.waitForSelector(nav);
    })
    it('快捷键打开或关闭高级搜索',async()=>{

    })
    
    it('高级搜索弹窗：名字，文件夹名称，会话名称过滤',async()=>{
        // 过滤面板
        const input='.advanced-search__content-filters',
            inputResult='.lightweight-search-input__search-result-container.visible',

            inputClear='span[data-sel="spark-textfield-suffix"]';
        // 修改为不按照index而是按照关键字？再添加checkbox，radio类型
        for(let i=0;i<3;i++){
            const inputSelector=`${input} div:nth-child(${i+1}) input[type="text"]`;
            await page.waitForSelector(inputSelector)
            await page.focus(inputSelector);
            await page.keyboard.type(inputSelector,'z');
            await page.waitFor(1000);
            await page.waitForSelector(inputResult)
            await page.waitForSelector(inputClear)
            await page.click(inputClear);
            let inputResultHandler=await page.$(inputResult)
            await expect(inputResultHandler).to.not.exist;
        }

    })

})
