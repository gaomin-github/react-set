import {createSelector} from 'reselect';
import { URL } from '$constants/route';
import { selectTranslate } from '$common/redux/selectors/translate';
import {
    selectIsSpaceSettingVisible,
    selectHasSpaceInfo,
    selectCurrentMode,
    selectSettingEditable,
    selectSpacePermission,
  } from 'src/business/wiki/redux/selectors';

export const WikiSidebar_com=createSelector(
    selectTranslate,
    selectIsSpaceSettingVisible,
    selectHasSpaceInfo,
    selectCurrentMode,
    selectSettingEditable,
    selectSpacePermission,
    data=>data
)

export const SidebarBottom_com=createSelector(WikiSidebar_com,()=>null);


import { selectCurrentSpaceInfo } from 'src/business/wiki/redux/selectors';
export const WikiSpaceInfo_com=createSelector(SidebarBottom_com,selectCurrentSpaceInfo,data=>data)


import { selectCurrentWikiSpaceId } from 'src/business/wiki/redux/selectors';
const routeState=(state)=>state.appState&&state.appState.route;
const selectIsInSpaceSetting = createSelector(
  routeState,
  routeState => {
    if (routeState && routeState.get('url')) {
      return routeState.get('url').startsWith(URL.WIKI_SPACE_SETTING);
    }
    return false;
  },
  );
  export const SettingEntity_com=createSelector(SidebarBottom_com,selectCurrentWikiSpaceId,selectIsInSpaceSetting,data=>data)
  export const SidebarMainItem_com=createSelector(WikiSpaceInfo_com,SidebarBottom_com,()=>null)

