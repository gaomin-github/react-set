上线常见问题手收集：
1）https://code.byted.org/ee/bear-web/-/jobs/15965325

2）https://code.byted.org/ee/bear-web/-/jobs/16051249

3）https://code.byted.org/ee/bear-web/-/jobs/16104969

4）https://code.byted.org/ee/bear-web/-/jobs/16148220
初步原因：导入的源文件是固定的。第一次导入后没有删除成功；二次导入key重复

5）https://code.byted.org/ee/bear-web/-/jobs/16246126

6)https://code.byted.org/ee/bear-web/-/jobs/16308382
问题：'#innerdocbody'找不到
原因：doc变更操作流程

search下拉加载更多：使用mock数据
addition:hover不展示收藏。
原因：已收藏的元素，先点击取消收藏；鼠标需要移出去再移动回来，才能再触发hover
解决：点击取消收藏后，mouse.move(0,0)

7）https://code.byted.org/ee/bear-web/-/jobs/16315603
报错：wik/wiki_details/tree/tree.spec.js 移动文件
原因：移动的节点是子节点，未展开，没有加载到
解决方案：定位到移动节点

8)https://code.byted.org/ee/bear-web/-/jobs/16315603
挂载已有文档
    err: TypeError: operationPopup.$ is not a function
    at Object.linkDoc (test/wiki/utils/helper/treeHelper.js:107:40)
    at async Context.<anonymous> (test/wiki/wiki_details/tree/tree.spec.js:75:7)

    4-29集中报错

/Users/bytedance/pj/e2e/bear-web/test/wiki/permission/diy_permission.spec.js
*本地复现
/Users/bytedance/pj/e2e/bear-web/test/wiki/doc_integrate_wiki/add-to-wiki.spec.js
/Users/bytedance/pj/e2e/bear-web/test/wiki/wiki_details/additional.spec.js
*本地复现
/Users/bytedance/pj/e2e/bear-web/test/wiki/wiki_details/edit.spec.js

*问题：1.0首页做了改版（1.0回根据开关显示这个和旧的，2.0之前产品说显示旧的）
/Users/bytedance/pj/e2e/bear-web/test/wiki/wiki_home/banner.spec.js

/Users/bytedance/pj/e2e/bear-web/test/wiki/wiki_space_home/search.spec.js
/Users/bytedance/pj/e2e/bear-web/test/wiki/wiki_details/primary_paths.spec.js
/Users/bytedance/pj/e2e/bear-web/test/wiki/wiki_details/favorites.spec.js
/Users/bytedance/pj/e2e/bear-web/test/wiki/wiki_space_setting/member.spec.js

4-29集中报错2
/Users/bytedance/pj/e2e/bear-web-e2e/test/wiki/wiki_details/additional.spec.js
/Users/bytedance/pj/e2e/bear-web-e2e/test/wiki/doc_integrate_wiki/add-to-wiki.spec.js
/Users/bytedance/pj/e2e/bear-web-e2e/test/wiki/wiki_details/edit.spec.js
/Users/bytedance/pj/e2e/bear-web-e2e/test/wiki/wiki_details/tree/tree.spec.js