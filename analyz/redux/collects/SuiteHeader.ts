import {createSelector} from 'reselect';
import { NUM_SUITE_TYPE } from '$constants/common';
import { isBytedanceUser } from '$helpers/userHelper';
import { isVersionThreeFolder } from 'business/common/helpers/commonFileHelper';


import { selectCurrentPermission, selectCurrentSuiteOtherPermissions } from '$selectors/share';
import { selectCurrentSuiteByObjToken, selectCurrentUrlType } from 'business/common/modules/suite/selectors';
import { toggleNavBarSelector } from 'business/sheet/redux/selectors/sheet-external';
import { getFeatureConfigSelector } from 'business/common/services/opendoc-redux/selector';
// src/pc/components/suite-header/SuiteHeader.tsx
export const WikiSuiteNavbar_com=createSelector(
    selectCurrentPermission, 
    selectCurrentSuiteOtherPermissions,
    selectCurrentSuiteByObjToken, 
    selectCurrentUrlType,
    toggleNavBarSelector,
    getFeatureConfigSelector,
    data=>data
)

import { ifhaveCommentPermission } from '$selectors/share';
import {selectCommentHistory,} from '$selectors/comment';

export const CommentHistory_com=createSelector(
    WikiSuiteNavbar_com,
    ifhaveCommentPermission,
    selectCommentHistory,
    selectCurrentSuiteToken,
    selectCurrentSuiteType,
    data=>data
)

import {
    selectIsAdvanceSearchByGlobalSearchEnable,
    selectIsSearchIconTooltipShown,
  } from '$common/redux/selectors/search';
  import { selectCurrentDriveFileInfo } from 'business/common/services/boxCommon/selector';
  import {
    selectFetchStatus,
    selectIsSpecifiedStatusAllLoaded,
    selectIsSpecifiedStatusAllSuccessLoaded,
  } from '$selectors/common';
  import { selectIsRouterLocationInitial, selectAsyncError } from 'business/common/services/common-redux/selector';
  import { selectCurrentMembersWithoutSelf } from 'business/common/services/member-redux/selector';
  import {  selectIsPermissionForbidden } from '$selectors/share';
  import {
    selectCurrentSuiteToken,
    selectCurrentSuiteType,
  } from 'business/common/modules/suite/selectors';
  import { selectIsCurrentUserToCUser, selectCurrentUser } from 'business/common/services/current-user-redux/selector';
  import { selectUserGuide, selectCreateGuideUser } from 'business/common/services/guide-redux/selector';
  import { selectAppconfigFavoritesHidden, selectAppconfigWikiHidden } from '$selectors/leanMode';
  import { currentViewSelector } from '$mind-note/common/redux/selectors';
  import {
    selectCurrentSpaceInfo,
  } from 'src/business/wiki/redux/selectors/space';
  
  import {
    selectIsSpaceSettingVisible,
  } from 'src/business/wiki/redux/selectors/ui';
  
  import {
    selectIsWikiSpaceInfoReadable,
    selectSettingEditable,
    selectEditable,
  } from 'src/business/wiki/redux/selectors/permission';
  
  import {
    selectCurrentWikiToken,
  } from 'src/business/wiki/redux/selectors/current';
  

  const selectCreateRedDot = createSelector(selectCurrentUrlType, selectCreateGuideUser, (urlType, createGuideUser) => {
    const isDoc = urlType === NUM_SUITE_TYPE.DOC;
    const { createFileNum, viewOthersFileNum } = createGuideUser;
    // 显示引导的条件：
    // 1. 当前文档为Doc文档
    // 2. 当前用户新建文档数为0
    // 3. 当前用户查看第一篇他人文档
    // 4. 当前用户为外部租户
    return isDoc && createFileNum === 0 && viewOthersFileNum >= 0 && !isBytedanceUser;
  });

const SuiteHeader_com_overall=createSelector(
    selectIsAdvanceSearchByGlobalSearchEnable,
  selectIsSearchIconTooltipShown,
  selectCurrentDriveFileInfo,
  selectFetchStatus,
  selectIsSpecifiedStatusAllLoaded,
  selectIsSpecifiedStatusAllSuccessLoaded,
  selectIsRouterLocationInitial, 
  selectAsyncError,
  selectCurrentMembersWithoutSelf,
  selectCurrentPermission, 
  selectIsPermissionForbidden,
  selectCurrentSuiteByObjToken,
  data=>data,
)
const SuiteHeader_com_overall_2=createSelector(
    selectCurrentSuiteToken,
    selectCurrentSuiteType,
    selectCurrentUrlType,
    selectIsCurrentUserToCUser, 
    selectCurrentUser,
    selectUserGuide, 
    selectCreateGuideUser,
    selectAppconfigFavoritesHidden, 
    selectAppconfigWikiHidden,
    currentViewSelector,
    selectCurrentSpaceInfo,
    selectIsSpaceSettingVisible,
    data=>data
)

