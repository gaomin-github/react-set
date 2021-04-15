
import {createSelector} from 'reselect';
import { selectBackUrl } from 'business/common/services/nav-back-url-redux/selector';
import { selectCurrentUser } from 'business/common/services/current-user-redux/selector';
import { selectCurrentSuiteByObjToken } from 'business/common/modules/suite/selectors';
import {
  selectAppconfigFavoritesHidden,
  selectAppconfigWikiHidden,
} from '$selectors/leanMode';

export const SidebarHeader_com=createSelector(()=>null,()=>null);
export const DropdownNavMenu_com=createSelector(SidebarHeader_com,selectBackUrl,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden,(selectBackUrl,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden)=>({selectBackUrl,selectCurrentUser,selectCurrentSuiteByObjToken,selectAppconfigFavoritesHidden,selectAppconfigWikiHidden}))


import { selectRecentObjTokensInBackNav } from '$selectors/explorer';
import { selectRecentWikiInBackNav } from 'business/explorer/wiki-space-container/redux/selectors/space';
export const ReturnMenu_com=createSelector(DropdownNavMenu_com,selectRecentObjTokensInBackNav,selectRecentWikiInBackNav,(selectRecentObjTokensInBackNav,selectRecentWikiInBackNav)=>({selectRecentObjTokensInBackNav,selectRecentWikiInBackNav}))


import { selectFetchStatus } from '$selectors/common';
export const BackNavRecentWikiList_com=createSelector(ReturnMenu_com,selectFetchStatus,selectRecentWikiInBackNav,(selectFetchStatus,selectRecentWikiInBackNav)=>({selectFetchStatus,selectRecentWikiInBackNav}))


export const BackNavCommonRencentList_com=createSelector(BackNavRecentWikiList_com,()=>{})

export const InfiniteScroll_com=createSelector(BackNavCommonRencentList_com,()=>{})
export const CommonRecentObjectItem_com=createSelector(InfiniteScroll_com,()=>{})


import { selectAsyncError } from 'business/common/services/common-redux/selector';
import { selectSpaces, selectHasSpaceInfo } from 'src/business/wiki/redux/selectors';
import { selectUserGuide } from 'business/common/services/guide-redux/selector';
export const SidebarLogo_com=createSelector(SidebarHeader_com,selectAsyncError,selectSpaces,selectHasSpaceInfo,selectFetchStatus,selectUserGuide,(selectAsyncError,selectSpaces,selectHasSpaceInfo,selectFetchStatus,selectUserGuide)=>({selectAsyncError,selectSpaces,selectHasSpaceInfo,selectFetchStatus,selectUserGuide}))

export const Logo_com=createSelector(SidebarLogo_com,()=>{})
export const WikiEntrance=createSelector(Logo_com,()=>{})
export const BranchMenuHoc=createSelector(Logo_com,()=>{})
export const WikiLogo_com=createSelector(Logo_com,()=>{})


import { selectCurrentWikiSpaceId } from 'src/business/wiki/redux/selectors';
export const SwitchSpace_com=createSelector(SidebarHeader_com,selectCurrentWikiSpaceId, selectSpaces, selectHasSpaceInfo,(selectCurrentWikiSpaceId, selectSpaces, selectHasSpaceInfo)=>({selectCurrentWikiSpaceId, selectSpaces, selectHasSpaceInfo}))

export const MenuItem_com=createSelector(SwitchSpace_com,()=>null);
export const Menu_com=createSelector(SwitchSpace_com,()=>null);
export const DownIcon_com=createSelector(SwitchSpace_com,()=>null);
