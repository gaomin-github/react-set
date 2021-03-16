功能：
1.结点拖拽：选中节点，拖拽时高亮样式；拖拽影像跟随鼠标位置；拖拽后展示弹出窗，拖拽才生效；拖拽到其它节点上，该节点呈现方框样式；拖拽时在文件夹上停留，文件夹自动展开

wikiSidebarContainer
    sidebarHeader
    sidebarMainArea
        ...
        ScrollbarWrapper
            pageTree
                wikiTree

    sidebarBottomArea


<!-- loadTree(spaceIde)：加载树 -->
    wikiTreeContainer:src/wiki/components/wiki-select-tree/WikiTreeContainerV2.tsx
        createWikiContent
        publicshToWiki
        MoveNodeTo
        CopyNodeTO
            wikiTreeContainer

    createWikiContent:src/wiki/components/modals/create-wiki/CreateWikiContent.tsx


    mldalManager
        (modalComponentLookupTable)type2Model:src/pc/components/modal-manager/type2Modal.ts
            createWiki
                createWikiContent