export const SuiteHeader_com=createSelector(
    WikiSuiteNavbar_com,
    SuiteHeader_com_overall,
    SuiteHeader_com_overall_2,
    selectIsWikiSpaceInfoReadable,
    selectSettingEditable,
    selectEditable,
    selectCurrentWikiToken,
    selectCreateRedDot
)

import { selectFileEntities } from 'business/common/services/entity/selector';
import { selectTrClicked } from '$business/explorer/common/services/space-redux/base/selectors';
import {
  selectAppconfigFolderHidden,
} from '$selectors/leanMode';
import {
  selectCurrentSuiteOwner,
  selectSuiteWikiInfo,
  selectCurrentWikiEntity,
} from 'business/common/modules/suite/selectors';
import { selectIsSubscribe, selectEditableSpaceList } from 'src/business/wiki/redux/selectors';
import { selectBackUrl } from 'business/common/services/nav-back-url-redux/selector';
import { selectHasSuitePath } from '$selectors/composed/paths';
import { selectTranslate } from '$selectors/translate';
import {
  selectIsPDFPreviewOn,
  selectFindFunctionIsAvailable,
  selectIsInEditMode,
  selectIsWPSOn,
  selectFileActivityHistoryItems,
} from 'business/common/services/boxCommon/selector';
import { selectCurrentBaseWikiInfo } from 'src/business/wiki/redux/selectors';
import { selectTranslateSameLang, selectTranslateTargetLang } from '$common/redux/selectors/translate';




import { ifhaveEditPermission } from '$selectors/share';

export const SuiteIcon_com=createSelector(SuiteHeader_com,ifhaveEditPermission,data=>data)


import {
    selectSpaces,
    selectHasSpaceInfo,
    selectRole,
    selectIsSidebarVisible,
    selectIsNeedPermissionRequest,
    selectIsMemberInCurrentSpace,
  } from 'src/business/wiki/redux/selectors';
  import { selectIsContentInFullScreen } from 'src/business/wiki/redux/selectors/composed';
  import { selectCurrentSuitePermissionInfo } from 'src/common/redux/selectors/share';
  const selectHasCurrentSuitePerm = createSelector(
    selectCurrentSuitePermissionInfo,
    selectAsyncError('currentSuite'),
    (currentSuitePermssionInfo, currentSuiteError) => {
      if (currentSuitePermssionInfo) {
        return !currentSuiteError;
      } else {
        return undefined;
      }
    },
  );
  
  // 是否在主区域展示权限申请组件且不出现侧边栏
  const selectIsPermRequestDisplayInMainContentArea = createSelector(
    selectHasCurrentSuitePerm,
    selectIsNeedPermissionRequest,
    selectIsMemberInCurrentSpace,
    (hasCurrentSuitePerm, isNeedPermReq, isMember) => {
      return hasCurrentSuitePerm === false && isNeedPermReq && !isMember;
    },
  );
  
  const selectIsSidebarDisappear = createSelector(
    selectIsContentInFullScreen,
    selectIsPermRequestDisplayInMainContentArea,
    (isContentInFullScreen: boolean, isPermRequestFullScreen: boolean) => {
      return isContentInFullScreen || isPermRequestFullScreen;
    },
  );
export const LoadableWikiLogo_com=createSelector(SuiteHeader_com,selectSpaces,selectHasSpaceInfo,selectAsyncError,selectRole,selectIsSidebarVisible,selectIsSidebarDisappear,data=>data)



import { selectPermissions } from '$selectors/share';
import { selectCurrentMembersCount } from 'business/common/services/member-redux/selector';
import { selectBreadcrumbData } from 'src/wiki/components/breadcrumbV2/utils';

export const BreadCrumbV2_com=createSelector(
  LoadableWikiLogo_com,
    selectCurrentBaseWikiInfo,
    selectBreadcrumbData,
    selectCurrentSuiteByObjToken,
    selectPermissions,
    selectCurrentMembersCount,
    selectTranslate,
    data=>data
)



export const BreadCrumbItem_com=createSelector(BreadCrumbV2_com,()=>null)
export const BreadCrumbItemWrapper_com=createSelector(BreadCrumbItem_com,()=>null)
export const NoteTitle_com=createSelector(BreadCrumbItemWrapper_com,()=>null)


export const StarWiki_com=createSelector(
  BreadCrumbItemWrapper_com,
    selectCurrentWikiEntity,
    selectCurrentWikiToken,
    data=>data
)


