// wiki详情页树拖拽
const {envCfg}=global;
const {wiki,homeUrl,mochaTestRetryTimes}=envCfg;
const {createPage}=require('../utils');
const expect=require('chai').expect;
describe('wiki详情页：doc右上角...',function(){
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
    // 从最后一个一级树节点开始操作，该一级节点需要有子节点
    it('拖拽到某节点上方',async ()=>{

        const root='.wiki-tree-drag li ul',
            from=`${root} li:nth-child(2)`,
            to=`${root} li:nth-child(1)`,
            cur=`${from} ul li:nth-child(1)`;
        // 预期：成为该节点最后一个子节点
        await page.waitFor(from)
        let fromHandler=await page.$(from);
        let fromIsOpen=await fromHandler.$('ul');
        if(!fromIsOpen){
            let switchBtn=await fromHandler.$('.ant-tree-switcher')
            await switchBtn.click();
            await page.waitFor(500)
            expect(await fromHandler.$('.ant-tree-switcher')).to.exist;
        }
        // console.log('节点展开')

        await page.waitForSelector(cur);
        let curHandler=await page.$(cur);
        let curBox=await curHandler.boundingBox()
        let curToken=await curHandler.evaluate((el)=>{
            return el.getAttribute('data-token');
        })
        console.log('curToken',curToken)
        

        await curHandler.click()
        await page.mouse.move(curBox.x+curBox.width/2,curBox.y+curBox.height/2)
        await page.waitFor(1000);
        await page.screenshot({
            path:`1.png`,
            fullPage:true
        })   
        let toHandler=await page.$(to);
        let toBox=await toHandler.boundingBox();
        // await curHandler.click()
        await page.mouse.down()
        await page.mouse.move(toBox.x+toBox.width/2,toBox.y+toBox.height/2);
        await page.waitFor(1500);

        await page.mouse.up();
        await page.waitFor(3000);
        await page.screenshot({
            path:`2.png`,
            fullPage:true
        })   


        // 拖拽挪动
        // await page.mouse.down()
        // await page.mouse.move(toBox.x+toBox.width/2,toBox.y+toBox.height/2);
        // await page.screenshot({
        //     path:`2.png`,
        //     fullPage:true
        // })   
        // await page.mouse.up();
        // await page.waitFor(2000)
        // let toToken=await toHandler.evaluate(el=>el.getAttribute('data-token'));
        await page.waitForSelector(`${to} ul`);

        // console.log('toToken',toToken)
        // console.log('toBox',toBox.x,toBox.y,toBox.width,toBox.height)
        // console.log('curBox',curBox.x,curBox.y,curBox.width,curBox.height)

        // let expectHandler=await toHandler.$(`ul li:nth-last-child(1)"]`)
        // let finalToken=await expectHandler.evaluate(el=>el.getAttribute('data-token'))
        // expect(finalToken).to.equal(curToken)
        // expect(await toHandler.$(`ul .li:[data-token="${curToken}"]`)).to.exist;


            // 选中最后一个一级节点

            // 确保一级节点展开
            // 选中最后一个子节点
            // 拖拽到第一个一级树节点
            // 判断目的节点是否展开；是否能找到新节点
            

        // let curEl=await page.$('当前节点');
        // let curElBox=await curEl.boundingBox();

        // await page.mouse.move(curElBox.x+curElBox.x/2,curElBox.y+curElBox.height/2);
        // await page.mouse.down();
        // await page.mouse.move(10,20);
        // await page.mouse.up()

    })
    it('拖拽到两个节点之间',async()=>{

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