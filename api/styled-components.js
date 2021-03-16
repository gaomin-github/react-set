// 1.将样式集合包装为<style.div>组件
// 初始化：
import styled from 'styled-components';
export const WikiSidebarWrapStyle = styled.div<IWikiSidebarWrapProps>`
  display: flex;
  flex-shrink: 0;
  background-color: ${N50};
  position: relative;
  position: relative!important; // 防止src/wiki/components/wiki/WikiDetail/wiki.less wiki-sidebar-wrap 样式污染
  transition: ${({isAnimationDisable}) => isAnimationDisable ? 'none' : 'width 0.2s linear'};

  &:hover {
    ${SidebarHiddenBtnStyle} {
      display: flex;
    }
  }

  .wiki-flexible-line-v2 {
    ${({isHidden}) => isHidden && 'display: none;'}
  }

`;

// 用法一
<WikiSidebarWrapStyle
innerRef={this.setContainerRef}
isHidden={!visible || browserHelper.isIPad}
style={{width: motionWidth}}
isAnimationDisable={isAnimationDisable}
className="wiki-sidebar-wrap"
onTransitionEnd={this.handleTransitionEnd}
/>

// 用法二
const FilePreview=()=>(<div>file preview</div>)
const StyledFilePreview = styled(FilePreview)`
  width: 266px;
  height: 143px;
  border-radius: 4px;
  border: solid 1px ${N100};
`;