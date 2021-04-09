
const curStore={
    appState: {
      dynamicModules: {
        appState: true,
        entities: true,
        pc: true,
        doc: true,
        sheet: true,
        wiki: true,
        'onboarding-doc': true,
        'explorer-async': true,
        'ui-control': true
      },
      currentListName: 'Unknown',
      trClicked: false,
      currentSpaceHeaderId: null,
      isHiddenSharedFolderVisible: false,
      isRightBarExpanded: true,
      isFestivalModalVisible: true,
      listView: {
        listViewSetting: {
          SharedWithMe: {
            name: 'SharedWithMe',
            type: 'Entity',
            columns: [
              {
                isLocked: false,
                sortField: 'FILE_TYPE',
                text: '所有类型',
                meta: 'NAME'
              },
              {
                isLocked: false,
                sortField: '',
                text: '路径',
                meta: 'PATH'
              },
              {
                isLocked: false,
                sortField: 'SHARED_TIME',
                text: '分享时间',
                meta: 'SHARED_TIME'
              }
            ],
            ordering: {
              direction: '',
              sortField: '',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'List',
            viewTab: ''
          },
          TeamSpace: {
            name: 'TeamSpace',
            type: 'SoftLink',
            columns: [
              {
                isLocked: false,
                sortField: 'NAME',
                text: '名称',
                meta: 'NAME'
              }
            ],
            ordering: {
              direction: '',
              sortField: '',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'NormalGrid',
            viewTab: ''
          },
          MyObject: {
            name: 'MyObject',
            type: 'Entity',
            columns: [
              {
                isLocked: false,
                sortField: 'FILE_TYPE',
                text: '所有类型',
                meta: 'NAME'
              },
              {
                isLocked: false,
                sortField: '',
                text: '路径',
                meta: 'PATH'
              },
              {
                isLocked: false,
                sortField: 'MODIFIED_TIME',
                text: '修改时间',
                meta: 'MODIFIED_TIME'
              }
            ],
            ordering: {
              direction: '',
              sortField: '',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: true,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'List',
            viewTab: ''
          },
          Folder: {
            name: 'Folder',
            type: 'SoftLink',
            columns: [
              {
                isLocked: false,
                sortField: 'NAME',
                text: '名称',
                meta: 'NAME'
              },
              {
                isLocked: false,
                sortField: '',
                text: '所有者',
                meta: 'OWNER'
              },
              {
                isLocked: false,
                sortField: 'MODIFIED_TIME',
                text: '修改时间',
                meta: 'MODIFIED_TIME'
              }
            ],
            ordering: {
              direction: 'DESCENDING',
              sortField: 'CREATED_TIME',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'List',
            viewTab: ''
          },
          SharedWithMe2: {
            name: 'SharedWithMe2',
            type: 'Mixed',
            columns: [
              {
                isLocked: false,
                sortField: 'FILE_TYPE',
                text: '所有类型',
                meta: 'NAME'
              },
              {
                isLocked: false,
                sortField: '',
                text: '所有者',
                meta: 'OWNER'
              },
              {
                isLocked: false,
                sortField: 'SHARED_TIME',
                text: '分享时间',
                meta: 'SHARED_TIME'
              }
            ],
            ordering: {
              direction: '',
              sortField: '',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'List',
            viewTab: 'SHARE_WITH_ME_2_RECENT'
          },
          Star: {
            name: 'Star',
            type: 'Mixed',
            columns: [
              {
                isLocked: false,
                sortField: 'FILE_TYPE',
                text: '所有类型',
                meta: 'NAME'
              },
              {
                isLocked: true,
                sortField: '',
                text: '所有者',
                meta: 'OWNER'
              },
              {
                isLocked: true,
                sortField: 'MODIFIED_TIME',
                text: '修改时间',
                meta: 'MODIFIED_TIME'
              }
            ],
            ordering: {
              direction: '',
              sortField: '',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'List',
            viewTab: ''
          },
          SharedFolder: {
            name: 'SharedFolder',
            type: 'SoftLink',
            columns: [],
            ordering: {
              direction: 'DESCENDING',
              sortField: 'CREATED_TIME',
              managerFirst: true
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'SmallGrid',
            viewTab: ''
          },
          Trash: {
            name: 'Trash',
            type: 'SoftLink',
            columns: [
              {
                isLocked: true,
                sortField: 'NAME',
                text: '名称',
                meta: 'NAME'
              },
              {
                isLocked: true,
                sortField: '',
                text: '所有者',
                meta: 'OWNER'
              },
              {
                isLocked: true,
                sortField: '',
                text: '剩余时间',
                meta: 'REMAINING_TIME'
              }
            ],
            ordering: {
              direction: '',
              sortField: '',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'List',
            viewTab: ''
          },
          MyFolder: {
            name: 'MyFolder',
            type: 'SoftLink',
            columns: [],
            ordering: {
              direction: 'DESCENDING',
              sortField: 'CREATED_TIME',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'SmallGrid',
            viewTab: ''
          },
          Recent: {
            name: 'Recent',
            type: 'Entity',
            columns: [],
            ordering: {
              direction: '',
              sortField: '',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'List',
            viewTab: ''
          },
          Collection: {
            name: 'Collection',
            type: 'Entity',
            columns: [
              {
                isLocked: true,
                sortField: 'NAME',
                text: '名称',
                meta: 'NAME'
              },
              {
                isLocked: true,
                sortField: '',
                text: '所有者',
                meta: 'OWNER'
              },
              {
                isLocked: false,
                sortField: 'MODIFIED_TIME',
                text: '修改时间',
                meta: 'MODIFIED_TIME'
              }
            ],
            ordering: {
              direction: 'DESCENDING',
              sortField: 'CREATED_TIME',
              managerFirst: false
            },
            filtering: {
              fileType: 'ALL',
              onlyUnOrganized: false,
              sharerIds: [],
              shareByUserName: '',
              selectedSharer: '[]'
            },
            viewMode: 'List',
            viewTab: ''
          }
        },
        recentListViewSetting: {
          ordering: 6,
          fileType: 'All',
          owner: 'Anybody'
        }
      },
      appInitialized: true,
      currentUser: {
        tenant_name: 'E2E 测试团队',
        en_name: 'BearWeb E2E 测试账号',
        mobile: '5443',
        tenant_tag: '0',
        department_id: '0',
        avatar_url: 'https://s1-fs.pstatp.com/static-resource/v1/22b7ea64-17d3-4fea-abd4-d1c57feca3ag~?image_size=72x72&cut_type=default-face&quality=&format=jpeg&sticker_format=.webp',
        is_able_add_members: true,
        name: 'BearWeb E2E 测试账号',
        user_type: '1',
        tenant_id: '6847336307660685313',
        can_cross: true,
        is_singleproduct: false,
        isOverseaSpace: false,
        is_manager: true,
        department_name: '',
        is_anonymous: false,
        id: '6847336307744587777',
        email: '',
        suid: '6847336307744587777',
        cn_name: 'BearWeb E2E 测试账号'
      },
      currentNoteToken: {
        type: 16,
        obj_token: 'wikcnKfKveNqJfO1UDMaLbSkibf'
      },
      currentWikiEntity: {
        area_id: '6919728620512608257',
        child_num: 0,
        home_page: {
          wiki_token: 'wikcnKfKveNqJfO1UDMaLbSkibf',
          obj_type: 2,
          obj_token: 'doccneC9ABpSQGVnWSJiCTiPnmg'
        },
        is_pined: false,
        is_stared: false,
        obj_token: 'doccneC9ABpSQGVnWSJiCTiPnmg',
        obj_type: 2,
        parent: '',
        sort_id: 0,
        space_icon: 'https://sf3-eecdn-tos.pstatp.com/img/mosaic-legacy/241f5000f77939160d304~240x240.jpg',
        space_id: '6919728620512591873',
        space_name: '【勿删勿动】e2e主路径测试',
        title: '【勿删勿动】wiki主路径测试',
        wiki_token: 'wikcnKfKveNqJfO1UDMaLbSkibf',
        is_subscribed: false
      },
      currentSsid: '',
      userGuide: {
        profile: {
          create_guide_user: {
            create_file_num: 6873,
            view_others_file_num: 0
          },
          user: {
            sheet_mobile_share_image_badge_more_panel_is_finish: 0,
            docs_first_create_file_time: 0,
            docs_acct_share_page_enter_count: 0,
            sheet_mobile_is_edit: 0,
            sheet_mobile_is_open: 0,
            sheet_mobile_is_share_image: 0,
            docs_acc_editor_undo_count: 0,
            sheet_pc_is_create: 0,
            docs_acc_enter_lab_index_count: 0,
            docs_acc_create_doc_count: 0,
            docs_acc_comment_count: 0,
            sheet_mobile_share_image_badge_share_panel_is_finish: 0,
            sheet_checkbox_is_insert: 0,
            sheet_mobile_share_image_badge_fab_is_finish: 0,
            sheet_pc_is_edit: 1,
            sheet_pc_is_open: 1,
            user_bitable_is_edit: 1,
            sheet_mobile_is_create: 0,
            sheet_card_view_is_edit: 0,
            docs_acc_play_mode_enter_count: 0,
            docs_acc_enter_home_count: 0,
            docs_acc_open_share_count: 0,
            sheet_mobile_reminder_badge_is_finish: 0,
            dropdown_menu_is_confirm: 0,
            docs_acc_editor_redo_count: 0,
            sheet_mobile_reminder_is_insert: 0
          },
          mindnote: {
            has_create_mindnote: 0
          },
          reminder: {
            has_used_reminder: 0
          }
        },
        guides: {
          syncdisk_onboarding_startup: {
            is_done: true,
            context: ''
          },
          mindnote_view_switcher: {
            is_done: true,
            context: ''
          },
          doc_back_reference_list_guide: {
            is_done: true,
            context: ''
          },
          wiki_new_home_index: {
            is_done: true,
            context: ''
          },
          doc_presentation_mode_fullscreen_mode_open_comment: {
            is_done: true,
            context: ''
          },
          mindnote_drill: {
            is_done: true,
            context: ''
          },
          sheet_bitable_user_guide: {
            is_done: true,
            context: ''
          },
          wiki_sheet_publish: {
            is_done: true,
            context: ''
          },
          import_success_share_plan_a: {
            is_done: true,
            context: ''
          },
          sheet_gridLineHidden_guide: {
            is_done: true,
            context: ''
          },
          doc_new_code_block: {
            is_done: true,
            context: ''
          },
          sheet_crossHightlight_guide: {
            is_done: true,
            context: ''
          },
          wiki_tree_permission: {
            is_done: true,
            context: ''
          },
          auto_translate_settings_guide: {
            is_done: true,
            context: ''
          },
          sheet_dropdown_v2_set_multiple: {
            is_done: true,
            context: ''
          },
          add_existed_docs: {
            is_done: true,
            context: ''
          },
          sheet_dropdown_color_intro: {
            is_done: true,
            context: ''
          },
          create_doc_group_at_panel: {
            is_done: true,
            context: ''
          },
          create_doc_group_intro: {
            is_done: true,
            context: ''
          },
          slide_switch_view: {
            is_done: true,
            context: ''
          },
          explorer_v3_custom_template_guide: {
            is_done: true,
            context: ''
          },
          mindnote_user_guide: {
            is_done: true,
            context: ''
          },
          feed_translate_enter_guide: {
            is_done: true,
            context: ''
          },
          wiki_import_confluence: {
            is_done: true,
            context: ''
          },
          sheet_cell_position_guide: {
            is_done: true,
            context: ''
          },
          toggle_translate: {
            is_done: true,
            context: ''
          },
          sheet_dropdown_v2_apply_to_all: {
            is_done: true,
            context: ''
          },
          bitable_sort_intro: {
            is_done: true,
            context: ''
          },
          toggle_heading_intro: {
            is_done: true,
            context: ''
          },
          sheet_hotkey_addRowOrColAhead_conflict_guide: {
            is_done: true,
            context: ''
          },
          translate_enter_guide: {
            is_done: true,
            context: ''
          },
          smartable_kanban_group_setting: {
            is_done: true,
            context: ''
          },
          wiki_tree_permission_set: {
            is_done: true,
            context: ''
          },
          mindnote_create_intro: {
            is_done: true,
            context: ''
          },
          sheet_zoom_callout: {
            is_done: true,
            context: ''
          },
          whats_new_notice_guide: {
            is_done: true,
            context: ''
          },
          doc_smartlink_paste_bookmark: {
            is_done: true,
            context: ''
          },
          sheet_resize_point: {
            is_done: true,
            context: ''
          },
          wiki_relation_tree_entry: {
            is_done: true,
            context: ''
          },
          sheet_float_image_callout_guide: {
            is_done: true,
            context: ''
          },
          mindnote_guide_dialog: {
            is_done: true,
            context: ''
          },
          sheet_transform_bitable_kanban_group_update: {
            is_done: true,
            context: ''
          },
          sheet_reminder_feature_guide: {
            is_done: true,
            context: ''
          },
          sheet_checkbox_icon_callout: {
            is_done: true,
            context: ''
          },
          doc_bidirectional_link_list_open_guide: {
            is_done: true,
            context: ''
          },
          sheet_dropdown_v2_red_dot: {
            is_done: true,
            context: ''
          },
          sheet_filter_view_temp: {
            is_done: true,
            context: ''
          },
          doc_create_gridview_from_list_intr: {
            is_done: true,
            context: ''
          },
          mindnote_mindmap_add_icon: {
            is_done: true,
            context: ''
          },
          shared_doc_group_toc: {
            is_done: true,
            context: ''
          },
          sheet_transform_bitable_grid_finish_update: {
            is_done: true,
            context: ''
          },
          subscribe_guide: {
            is_done: true,
            context: ''
          },
          sheet_insert_hyperlink_update: {
            is_done: true,
            context: ''
          },
          explorer_v3_new_guide_group_intro: {
            is_done: true,
            context: ''
          },
          close_translate_quick_entry: {
            is_done: true,
            context: ''
          },
          doc_onboarding_option_research: {
            is_done: true,
            context: ''
          },
          smartable_sheet_kanban_create_view_intro: {
            is_done: true,
            context: ''
          },
          wiki_import_confluence_popover: {
            is_done: true,
            context: ''
          },
          doc_smartlink_paste_title: {
            is_done: true,
            context: ''
          },
          doc_share_callout: {
            is_done: true,
            context: ''
          },
          sheet_filter_view_guide: {
            is_done: true,
            context: ''
          },
          sheet_create_grid: {
            is_done: true,
            context: ''
          },
          sheet_has_watched_smartable_video: {
            is_done: true,
            context: ''
          },
          sheet_autofit_row_height: {
            is_done: true,
            context: ''
          },
          smartable_kanban_create_view_intro: {
            is_done: true,
            context: ''
          },
          doc_diagram_exit_graph_editor_guide: {
            is_done: true,
            context: ''
          },
          mindnote_mindmap_tutorial_for_old_user: {
            is_done: true,
            context: ''
          },
          undo_redo_callout: {
            is_done: true,
            context: ''
          },
          sheet_conditional_formatting_update: {
            is_done: true,
            context: ''
          },
          sheet_filter_view_range: {
            is_done: true,
            context: ''
          },
          sheet_autofit_col_width: {
            is_done: true,
            context: ''
          },
          suspension_comment_intro: {
            is_done: true,
            context: ''
          },
          wiki_sheet_create: {
            is_done: true,
            context: ''
          },
          syncdisk_onboarding_sync_entry: {
            is_done: true,
            context: ''
          },
          shared_doc_group_intro: {
            is_done: true,
            context: ''
          },
          sheet_conditional_formatting_intro: {
            is_done: true,
            context: ''
          },
          translate_guide: {
            is_done: true,
            context: ''
          },
          beginner_guide_video: {
            is_done: true,
            context: ''
          },
          gallery_image_guide: {
            is_done: true,
            context: ''
          },
          sheet_create_table: {
            is_done: true,
            context: ''
          },
          todo_center_guide: {
            is_done: true,
            context: ''
          },
          doc_history_v2_guide: {
            is_done: true,
            context: ''
          },
          translate_comment_guide: {
            is_done: true,
            context: ''
          },
          unused_feature_presentation: {
            is_done: true,
            context: ''
          },
          sheet_group_intro: {
            is_done: true,
            context: ''
          },
          doc_create_kanbanview_from_panel_intr: {
            is_done: true,
            context: ''
          },
          explorer_v3_new_guide_group_create_folder: {
            is_done: true,
            context: ''
          },
          unused_feature_comment: {
            is_done: true,
            context: ''
          },
          suite_history: {
            is_done: true,
            context: ''
          },
          unused_feature_share: {
            is_done: true,
            context: ''
          },
          wiki_section_nav_entry: {
            is_done: true,
            context: ''
          },
          mindnote_toolbar_intro: {
            is_done: true,
            context: ''
          },
          translate_display_guide: {
            is_done: true,
            context: ''
          },
          mindnote_close_banner: {
            is_done: true,
            context: ''
          },
          sheet_create_table_template: {
            is_done: true,
            context: ''
          },
          mindnote_mindmap_tutorial: {
            is_done: true,
            context: ''
          },
          create_doc_group_selection_popup: {
            is_done: true,
            context: ''
          },
          doc_jira_issue: {
            is_done: true,
            context: ''
          },
          sheet_resize_row: {
            is_done: true,
            context: ''
          },
          sheet_smartable_template_enter: {
            is_done: true,
            context: ''
          },
          sheet_dropdown_v2_intro_from_cell: {
            is_done: true,
            context: ''
          },
          doc_relation_graph_guide: {
            is_done: true,
            context: ''
          },
          doc_view_editors_guide: {
            is_done: true,
            context: ''
          },
          mindnote_nav_main: {
            is_done: true,
            context: ''
          },
          sheet_zoom_guide: {
            is_done: true,
            context: ''
          },
          doc_mindnote_panel: {
            is_done: true,
            context: ''
          },
          bitable_row_height_intro: {
            is_done: true,
            context: ''
          },
          mindnote_comment_intro: {
            is_done: true,
            context: ''
          },
          sheet_checkbox_icon_red_dot: {
            is_done: true,
            context: ''
          },
          sheet_common_tutorial: {
            is_done: true,
            context: ''
          },
          create_doc_guide: {
            is_done: true,
            context: ''
          },
          auto_translate_switch_guide: {
            is_done: true,
            context: ''
          },
          smartable_grid_expand_row: {
            is_done: true,
            context: ''
          },
          mindnote_nav_mindmap: {
            is_done: true,
            context: ''
          },
          doc_diagram_drag_graph_guide: {
            is_done: true,
            context: ''
          },
          drag_line_popover_icon: {
            is_done: true,
            context: ''
          },
          selection_checkbox_guide: {
            is_done: true,
            context: ''
          },
          sheet_smartable_user_guide_tips: {
            is_done: true,
            context: ''
          },
          wiki_new_home_space: {
            is_done: true,
            context: ''
          },
          smartable_kanban_add_group: {
            is_done: true,
            context: ''
          },
          sheet_gridLineHidden_callout: {
            is_done: true,
            context: ''
          },
          sheet_crossHightlight_callout: {
            is_done: true,
            context: ''
          },
          new_template_reminder_guide: {
            is_done: true,
            context: ''
          },
          sheet_resize_col: {
            is_done: true,
            context: ''
          },
          smartable_sheet_kanban_add_group: {
            is_done: true,
            context: ''
          },
          sheet_float_image_guide: {
            is_done: true,
            context: ''
          },
          enter_reminder_guide: {
            is_done: true,
            context: ''
          },
          doc_jira_paste_filter_example_guide: {
            is_done: true,
            context: ''
          },
          sheet_reminder_update: {
            is_done: true,
            context: ''
          },
          doc_create_kanbanview_from_list_intr: {
            is_done: true,
            context: ''
          },
          doc_bidirectional_link_list_close_guide: {
            is_done: true,
            context: ''
          },
          sheet_dropdown_v2_intro: {
            is_done: true,
            context: ''
          },
          doc_callout_block: {
            is_done: true,
            context: ''
          },
          mindnote_shortcut_tab: {
            is_done: true,
            context: ''
          },
          whats_new_notice_guide_v2: {
            is_done: true,
            context: ''
          },
          sheet_transform_bitable_grid_group_update: {
            is_done: true,
            context: ''
          },
          pc_ccm_create_button: {
            is_done: true,
            context: ''
          },
          wiki_expand_page_tree: {
            is_done: true,
            context: ''
          },
          sheet_new_hyperlink_callout: {
            is_done: true,
            context: ''
          },
          smartable_sheet_grid_create_view_intro: {
            is_done: true,
            context: ''
          },
          bitable_guide_bar: {
            is_done: true,
            context: ''
          },
          mindnote_view_switcher_for_old_user: {
            is_done: true,
            context: ''
          },
          sheet_transform_bitable_toolbar_update: {
            is_done: true,
            context: ''
          },
          sheet_transform_bitable_kanban_finish_update: {
            is_done: true,
            context: ''
          },
          sheet_optional_paste_badge: {
            is_done: true,
            context: ''
          },
          smartable_grid_create_view_intro: {
            is_done: true,
            context: ''
          },
          doc_jira_add_panel_guide: {
            is_done: true,
            context: ''
          },
          wiki_sheet_created: {
            is_done: true,
            context: ''
          },
          smart_compose_guide: {
            is_done: true,
            context: ''
          },
          explorer_v3_new_guide_group_create_suite: {
            is_done: true,
            context: ''
          },
          doc_smartlink_bookmark: {
            is_done: true,
            context: ''
          },
          anonymous_edit_guide: {
            is_done: true,
            context: ''
          },
          doc_history_v2_redo_edit: {
            is_done: true,
            context: ''
          },
          upload_file: {
            is_done: true,
            context: ''
          },
          sheet_create_kanban: {
            is_done: true,
            context: ''
          },
          mindnote_shortcut_shift_tab: {
            is_done: true,
            context: ''
          },
          doc_create_gridview_from_panel_intr: {
            is_done: true,
            context: ''
          },
          panel_checkbox_guide: {
            is_done: true,
            context: ''
          },
          cuser_from_mubu_tutorial_guide: {
            is_done: true,
            context: ''
          },
          shared_doc_group_comment_guide: {
            is_done: true,
            context: ''
          },
          translate_comment_callout_guide: {
            is_done: true,
            context: ''
          },
          sheet_filter_view_update: {
            is_done: true,
            context: ''
          },
          smartable_grid_create_column: {
            is_done: true,
            context: ''
          },
          mindnote_mention_intro: {
            is_done: true,
            context: ''
          },
          create_doc_group_share_button: {
            is_done: true,
            context: ''
          },
          create_doc_group_new_popover: {
            is_done: true,
            context: ''
          },
          sheet_at_doc_full_screen_entry: {
            is_done: true,
            context: ''
          },
          wiki_tree_permission_batch: {
            is_done: true,
            context: ''
          },
          mindnote_mindmap_intro: {
            is_done: true,
            context: ''
          },
          create_doc_group_congrats: {
            is_done: true,
            context: ''
          },
          bitable_filter_group_intro: {
            is_done: true,
            context: ''
          },
          sheet_hotkey_addRowOrColBehind_conflict_guide: {
            is_done: true,
            context: ''
          },
          shared_doc_group_create: {
            is_done: true,
            context: ''
          },
          sheet_filter_view_point: {
            is_done: true,
            context: ''
          },
          shared_doc_group_comment: {
            is_done: true,
            context: ''
          },
          doc_table_insert_new_line_guide: {
            is_done: true,
            context: ''
          },
          doc_jira_paste_filter_url: {
            is_done: true,
            context: ''
          },
          sheet_filter_view_name: {
            is_done: true,
            context: ''
          },
          wiki_sheet_published: {
            is_done: true,
            context: ''
          },
          smartable_kanban_field_setting: {
            is_done: true,
            context: ''
          },
          sheet_smartable_template_click: {
            is_done: true,
            context: ''
          },
          sheet_cell_share_guide: {
            is_done: true,
            context: ''
          }
        },
        firstlogin: {
          DOC: 0,
          SP_DOC: 0
        }
      },
      boxCommon: {
        currentDriveFileInfo: null,
        isFileDragging: false,
        currentFolderImageListInfo: [],
        isPreviewHistory: false,
        isBoxRendered: false,
        isInEditMode: false,
        isPDFPreviewOn: false,
        findFunctionIsAvailable: false
      },
      noteMeta: {},
      shouldPrint: false,
      alreadyAppeal: false,
      helpBtnVisible: true,
      helpSideBarVisible: true,
      helpBtnActivated: false,
      embedSidebarVisible: false,
      onboarding: {
        homeGuideOn: false,
        createDocGuideOn: false,
        sharedDocGuideOn: false,
        undoRedoGuideRequired: false,
        createMenuVisible: false,
        preferenceOptions: []
      },
      todo: {
        isTodoCenterOpen: false
      },
      wikiSpaceIdList: [],
      wikiSpaces: {},
      recentWikiInSuiteBackNav: [
        {
          wikiId: '6844402391292980887',
          wikiToken: 'wikcnKfKveNqJfO1UDMaLbSkibf',
          wikiTitle: '【勿删勿动】wiki主路径测试',
          objToken: 'doccneC9ABpSQGVnWSJiCTiPnmg',
          objType: 2
        },
        {
          wikiId: '6844402391130413846',
          wikiToken: 'wikcnRZgUvxpwYLwrLFu5HcRyZc',
          wikiTitle: '【勿删勿动】e2e 左侧树测试专用',
          objToken: 'doccnclmK0kuvfdyvO5AQJ3i3sg',
          objType: 2
        },
        {
          wikiId: '6844402391400880479',
          wikiToken: 'wikcnZ4CUltlvv3qnQwSwAoL1Ng',
          wikiTitle: '【勿改标题内容】测试搜索专用文档',
          objToken: 'doccnU4SfqvY7ERg07edZzDhNrg',
          objType: 2
        },
        {
          wikiId: '6844402391130091167',
          wikiToken: 'wikcnfAPvv4Ss1rlahrMoEopDqc',
          wikiTitle: '【测试勿删】d',
          objToken: 'doccnejvm6avQgd8E1IPrtSgSGc',
          objType: 2
        },
        {
          wikiId: '6844402391300008342',
          wikiToken: 'wikcnNmmK0P3tl79dBakVciywzh',
          wikiTitle: '【勿删勿动】最近访问测试',
          objToken: 'doccnCar67C5uF4wrpuy8Y6RNbb',
          objType: 2
        },
        {
          wikiId: '6844402391427440026',
          wikiToken: 'wikcnazRzzZM40njHcLqCpsDah7',
          wikiTitle: '',
          objToken: 'doccn4pdxFhZMWQuiOjISAOHWWf',
          objType: 2
        },
        {
          wikiId: '6844402391293946167',
          wikiToken: 'wikcnMrxaxBrb8xeUwwf9Ds3OVb',
          wikiTitle: '【勿删勿动】e2e主路径测试(无权限测试)',
          objToken: 'doccnYdUCS8YiKNoOy6RArdai6c',
          objType: 2
        },
        {
          wikiId: '6844402391294661703',
          wikiToken: 'wikcn94UWVmGM5mauiOeMWnilXg',
          wikiTitle: '',
          objToken: 'doccnKW0jNdNcBMc9nJjyJvAAmb',
          objType: 2
        },
        {
          wikiId: '6844402391294169359',
          wikiToken: 'wikcncvAYwr1OqBn9NmYyaoW7l5',
          wikiTitle: '【勿删勿动】无权限编辑测试',
          objToken: 'doccn5rSIf4ksFMNYDtr4jXfKTg',
          objType: 2
        },
        {
          wikiId: '6844402391427427290',
          wikiToken: 'wikcnESURrPh7IVQVYvyRVqvYMd',
          wikiTitle: '',
          objToken: 'doccnwwlapWd3i0RLTIOyjLW3Ug',
          objType: 2
        },
        {
          wikiId: '6844402391305691896',
          wikiToken: 'wikcn8V7esb0PkCUbWVozL34Mdh',
          wikiTitle: '自定义权限',
          objToken: 'doccns2Ob0HwfbbGKCdGGjV8YGf',
          objType: 2
        },
        {
          wikiId: '6844402391130245637',
          wikiToken: 'wikcnWoICMSqGySYgSGF047achc',
          wikiTitle: '【勿删勿动】e2e测试专用2',
          objToken: 'doccnP1sLIQhFNO1TeRJu5mXItc',
          objType: 2
        },
        {
          wikiId: '6844402391307563889',
          wikiToken: 'wikcnkkVdrCyIJ7fmOSEmxfltvf',
          wikiTitle: '非自定义权限',
          objToken: 'doccnmQs60qFiRCLC4QA1mUfBLg',
          objType: 2
        },
        {
          wikiId: '6844402391130231780',
          wikiToken: 'wikcnO5jRUUlauLaoGVSGkNCJQe',
          wikiTitle: '【勿删勿动】e2e测试专用',
          objToken: 'doccn96LLKoVoCQRR4j1UcfoBAm',
          objType: 2
        },
        {
          wikiId: '6844402391130273216',
          wikiToken: 'wikcneiZzMwLZ0n1DqpZ8uNogrc',
          wikiTitle: 'e2e测试',
          objToken: 'doccn6MESwKI7ilxcoojMYoyVcd',
          objType: 2
        },
        {
          wikiId: '6844402391305691854',
          wikiToken: 'wikcnoHZNyfpKt78nSZyftENJNf',
          wikiTitle: '【勿删勿动】e2e节点自定义权限测试专用',
          objToken: 'doccnTOjGSYZlqFQIHtl0Dj2OCf',
          objType: 2
        },
        {
          wikiId: '6844402391427329864',
          wikiToken: 'wikcnsB7OqYuaBYvSa8WcG9w8Jh',
          wikiTitle: '',
          objToken: 'doccnQSLvAkRDXYEx44h9jd2Svg',
          objType: 2
        },
        {
          wikiId: '6844402391427317870',
          wikiToken: 'wikcnHUc5O3t3LmcC1YYZH4kpZT',
          wikiTitle: '',
          objToken: 'doccnYCO2QWGG4iYCQ2MqvYib0f',
          objType: 2
        },
        {
          wikiId: '6844402391427159358',
          wikiToken: 'wikcnHZC9nVMkc9PJeR1Wcxj7He',
          wikiTitle: '',
          objToken: 'doccnB7of0EpnZynRfwJ5mHqBrb',
          objType: 2
        },
        {
          wikiId: '6844402391427145976',
          wikiToken: 'wikcnB02NBA9saISanKmWwYahFg',
          wikiTitle: '',
          objToken: 'doccnVXU8dIznEiPEEZWFKx8F9a',
          objType: 2
        }
      ],
      editableSpaces: {},
      wikiSpacePermissionMap: {},
      recentHotList: {
        isCache: false,
        recent_popular: [],
        has_more: true,
        last_label: ''
      },
      bannerList: [],
      subscriptionData: {
        listData: [],
        hasMore: false,
        lastLabel: ''
      },
      suiteWikiInfo: {
        isPublishToWiki: false
      },
      mySpaceTree: [],
      shareTree: [],
      teamSpaceTree: [],
      explorerPaginationInfo: {
        'share-objects': {
          hasMore: true
        },
        'my-object-list': {
          hasMore: true
        },
        FolderV3Members: {
          hasMore: true
        },
        DustbinSpaceList: {
          hasMore: true
        },
        star: {
          hasMore: true
        },
        AuthorizedMembersV2: {
          hasMore: true
        },
        recent: {
          hasMore: true
        },
        RecentInBackNav: {
          hasMore: true
        },
        collection: {
          hasMore: true
        }
      },
      rootToken: {
        '1': 'nodcndDFC1Btks3xkkJNJTJPrAA',
        '4': 'nodcnzM46OSwBOiY0b0bpYfbJph',
        '5': 'nodcnoKFqZS180Mj6IkrSIl2v4b'
      },
      route: {
        path: '/wiki/:token',
        query: {},
        redirectFromUrl: '/space/wiki/',
        module: 'wiki',
        isSuite: true,
        url: '/wiki/',
        suiteType: 16,
        routeName: 'wikiIndex',
        type: 'suite'
      },
      members: {
        '2:doccneC9ABpSQGVnWSJiCTiPnmg': [
          {
            user_id: '6847336307744587777',
            member_id: '69196658741300',
            touch_time: 1617958366,
            color_id: 9,
            cursor_info: null,
            user_email: '',
            user_mobile: '',
            avatar_url: 'https://s1-fs.pstatp.com/static-resource/v1/22b7ea64-17d3-4fea-abd4-d1c57feca3ag~?image_size=72x72&cut_type=default-face&quality=&format=jpeg&sticker_format=.webp',
            user_name: '',
            create_time: 1617948789,
            cn_name: 'BearWeb E2E 测试账号',
            en_name: 'BearWeb E2E 测试账号',
            is_anonymous: 1,
            user_type: 1,
            i18n_names: {
              en_us: '',
              ja_jp: '',
              zh_cn: ''
            },
            _bearId: '6847336307744587777'
          },
          {
            user_id: '6847336307744587777',
            member_id: '27237323112869',
            touch_time: 1617958469,
            color_id: 9,
            cursor_info: null,
            user_email: '',
            user_mobile: '',
            avatar_url: 'https://s1-fs.pstatp.com/static-resource/v1/22b7ea64-17d3-4fea-abd4-d1c57feca3ag~?image_size=72x72&cut_type=default-face&quality=&format=jpeg&sticker_format=.webp',
            user_name: '',
            create_time: 1617958469,
            cn_name: 'BearWeb E2E 测试账号',
            en_name: 'BearWeb E2E 测试账号',
            is_anonymous: 1,
            user_type: 1,
            i18n_names: {
              en_us: '',
              ja_jp: '',
              zh_cn: ''
            },
            _bearId: '6847336307744587777'
          }
        ]
      },
      currentMemberId: '27237323112869',
      membersCount: {
        doccneC9ABpSQGVnWSJiCTiPnmg: 0
      },
      commentData: {},
      commentLoadStatus: {},
      messageData: {},
      newOldMessage: {
        comment: {},
        mention: {}
      },
      incomingMessages: [],
      commentPosition: {
        '2-doccneC9ABpSQGVnWSJiCTiPnmg': {
          shown: true,
          positions: [],
          isLoaded: true
        }
      },
      commentPanelPosition: {
        data: [],
        dirty: null,
        ableToChange: null
      },
      commentHistory: {
        reopening: {}
      },
      commentReaction: {},
      commentReactionLoadStatus: {},
      messagePosition: {
        position: [],
        isInit: false,
        commentId: null,
        mentionId: null
      },
      fetchStatus: {
        currentUser: {
          status: 'loaded',
          isContinuous: false
        },
        messages: {
          status: 'loaded',
          isContinuous: false,
          options: {
            resetWhenSuiteTokenChange: true
          }
        },
        suitePublicPermission: {
          status: 'loaded',
          isContinuous: false,
          options: {
            resetWhenSuiteTokenChange: true
          }
        },
        userGuide: {
          status: 'loaded',
          isContinuous: false
        },
        wikiPageTreeFetchInitDataV2: {
          status: 'loaded',
          isContinuous: false,
          options: {
            spaceId: '6919728620512591873'
          }
        },
        comments: {
          status: 'loaded',
          isContinuous: false,
          options: {
            resetWhenSuiteTokenChange: true
          }
        },
        recentWikiInSuiteBackNav: {
          status: 'loaded',
          isContinuous: false
        },
        objPaths: {
          status: 'loaded',
          isContinuous: false,
          options: {
            resetWhenSuiteTokenChange: true
          }
        },
        currentSuite: {
          status: 'loaded',
          isContinuous: false,
          options: {
            resetWhenSuiteTokenChange: true
          }
        },
        userPermissionOnSuite: {
          status: 'loaded',
          isContinuous: false,
          options: {
            resetWhenSuiteTokenChange: true
          }
        }
      },
      error: {},
      router: {
        location: {
          pathname: '/wiki/wikcnKfKveNqJfO1UDMaLbSkibf',
          search: '',
          hash: '',
          isInitial: true,
          isPathChanged: true
        }
      },
      ui: {
        currentModals: []
      },
      networkState: {
        connected: true
      },
      userSettings: {
        enable_auto_capitalize: 1,
        lang_correction_perm: 0,
        src_lang: 'zh',
        permission_type: 2,
        is_user_translate_vip: false,
        smart_compose_setting: true,
        enable_auto_translate_doc_body: true,
        allow_share_outside: true,
        smart_compose_personalization_setting: false,
        enable_auto_translate_doc_comment: true,
        global_display_type: 0,
        enable_auto_translate: false,
        shield_auto_translate_langs: [],
        languages_display_type: {},
        target_lang: ''
      },
      userPreference: {
        dontAskBeforeUpload: 0,
        dontAskAgainOpenAllShareSwitch: 0
      },
      template: {
        isTemplateMode: false,
        isTemplateVisible: false,
        templateList: [],
        recommendTemplates: [],
        recommendTemplatesV2: []
      },
      like: {
        globalLike: {
          count: 0,
          likeId: null,
          detail: {
            isOpen: false,
            hasMore: false,
            likes: []
          },
          recentHasMore: false,
          recentLikes: [],
          hasLikedFromLocal: null
        }
      },
      findReplace: {
        isOpen: false,
        showOnlyFindRow: true,
        findText: '',
        replaceText: '',
        isFinding: false,
        isReplacingAll: false,
        result: {
          selectedMatchIndex: 0,
          total: 0,
          canReplaceSelected: false,
          canReplaceAll: false
        }
      },
      translate: {
        status: {
          translating: false,
          translated: false,
          error: '',
          translate_start: false,
          translate_exiting: false,
          comment_enable_translate: false
        },
        config: {
          target_lang: 'en',
          src_lang: 'zh',
          display_type: 2,
          enable_auto_translate: false,
          supported_src_langs: [
            'zh',
            'ja',
            'en',
            'th'
          ],
          enable_auto_translate_doc_body: false,
          enable_auto_translate_doc_comment: false,
          translation_view: 0,
          view_target_lang: ''
        },
        originClientVars: null,
        view: {
          type: 0,
          isOpenHistory: false
        }
      },
      leanModeConfig: {
        folderHidden: false,
        favoritesHidden: false,
        pinDragDisabled: false,
        wikiHidden: false,
        searchLimited: false,
        fetchPartData: false
      },
      objSettings: {
        dark_watermark: {
          enable: 1,
          url: 'https://sf3-cn.feishucdn.com/obj/eesecsvc/ed4df3404cc7437982370d0c4ce41007_3.png'
        },
        enable_watermark: 0
      },
      search: {
        currentSearchTab: 10,
        currentRecentTab: 0,
        currentSearchedUsers: [
          {
            id: '6847336307744587777',
            owner_id: '',
            avatar_url: 'https://s1-fs.pstatp.com/static-resource/v1/22b7ea64-17d3-4fea-abd4-d1c57feca3ag~?image_size=72x72&cut_type=default-face&quality=&format=jpeg&sticker_format=.webp',
            owner_name: '',
            cn_name: 'BearWeb E2E 测试账号',
            en_name: 'BearWeb E2E 测试账号',
            department_name: '',
            isChosen: false
          }
        ],
        currentSearchedChats: [],
        currentSearchedFolders: [],
        currentOpenTime: [],
        currentSearchedWikiSpaces: [
          {
            id: '-1',
            name: '全部知识库',
            desc: '',
            isChosen: false
          }
        ],
        currentSearchFileType: '',
        currentSearchResult: {},
        currentSearchLoadType: 'normal',
        currentSearchOffset: 0,
        currentSearchDemand: {
          keyword: '',
          source: 'search'
        },
        isChatCandidateItemsShown: false,
        isUserCandidateItemsShown: false,
        isRelatedResultBtnShown: false,
        isAdvanceSearchByGlobalSearchEnable: false,
        isMoreRecentBtnShown: false,
        isAdvanceSearchIconShown: false,
        isSearchHistoryShown: true,
        isSearchIconTooltipShown: false,
        isSearchWikiOnly: true,
        isBrowseHistoryShown: true
      },
      folderTreeExpandedKeys: [],
      permissionUserMap: {},
      currentDraggingItems: {},
      multiStageRender: {
        Doc: {
          numberStage: 2,
          simpleStageSet: {},
          hasTimedOut: true
        },
        Wiki: {
          numberStage: 1,
          simpleStageSet: {},
          hasTimedOut: true
        }
      },
      isv: {
        config: {},
        indexes: []
      },
      teamSpaceCoverList: [],
      'export': {
        exporting: false
      },
      account: {
        has_pwd: true,
        credentials: [],
        user_info: {}
      }
    },
    indexes: {
      selectedFileMetas: [],
      staredFileMetas: [],
      shareListMetas: [],
      pinnedFileMetas: [],
      objPaths: {
        doccneC9ABpSQGVnWSJiCTiPnmg: []
      },
      currentPath: [],
      currentFileToken: '',
      shareObjectTokens: [],
      myObjectTokens: [],
      recentObjectTokens: [],
      recentObjectTokensInBackNav: [],
      folderTokenListMap: {},
      unorderedFolderTokenListMap: {},
      shareFolderTokens: [],
      rootDustbinTokens: [],
      hiddenShareFolderTokens: [],
      mySpaceFolderTokens: [],
      teamSpaceTokens: [],
      dustbinChildren: {},
      dustbinSpaceList: [],
      selectedDustbinSpaceId: '0',
      dustbinListMap: {},
      collectionIds: [],
      collectionTokens: []
    },
    entities: {
      folderPermissions: {},
      teamSpacePermissions: {},
      roleMembers: {},
      permissions: {
        doccneC9ABpSQGVnWSJiCTiPnmg: {
          isPermissionOpened: false,
          hasLinkPasswordState: false,
          permissions: [
            8,
            4,
            2,
            1
          ],
          isPermissionClosed: false,
          anonymousVerify: false,
          ignoreAnyoneLink: false,
          isOwner: true,
          isChanged: false,
          permission_status_code: 0,
          relationshipLevel: 1,
          print: 1,
          hasLinkPassword: false,
          externalAccess: true,
          contactUrl: '',
          canCross: true,
          inviteExternal: true,
          'export': 1,
          copy: 1,
          publicPermission: {
            securityEntity: 0,
            shareEntity: 2,
            commentEntity: 0,
            linkShareEntity: 1
          },
          publicPermissionState: {
            securityEntity: 0,
            shareEntity: 2,
            commentEntity: 0,
            linkShareEntity: 1
          },
          type: 2,
          isFromNotification: false
        }
      },
      isInEditMode: true,
      isDocLockedByPlugin: false,
      users: {
        '6847336307744587777': {
          avatar_url: 'https://s1-fs.pstatp.com/static-resource/v1/22b7ea64-17d3-4fea-abd4-d1c57feca3ag~?image_size=72x72&cut_type=default-face&quality=&format=jpeg&sticker_format=.webp',
          cn_name: 'BearWeb E2E 测试账号',
          email: '',
          en_name: 'BearWeb E2E 测试账号',
          id: '6847336307744587777',
          mobile: '5443',
          name: 'BearWeb E2E 测试账号',
          suid: '6847336307744587777',
          tenant_id: '6847336307660685313',
          tenant_name: 'E2E 测试团队',
          user_type: '1',
          tenant_tag: '0',
          department_id: '0',
          department_name: '',
          can_cross: true,
          isOverseaSpace: false,
          is_manager: true,
          is_singleproduct: false,
          is_anonymous: false,
          is_able_add_members: true
        },
        '6919816412676505603': {
          avatar_url: 'https://s3-fs.pstatp.com/static-resource/v1/bd925bb8-6385-4519-bf1a-432d601063eg~?image_size=72x72&cut_type=default-face&quality=&format=jpeg&sticker_format=.webp',
          cn_name: '曾宝浩',
          email: '',
          en_name: '曾宝浩',
          id: '6919816412676505603',
          mobile: '',
          name: '曾宝浩',
          suid: '6919816412676505603',
          tenant_id: '6847336307660685313',
          tenant_name: 'E2E 测试团队',
          user_type: '1',
          tenant_tag: '0',
          department_id: '',
          department_name: '',
          can_cross: false,
          isOverseaSpace: false,
          is_manager: false,
          is_singleproduct: false,
          is_anonymous: false,
          is_able_add_members: false
        }
      },
      nodes: {
        nodcnzM46OSwBOiY0b0bpYfbJph: {
          create_uid: '',
          owner_id: '6847336307744587777',
          edit_uid: '6847336307744587777',
          sharer_id: '',
          create_time: 0,
          edit_time: 0,
          my_edit_time: 0,
          pin_time: 0,
          open_time: 0,
          share_time: 0,
          activity_time: 0,
          is_pined: false,
          is_stared: false,
          is_subscribed: false,
          template_id: '',
          is_template: false,
          index: 1,
          expire_time: 0,
          space_id: '',
          description: '',
          name: '',
          title: '',
          token: 'nodcnzM46OSwBOiY0b0bpYfbJph',
          obj_token: 'nodcnzM46OSwBOiY0b0bpYfbJph',
          type: 4,
          subtype: '',
          url: '',
          edit_user_name: '',
          owner_user_name: '',
          create_user_name: '',
          extra: null,
          create_source: -1,
          owner_type: 0,
          share_version: 0,
          icon_key: '',
          icon_type: 0,
          icon_fsunit: '',
          thumbnail: '',
          thumbnail_url: '',
          thumbnail_type: '',
          thumbnail_secret: '',
          thumbnail_nonce: '',
          icon: '',
          icon_encrypted_type: 0,
          icon_nonce: '',
          fatherToken: '',
          fatherType: null,
          is_external: false,
          has_perm: true,
          external_hint: 1,
          app_id: '',
          wiki_space_id: '',
          wiki_space_name: '',
          wiki_subtype: null,
          wiki_sub_token: '',
          wiki_homepage_obj_token: '',
          wiki_homepage_obj_type: null,
          wiki_homepage_wikiToken: '',
          cover_id: '',
          cover_thumbnail: '',
          cover_icon: '',
          is_share_root: false,
          is_hidden: false
        }
      },
      objs: {
        doccneC9ABpSQGVnWSJiCTiPnmg: {
          create_uid: '6847336307744587777',
          owner_id: '6847336307744587777',
          edit_uid: '',
          sharer_id: '',
          create_time: 1611124869,
          edit_time: 1611133044,
          my_edit_time: 0,
          pin_time: 0,
          open_time: 0,
          share_time: 0,
          activity_time: 0,
          is_pined: false,
          is_stared: false,
          is_subscribed: false,
          template_id: '',
          is_template: false,
          index: 1,
          expire_time: 0,
          space_id: '',
          description: '',
          name: '',
          title: '【勿删勿动】wiki主路径测试',
          token: '',
          obj_token: 'doccneC9ABpSQGVnWSJiCTiPnmg',
          type: 2,
          subtype: '',
          url: 'https://zhpqwx60p6.feishu.cn/docs/doccneC9ABpSQGVnWSJiCTiPnmg',
          edit_user_name: 'BearWeb E2E 测试账号',
          owner_user_name: 'BearWeb E2E 测试账号',
          create_user_name: 'BearWeb E2E 测试账号',
          extra: null,
          create_source: 18,
          owner_type: -1,
          share_version: -1,
          icon_key: '',
          icon_type: 0,
          icon_fsunit: '',
          thumbnail: '',
          thumbnail_url: '',
          thumbnail_type: '',
          thumbnail_secret: '',
          thumbnail_nonce: '',
          icon: '',
          icon_encrypted_type: 0,
          icon_nonce: '',
          fatherToken: '',
          fatherType: null,
          is_external: false,
          has_perm: true,
          external_hint: 1,
          app_id: '',
          wiki_space_id: '',
          wiki_space_name: '',
          wiki_subtype: null,
          wiki_sub_token: '',
          wiki_homepage_obj_token: '',
          wiki_homepage_obj_type: null,
          wiki_homepage_wikiToken: '',
          delete_flag: 0,
          revision: 0,
          create_date: '20210120',
          size: '',
          path_count: 0,
          parent_path_name: '',
          parent_token: '',
          parent_type: null
        }
      },
      collectorEntities: {}
    },
    pc: {
      backUrlMap: {}
    },
    doc: {
      etherpad: {
        clientVars: {
          code: 0,
          collab_client_vars: {
            apool: {
              nextNum: 16,
              numToAttrib: {
                '0': [
                  'align',
                  'left'
                ],
                '1': [
                  'insertorder',
                  'first'
                ],
                '2': [
                  'lmkr',
                  '1'
                ],
                '3': [
                  'author',
                  '6847336307744587777'
                ],
                '4': [
                  'lineguid',
                  'yT02sG'
                ],
                '5': [
                  'blockquote',
                  'blockquote'
                ],
                '6': [
                  'lineguid',
                  'aWypPB'
                ],
                '7': [
                  'heading',
                  'h1'
                ],
                '8': [
                  'lineguid',
                  'aMUfPU'
                ],
                '9': [
                  'lineguid',
                  'Yme36u'
                ],
                '10': [
                  'lineguid',
                  'b8sW9s'
                ],
                '11': [
                  'lineguid',
                  'eHpdY7'
                ],
                '12': [
                  'lineguid',
                  'pKdnNx'
                ],
                '13': [
                  'lineguid',
                  'CCCdSa'
                ],
                '14': [
                  'lineguid',
                  '7uNh8W'
                ],
                '15': [
                  'lineguid',
                  'KIrjGA'
                ]
              }
            },
            bg_image: '',
            comment_rev: 0,
            doc_comment_rev: 0,
            doc_version: 1,
            existedAuthorData: [
              {
                avatar_url: '',
                color_id: 0,
                create_time: 0,
                cursor_info: null,
                cursor_info_str: '',
                member_id: '',
                pre_release: 0,
                unit_id: '',
                user_email: '',
                user_id: '6847336307744587777',
                user_mobile: '',
                user_name: ''
              }
            ],
            initialAttributedText: {
              '0': {
                attribs: '*0*1*2+1*3+f*3*4|1+1*3*5*1*2+1*3*6+y*3|1+1*3*7*1*2+1*3*8+9*3|1+1*3*5*1*2+1*3*9+13*3|1+1*3*7*1*2+1*3*a+a*3|1+1*3*5*1*2+1*3*b+p*3|1+1*3*7*1*2+1*3*c+b*3|1+1*3*5*1*2+1*3*d+u*3|1+1*3*7*1*2+1*3*e+a*3|1+1*3*5*1*2+1*3*f+t*3|2+2|2+2',
                text: '*【勿删勿动】wiki主路径测试\n*这里你可以替换为所需图片（公司LOGO、产品图片、业务相关图片等）。\n*🎯  愿景和目标\n*这里你可以描述知识空间建设的目标和意义，有利于团队成员理解目标并朝着目标努力。\n*⛳️  知识空间简介\n*这里你可以介绍知识空间的主要内容和面向的成员群体。\n*⭐️  常用文档和链接\n*这里你可以将需要关注的文档链接粘贴在此处，方便成员快速访问。\n*💡  知识空间帮助\n*这里你可以添加知识库使用规范、操作流程、管理员联系方式等。\n\n\n\n'
              }
            },
            initialAttributedTexts: {
              attribs: {
                '0': '*0*1*2+1*3+f*3*4|1+1*3*5*1*2+1*3*6+y*3|1+1*3*7*1*2+1*3*8+9*3|1+1*3*5*1*2+1*3*9+13*3|1+1*3*7*1*2+1*3*a+a*3|1+1*3*5*1*2+1*3*b+p*3|1+1*3*7*1*2+1*3*c+b*3|1+1*3*5*1*2+1*3*d+u*3|1+1*3*7*1*2+1*3*e+a*3|1+1*3*5*1*2+1*3*f+t*3|2+2|2+2'
              },
              cols: {},
              rows: {},
              text: {
                '0': '*【勿删勿动】wiki主路径测试\n*这里你可以替换为所需图片（公司LOGO、产品图片、业务相关图片等）。\n*🎯  愿景和目标\n*这里你可以描述知识空间建设的目标和意义，有利于团队成员理解目标并朝着目标努力。\n*⛳️  知识空间简介\n*这里你可以介绍知识空间的主要内容和面向的成员群体。\n*⭐️  常用文档和链接\n*这里你可以将需要关注的文档链接粘贴在此处，方便成员快速访问。\n*💡  知识空间帮助\n*这里你可以添加知识库使用规范、操作流程、管理员联系方式等。\n\n\n\n'
              }
            },
            resources: {
              iframes: null,
              link: null
            },
            rev: 2,
            time: 1617958469,
            title: '【勿删勿动】wiki主路径测试',
            title_color: ''
          },
          colorPalette: [
            '#E94D3D',
            '#F09A38',
            '#F7CD46',
            '#79D572',
            '#78C6F5',
            '#347BF6',
            '#5759CE',
            '#E9455A',
            '#4CA490',
            '#A3CF56',
            '#EC3778',
            '#76A635',
            '#EA6B2C',
            '#B6E064',
            '#469AE9',
            '#8D5AD9',
            '#A3302A',
            '#738C36',
            '#97CDF6',
            '#E93324',
            '#76DDD0',
            '#675DC6',
            '#78FA4C',
            '#5EC59A',
            '#BD67E1',
            '#317183',
            '#306EBC',
            '#FF8047',
            '#83D7E6',
            '#982D4E',
            '#43906B',
            '#E56F2E',
            '#57B58A',
            '#D6622B',
            '#D35680',
            '#4467E3',
            '#7691F4',
            '#76A534',
            '#7B3897'
          ],
          entities: {
            users: {
              '6847336307744587777': {
                avatar_url: 'https://s1-fs.pstatp.com/static-resource/v1/22b7ea64-17d3-4fea-abd4-d1c57feca3ag~?image_size=72x72&cut_type=default-face&quality=&format=jpeg&sticker_format=.webp',
                cn_name: 'BearWeb E2E 测试账号',
                en_name: 'BearWeb E2E 测试账号',
                user_email: '',
                user_mobile: ''
              }
            }
          },
          msg: 'Success',
          numConnectedUsers: 1,
          permission_status_code: 0,
          permissions: [
            1,
            2,
            4,
            8,
            16,
            32,
            64
          ],
          readonly: false,
          retry: 0,
          token: 'doccneC9ABpSQGVnWSJiCTiPnmg',
          type: 'CLIENT_VARS',
          user_id: '6847336307744587777',
          user_info: {
            avatar_url: 'https://s1-fs.pstatp.com/static-resource/v1/22b7ea64-17d3-4fea-abd4-d1c57feca3ag~?image_size=72x72&cut_type=default-face&quality=&format=jpeg&sticker_format=.webp',
            color_id: 0,
            create_time: 0,
            cursor_info: null,
            cursor_info_str: '',
            member_id: '',
            pre_release: 0,
            unit_id: '',
            user_email: '',
            user_id: '',
            user_mobile: '',
            user_name: 'BearWeb E2E 测试账号'
          }
        },
        editor: 'oHOBXM',
        isTitleBlank: false,
        isBodyBlank: false,
        isFullscreenMode: false,
        isDocRendered: false
      },
      jira: {
        syncStatus: {},
        authStatus: {
          authUrl: '',
          authState: -2,
          baseUrl: '',
          jiraType: '',
          canApply: false,
          adminInfo: {
            id: '',
            en_name: '',
            cn_name: ''
          }
        },
        initDataMap: {}
      }
    },
    sheet: {
      toolbar: {
        cellStatus: {},
        rangeStatus: {},
        isSingleRow: false,
        rangeConditionFormatRules: []
      },
      status: {
        frozen: true,
        emptySheet: false,
        online: true,
        timeMachine: false,
        halt: false
      },
      formula: {
        visible: false
      },
      findbar: {
        visible: false,
        replaceVisible: false,
        findFocus: false
      },
      coord: {
        row: 0,
        col: 0
      },
      filter: {
        visible: false
      },
      formatPainter: {
        painterFormatting: false
      },
      comment: {
        toggle: false,
        target: null,
        data: {},
        reopenCommentId: null,
        mask: true
      },
      history: {
        visible: false,
        localVisible: false
      },
      dropdownMenu: {
        visible: false
      },
      fetchState: {
        spreadState: {
          loading: true,
          loaded: false,
          totalSheet: 0,
          loadedSheet: 0,
          activeSheetLoaded: false
        },
        sheetState: {}
      },
      embedToolbar: {
        visible: false,
        onComment: null,
        commentable: false,
        activeSheetId: ''
      },
      fileExport: {
        isExport: false
      },
      clientVars: null,
      titleInput: {
        isFocus: false
      },
      embedSheet: {
        mountedList: []
      },
      permission: {
        hasPermission: true,
        colPermission: true,
        rowPermission: true,
        sheetPermission: true
      },
      protection: {
        dialog: {
          isShow: false,
          protectionType: 0,
          range: null,
          permId: '',
          permission: [],
          sheetId: '',
          note: ''
        },
        panel: {
          isShow: false
        }
      },
      chart: {
        isShowChartSettingPanel: false,
        chartPreviewColorType: null,
        isShowChartSelectionModal: false
      },
      featureTips: {
        chart: false,
        protection: false
      },
      highlightBar: {
        visible: false
      },
      permissions: [],
      chartSettingPanelOptions: {
        settingPanelType: 'CHART_SETUP'
      },
      translateMode: {
        isActive: false
      },
      conditionFormat: {
        isPanelShow: false,
        isShowSelectionModal: false
      },
      smartableTransformState: {
        isProcessing: false,
        viewType: 0,
        isShowRangeSelector: false
      },
      zoom: {},
      crossHightlight: {},
      sheetMode: [],
      gridLineHidden: {}
    },
    wiki: {
      wikiInfos: {
        wikcnKfKveNqJfO1UDMaLbSkibf: {
          wikiToken: 'wikcnKfKveNqJfO1UDMaLbSkibf',
          objToken: 'doccneC9ABpSQGVnWSJiCTiPnmg',
          objType: 2,
          spaceId: '6919728620512591873',
          areaId: '6919728620512608257'
        }
      },
      pageTree: {
        rootNode: {
          spaceId: '6919728620512591873',
          objType: 2,
          children: [
            {
              spaceId: '6919728620512591873',
              children: [],
              id: 'wikcnce2Vfhd0ahTIuJPkFsWjYd',
              objToken: 'doccnp3sCpKW4dmlIaZtCOIT7ee',
              objType: 2,
              wikiToken: 'wikcnce2Vfhd0ahTIuJPkFsWjYd',
              parentId: '',
              title: '',
              childrenLen: 1,
              type: 'wiki',
              seqId: 1,
              sortId: 256,
              areaId: '6919728620512608257',
              level: 1
            },
            {
              spaceId: '6919728620512591873',
              children: [],
              id: 'wikcnmv7v9mUgXOUtRxSzBNJL6f',
              objToken: 'doccnqOOgi9llqHhoHStoK1nuZb',
              objType: 2,
              wikiToken: 'wikcnmv7v9mUgXOUtRxSzBNJL6f',
              parentId: '',
              title: '【勿删勿动】e2e历史记录测试',
              childrenLen: 0,
              type: 'wiki',
              seqId: 2,
              sortId: 512,
              areaId: '6919728620512608257',
              level: 1
            },
            {
              spaceId: '6919728620512591873',
              children: [],
              id: 'wikcnNmmK0P3tl79dBakVciywzh',
              objToken: 'doccnCar67C5uF4wrpuy8Y6RNbb',
              objType: 2,
              wikiToken: 'wikcnNmmK0P3tl79dBakVciywzh',
              parentId: '',
              title: '【勿删勿动】最近访问测试',
              childrenLen: 0,
              type: 'wiki',
              seqId: 3,
              sortId: 768,
              areaId: '6919728620512608257',
              level: 1
            },
            {
              spaceId: '6919728620512591873',
              children: [],
              id: 'wikcnoOC3IovaovcyY7DLkpqsih',
              objToken: 'doccnJqw8M0c2BICS3eNheRXiwe',
              objType: 2,
              wikiToken: 'wikcnoOC3IovaovcyY7DLkpqsih',
              parentId: '',
              title: '',
              childrenLen: 0,
              type: 'wiki',
              seqId: 4,
              sortId: 1024,
              areaId: '6919728620512608257',
              level: 1
            },
            {
              spaceId: '6919728620512591873',
              children: [],
              id: 'wikcnZTWsT4LpbIXSI6tTJWHyEc',
              objToken: 'doccn68Xp0AA5ygp7qa6h0BqNHc',
              objType: 2,
              wikiToken: 'wikcnZTWsT4LpbIXSI6tTJWHyEc',
              parentId: '',
              title: '3',
              childrenLen: 0,
              type: 'wiki',
              seqId: 5,
              sortId: 1280,
              areaId: '6919728620512608257',
              level: 1
            },
            {
              spaceId: '6919728620512591873',
              children: [],
              id: 'wikcnahLTSoSRj88jAwh2C2MVxh',
              objToken: 'shtcndfw5vM7LM7zuo22ktxESac',
              objType: 3,
              wikiToken: 'wikcnahLTSoSRj88jAwh2C2MVxh',
              parentId: '',
              title: '【勿删勿动】e2e banner测试专用',
              childrenLen: 0,
              type: 'wiki',
              seqId: 6,
              sortId: 1792,
              areaId: '6919728620512608257',
              level: 1
            }
          ],
          id: '',
          objToken: '',
          wikiToken: '',
          parentId: 'root_6919728620512591873',
          title: 'FALSE_NODE_TITLE',
          childrenLen: 6,
          seqId: 0,
          type: 'SPACE',
          level: 0
        },
        singleTreeRootNode: null,
        expandedKeys: [
          ''
        ],
        memberId: '1620217089373',
        isSingleTree: false,
        singleNode: null,
        isTreeWrapScroll: false,
        loadingKeys: [],
        isFetchingPageTree: false,
        renameNode: null
      },
      spaceIdList: [],
      spaces: {
        '6919728620512591873': {
          spaceId: '6919728620512591873',
          spaceName: '【勿删勿动】e2e主路径测试',
          spaceIcon: 'https://sf3-eecdn-tos.pstatp.com/img/mosaic-legacy/241f5000f77939160d304~240x240.jpg',
          homePage: {
            wikiToken: 'wikcnKfKveNqJfO1UDMaLbSkibf',
            objType: 2,
            objToken: 'doccneC9ABpSQGVnWSJiCTiPnmg'
          },
          description: '',
          attr: 1,
          isStar: false,
          spaceCover: {
            origin: 'https://lf1-eecdn-tos.pstatp.com/obj/creation-image-system/wiki-cover-space-V-06-L.png',
            thumbnail: 'https://lf1-eecdn-tos.pstatp.com/obj/creation-image-system/wiki-thumb-cover-space-V-06-L.png',
            key: 'wiki-cover-space-V-06-L.png',
            isGraphDark: false
          },
          spaceVersion: 1,
          defaultAreaId: '6919728620512608257'
        }
      },
      permission: {
        role: 4,
        memberProp: 255,
        editable: {
          canCreateSpace: true,
          canDeleteSpace: true,
          canRestoreSpace: true,
          canAddManager: true,
          canDelManager: true,
          isTenantDdmin: true
        },
        spacePermMap: {
          '6919728620512591873': {
            role: 4,
            memberProp: 255,
            timestamp: 1617958466411
          }
        },
        permRequestConfig: null
      },
      ui: {
        isSidebarVisible: true,
        isSidebarExpanderVisible: true,
        isSpaceSettingVisible: false,
        isSpaceLoadingVisible: false,
        isSectionNavVisible: false,
        isHoverSectionNavVisible: false,
        isSectionNavSingleVisible: false,
        isWikiReadonly: false
      },
      currentWikiMode: {
        mode: 'NORMAL'
      },
      isSubscribe: false
    }
  }

  // console.log(curStore.appState.leanModeConfig.wikiHidden)

  export default curStore;