
function upperCaseListToObj(arr) {
  const obj = {};
  arr.forEach(val => {
    const key = val.toUpperCase();
    obj[key] = val;
  });
  console.log(JSON.stringify(obj));
}

const TEA_ACTIONS = [
  'ccm_wiki_home_view', // 知识库首页
  'ccm_wiki_all_space_view', // 知识库页面
  'ccm_wiki_home_create_new_view', // wiki首页新建hover，下拉菜单出现
  'ccm_space_create_new_view', // wiki首页新建hover，下拉菜单出现
  'ccm_wiki_create_workspace_view', // 新建知识库页面
  'ccm_wiki_tree_view', // wiki页面树
  'ccm_wiki_tree_add_view', // 页面树上新增节点弹窗
  'ccm_wiki_tree_more_view', // 页面树上更多操作弹窗
  'ccm_wiki_trash_view', // 只是空间回收站页面
  'ccm_wiki_trash_restore_view', // 知识库回收站恢复页面
  'ccm_wiki_basic_settings_view', // 知识空间基础信息设置页面
  'ccm_wiki_member_settings_view', // 知识空间成员管理设置页面
  'ccm_wiki_permission_settings_view', // 知识空间权限与安全设置页面

  'ccm_wiki_space_list_view', // wiki知识库列表
  'ccm_wiki_permission_change_view', // wiki权限变更页面
  'ccm_wiki_cover_setting_view', // wiki知识库设置封面页面
  'ccm_wiki_add_member_view', // wiki添加成员页面
];

const TEA_ACTIONS_CLICK = [
  'ccm_wiki_cover_setting_click', // wiki知识库设置封面页面发生动作事件
  'ccm_wiki_home_create_new_click', // wiki首页新建页面内发生动作事件
  'ccm_wiki_space_create_new_click', // 文档内右上角“+”点击后出现的列表页面上的点击
  'ccm_wiki_tree_add_click', // 页面树上新建节点页面发生动作事件
  'ccm_wiki_tree_more_click', // 页面树上更多操作页面发生动作事件
  'ccm_wiki_space_list_click', // wiki知识库列表发生动作事件
];
upperCaseListToObj(TEA_ACTIONS_CLICK);
