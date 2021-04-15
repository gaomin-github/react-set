import {createSelector} from 'reselect';

import { selectAsyncError } from 'business/common/services/common-redux/selector';
import { selectCurrentSuitePermissionInfo } from '$selectors/share';
import {
    selectNodeMap,
    selectCurrentWikiSpaceId,
    selectCurrentBaseWikiInfo,
    selectRenameNode,
    selectExpandedKeys,
    selectCurrentWikiToken,
    selectIsSpaceSettingVisible,
    selectCanEditSpaceNode,
    selectLoadingKeys,
    selectSettingEditable,
    selectDefaultAreaId,
    selectIsFetchingPageTree,
    selectMemberProp,
    selectHasSpaceInfo,
    selectSingleTreeRootNode,
    selectPermRequestConfig,
    selectRootNode,
  } from 'src/business/wiki/redux/selectors';
  
 const PageTree_com_overall=createSelector(selectAsyncError,
    selectCurrentSuitePermissionInfo,
    selectNodeMap,
    selectCurrentWikiSpaceId,
    selectCurrentBaseWikiInfo,
    selectRenameNode,
    selectExpandedKeys,
    selectCurrentWikiToken,
    selectIsSpaceSettingVisible,
    selectCanEditSpaceNode,
    selectLoadingKeys,
    selectSettingEditable,
    data=>data);

export const PageTree_com=createSelector(
    PageTree_com_overall,
    selectDefaultAreaId,
    selectIsFetchingPageTree,
    selectMemberProp,
    selectHasSpaceInfo,
    selectSingleTreeRootNode,
    selectPermRequestConfig,
    selectRootNode,
)


import { selectFetchStatus } from '$selectors/common';
import { makeSelectIsGuideDone } from 'business/common/services/guide-redux/selector';
import {
  selectCurrentSpaceInfo,
  selectIsSidebarVisible,
  selectIsSubMenuAddShow,
} from 'src/business/wiki/redux/selectors';

export const HomeNode_com=createSelector(
    selectFetchStatus,
    makeSelectIsGuideDone,
    selectCurrentSpaceInfo,
    selectCurrentWikiToken,
    selectCanEditSpaceNode,
    selectRootNode,
    selectIsSidebarVisible,
    selectIsSubMenuAddShow,
    data=>data
)