import { selectCurrentFolder } from '$common/redux/selectors/explorer';
import {
  selectIsSearchHistoryShown,
  selectIsAdvanceSearchIconShown,
  selectIsMoreRecentBtnShown,
  selectIsUserCandidateItemsShown,
  selectIsChatCandidateItemsShown,
  selectIsRelatedResultBtnShown,
  selectIsSearchWikiOnly,
  selectIsBrowseHistoryShown,
} from '$common/redux/selectors/search';
import { selectIsWikiPage } from 'business/common/modules/suite/selectors';

const LoadablewikiSearchNote_com_overall=createSelector(
    selectCurrentFolder,
    selectIsSearchHistoryShown,
    selectIsAdvanceSearchIconShown,
    selectIsMoreRecentBtnShown,
    selectIsUserCandidateItemsShown,
    selectIsChatCandidateItemsShown,
    selectIsRelatedResultBtnShown,
    selectCurrentUrlType,
    selectIsSearchWikiOnly,
    selectIsBrowseHistoryShown,
    selectIsWikiPage,
    selectCurrentSpaceInfo,
    data=>data
)

export const LoadablewikiSearchNote_com=createSelector(SuiteHeader_com,LoadablewikiSearchNote_com_overall,data=>data)

export const SearchBox_com=createSelector(LoadablewikiSearchNote_com,()=>null)

export const SearchList_com=createSelector(LoadablewikiSearchNote_com,selectCurrentUser,selectIsCurrentUserToCUser,data=>data)

export const ResponsiveHeightList_com=createSelector(SearchList_com,()=>null)
export const SearchItem_com=createSelector(ResponsiveHeightList_com,()=>null)


export const User_com=createSelector(SuiteHeader_com,selectCurrentMembersCount,data=>data)
export const UserList_com=createSelector(User_com,()=>null)

import { selectIsFetchStatusAllLoaded } from '$selectors/common';
import {
    selectCurrentSuiteIsDeleted,
    selectCurrentSuiteIsNotFound,
    selectCurrentSuiteIsForbidden,
    selectContentVerificationFailed,
    selectCurrentSuiteMemberV2Size,
    selectCurrentSuiteShareable,
  } from '$selectors/share';
  import {
    selectIsSameTenantAsOwner,
    selectCurrentSuiteTenantName,
  } from 'business/common/modules/suite/selectors';
  
  const selectIsShareAllNeedDataLoaded = selectIsFetchStatusAllLoaded([
    'currentUser',
    'currentSuite',
    'userPermissionOnSuite',
    'suitePublicPermission',
  ]);
  
const Share_com_overall=createSelector(
    selectIsCurrentUserToCUser,
    selectCurrentSuiteIsDeleted,
    selectCurrentSuiteToken,
    selectCurrentSuiteType,
    selectCurrentSuiteByObjToken,
    selectCurrentSuiteTenantName,
    selectIsSameTenantAsOwner,
    selectCurrentSuitePermissionInfo,
    selectCurrentSuiteIsForbidden,
    selectCurrentSuiteIsNotFound,
    data=>data
)
export const Share_com=createSelector(
    SuiteHeader_com,
    Share_com_overall,
    selectAsyncError,
      selectIsShareAllNeedDataLoaded,
      selectCurrentSuiteOtherPermissions,
      selectContentVerificationFailed,
      selectUserGuide,
      selectCurrentDriveFileInfo,
      selectCurrentBaseWikiInfo,
      selectCurrentSuiteMemberV2Size,
      selectCurrentSuiteShareable,
      data=>data
)

export const PermissionApplication=createSelector(Share_com,()=>null)

import {
    selectSelectedFolderUserPermission,
    selectCurrentSuitePermissionConfig,
    selectSelectedFileOwner,
    selectIsAuthSharePermission,
    selectPublicPermission,
  } from '$selectors/share';
  import { selectCurrentUserTenantId } from 'business/common/services/current-user-redux/selector';
  import { selectSelectedFolderToken, selectSelectedFolderSpaceId, selectSelectedFolderData } from '$selectors/explorer-share';

  import { selectQuery } from '$selectors/common';

  const selectCurrentSuiteAllowedPermission = createSelector(
    selectCurrentSuitePermissionConfig,
    config => config.get('allowedPermission', -1),
  );
  
  const selectIsV3Folder = createSelector(
    selectSelectedFolderData,
    folderData => {
      return folderData && isVersionThreeFolder(folderData);
    },
  );
  
const ShareMenu_com_overall=createSelector(
    selectQuery,
    selectCurrentPermission,
    selectSelectedFolderUserPermission,
    selectCurrentSuiteToken,
    selectSelectedFolderToken,
    selectSelectedFolderSpaceId,
    selectCurrentSuiteType,
    selectFetchStatus,
    selectFetchStatus,
    selectCurrentSuiteAllowedPermission,
    selectCurrentUserTenantId,
    selectSelectedFileOwner,
    data=>data  
)
export const ShareMenu_com=createSelector(
    Share_com,
    ShareMenu_com_overall,
    selectCurrentSuitePermissionInfo,
    selectIsAuthSharePermission,
    selectPublicPermission,
    selectIsV3Folder,
    data=>data
)


