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