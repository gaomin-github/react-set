await page.setRequestInterception(true);
    page.on('request',async requestObj=>{
      const url=requestObj.url();
      if(url.includes('wiki/search/get_recent')){
        // 最近浏览
        const offset=getSearchFromUrlString(url,'offset');
        const response={
          code:0,
          msg:'Success',
          data:{
            wiki_browses:[
              {
                edit_name: `BearWeb E2E ${offset}`,
                edit_time: 1617020089,
                edit_uid: '6847336307744587777',
                obj_token: `${offset}`,
                obj_type: 2,
                open_count: 46,
                open_time: 1619095950,
                owner_id: '6847336307744587777',
                owner_name: 'BearWeb E2E 测试账号',
                space_id: '6849233832453914626',
                title: '0328-123',
                url: 'https://zhpqwx60p6.feishu.cn/space/wiki/wikcnSEWKT7Z8IVZ85DQYBKFMJg',
                wiki_id: `${offset}`,
                wiki_token: `${offset}`,
              },
            ],
          },
        };
        await requestObj.respond(response);
        return;
      }
      await requestObj.continue();
    });