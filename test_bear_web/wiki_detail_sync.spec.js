const { envCfg } = global;
const { wikiSpaces, mochaTestRetryTimes } = envCfg;
// const selector = require('../selector');
// const { showMouseHelper } = require('../../utils/showMouse');
const { createPage } = require('../utils');
// const { treeHelper, homeHelper, dialogHelper, domHelper } = require('../../utils/helper');

const expect = require('chai').expect;

describe('wiki详情页sync测试',function(){
    const timeout = global.envCfg.timeout;
  let page,pageB;
  this.timeout(timeout);
  this.retries(mochaTestRetryTimes);

  before(async () => {
    page = await createPage(1392, 877);
    pageB=await createPage(1392, 877);
    // await showMouseHelper(page);
  }, timeout);
  after(async () => {
    await page.close();
    await pageB.close()
  });
  it('进入wiki详情页',async()=>{
      await pageB.goto('http://localhost:3001/wiki/wikcndkpsxT9P1MucqmButjxhfe')
      await page.goto('http://localhost:3001/wiki/wikcndkpsxT9P1MucqmButjxhfe')

  })
//   it('修改当前文档标题测试',async()=>{
//       await page.waitFor(3000)
//       const titleSelector='#innerdocbodyWrap span.op-symbol span',
//         titleBoxSelector='div[data-title-placeholder="请输入标题"]',
//         newTitleStr=`测试标题:${Math.random()}`;
//       await page.waitForSelector(titleSelector)
//       let titleEl=await page.$(titleSelector);
//       await page.focus(titleSelector)
//       await titleEl.click({clickCount:3});
//       await page.keyboard.press('Backspace');
//       let titleBox=await page.$(titleBoxSelector)
//       await titleBox.click()
//       await page.keyboard.type(newTitleStr)
//       await page.waitFor(5000)
//       titleEl=await page.$(titleSelector);
//       let newTitle=await titleEl.evaluate(el=>el.textContent)
//       expect(newTitle).to.equal(newTitleStr)
//   })

  it('修改当前文档标题',async()=>{
    const titleSelector='#innerdocbodyWrap span.op-symbol span',
    titleBoxSelector='div[data-title-placeholder="请输入标题"]',
    newTitleStr=`测试标题:${Math.random()}`;
    // b页面活跃
    await pageB.bringToFront();
    await pageB.waitForSelector(titleSelector)
    let titleElB=await pageB.$(titleSelector);
    const oldTitleFromB=await titleElB.evaluate(el=>el.textContent);
     console.log('oldTitleFromB',oldTitleFromB)
      console.log('execute in page--------')

    // a页面活跃
     await page.bringToFront();
     await page.waitForSelector(titleSelector)
      let titleEl=await page.$(titleSelector);
      await titleEl.click();
      await page.waitFor(1000)
      await titleEl.click({clickCount:3})
      await page.keyboard.press('Backspace');
      let titleBox=await page.$(titleBoxSelector)
      await titleBox.click()
      await page.keyboard.type(newTitleStr)
      await page.waitFor(5000)

          // b页面活跃
      await pageB.bringToFront();
      await pageB.waitForSelector(titleSelector)
      titleElB=await pageB.$(titleSelector)
    const newTitleFromB=await titleElB.evaluate(el=>el.textContent)
    expect(newTitleFromB).to.not.equal(oldTitleFromB)
    expect(newTitleFromB).to.equal(newTitleStr)
})


})