import {
  selectCurrentSuiteMembersExistV2,
  selectPublicPermissionState,
  selectSelectedFileCanCross,
  selectSelectedFileExternalAccess,
  selectCurrentSuiteInviteExternal,
  selectSelectedFoldeRemindAnyoneLink,
  selectSelectedFileIsOwner,
  selectSelectedFolderPublicPermission,
  selectSelectedFolderPublicPermissionState,
  selectOwnerNotInGroupError,
} from '$selectors/share';
import { selectUserPreference } from 'business/common/services/user-preference-redux/selector';

const dontAskAgainOpenAllShareSwitch=createSelector(
    selectSelectedFolderData,
    selectUserPreference,
    selectSelectedFoldeRemindAnyoneLink,
    (folderData, userPreference, remindAnyoneLink) => {
      return folderData !== null ? !remindAnyoneLink : Boolean(userPreference.get('dontAskAgainOpenAllShareSwitch'));
    },
  )

  const InviteMember_com_overall=createSelector(
    selectQuery,
    selectCurrentUser,
    selectCurrentSuiteByObjToken,
    selectCurrentSuiteToken,
    selectCurrentSuiteType,
    selectSelectedFolderData,
    selectCurrentSuiteMembersExistV2,
    selectIsCurrentUserToCUser,
    selectSelectedFileCanCross,
    selectSelectedFileExternalAccess,
    selectCurrentSuiteInviteExternal,
    dontAskAgainOpenAllShareSwitch,
    data=>data
  )

  const InviteMember_com_overall2=createSelector(
    selectSelectedFileIsOwner,
    selectPublicPermission,
    selectPublicPermissionState,
    selectSelectedFolderPublicPermission,
    selectSelectedFolderPublicPermissionState,
    selectIsWikiPage,
    selectCurrentWikiToken,
    selectCurrentSuitePermissionConfig,
    getFeatureConfigSelector,
    selectSelectedFileOwner,
    selectIsAuthSharePermission,
    selectOwnerNotInGroupError,
    data=>data
  )
export const InviteMember_com=createSelector(
  ShareMenu_com,
  InviteMember_com_overall,
  InviteMember_com_overall2
    
)

export const InviteMemberLayout_com=createSelector(InviteMember_com,()=>null);

const selectSpaceListHasThisDoc = createSelector(selectSuiteWikiInfo, suiteWikiInfo =>
  Object.keys((suiteWikiInfo['space_value']) || {}),
);

const selectCanPublishToWiki = createSelector(
  selectEditableSpaceList,
  selectSpaceListHasThisDoc,
  (editableSpaces, spaceHasThisDoc) => {
    return editableSpaces.length > spaceHasThisDoc.length && editableSpaces.length >= 0;
  },
);

const LoadableMoreMenu_com_overall=createSelector(
  selectCurrentUser,
  selectFetchStatus,
  selectCurrentPermission,
  selectCurrentSuiteByObjToken,
  selectCurrentBaseWikiInfo,
  selectIsSubscribe,
  selectIsPDFPreviewOn,
  selectFindFunctionIsAvailable,
  selectFileActivityHistoryItems,
  selectIsInEditMode,
  selectIsWPSOn,
  selectFileEntities,
  
  data=>data  
)

const LoadableMoreMenu_com_overall_2=createSelector(
  selectTrClicked,
  selectBackUrl,
  toggleNavBarSelector,
  selectCurrentUrlType,
  selectTranslateTargetLang,
  selectCurrentSuiteOwner,
  selectCurrentSuiteOtherPermissions,
  selectHasSuitePath,
  selectCanPublishToWiki,
  selectTranslate,
  selectTranslateSameLang,
  currentViewSelector,
  data=>data
)

export const LoadableMoreMenu_com=createSelector(
  SuiteHeader_com,
  LoadableMoreMenu_com_overall,
  LoadableMoreMenu_com_overall_2,
  selectCurrentDriveFileInfo,
  selectAppconfigFavoritesHidden,
  selectAppconfigFolderHidden,
  selectAppconfigWikiHidden,
  selectCurrentWikiEntity,
)



  import { makeSelectIsGuideDone } from 'business/common/services/guide-redux/selector';
  
export const MoreMenu_com=createSelector(
  LoadableMoreMenu_com,
    selectCurrentSuiteIsDeleted,
    selectCurrentSuiteIsForbidden,
    selectCurrentSuiteIsNotFound,
    selectCurrentSuiteShareable,
    makeSelectIsGuideDone,
    selectFetchStatus,
    data=>data
)

// 未完成
// export const NewNoticeButton=createSelector()


