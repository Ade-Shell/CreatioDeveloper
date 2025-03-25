define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "1e98c6dd-0509-423d-86e1-2bb2f2a2e8c4",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"icon": "copilot-action-button-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"visible": true
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_np2m71b",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_np2m71b"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_20tmnno",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_20tmnno"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_3stk8u5",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn8_bcuw008",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn8_bcuw008",
					"multiline": false,
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_lh5tadw",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn11_uiugegk",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn11_uiugegk",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_rp0qomm",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_rp0qomm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_5fwajca",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5fwajca_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Type",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_wku9qxz",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_wku9qxz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_om6olst",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_om6olst",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Percent",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent_xww7zu0",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_xww7zu0",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true,
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_jmw96ft",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_26lq8a2",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_26lq8a2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn2_4qa54ih",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn2_4qa54ih",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_onanazv",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn10_r80v6hr",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn10_r80v6hr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_g7oe94t",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_g7oe94t_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_cxic95g",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_g7oe94t",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_oebtv26",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_cxic95g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_mkjfvj8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_mkjfvj8_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_oebtv26",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_j3cfuaz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_j3cfuaz_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_keb7tgmDS"
						}
					}
				},
				"parentName": "FlexContainer_oebtv26",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_a4co8y0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_a4co8y0_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_oebtv26",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_5ywi2c5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_5ywi2c5_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitsGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_a4co8y0",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_zubuerd",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_zubuerd_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_a4co8y0",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_n2km6xj",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_n2km6xj_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_n2km6xj_GridDetail_keb7tgm",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_keb7tgm"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_n2km6xj_SearchValue",
							"GridDetailSearchFilter_n2km6xj_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_oebtv26",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_x92tddh",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_g7oe94t",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitsGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_keb7tgm",
					"activeRow": "$GridDetail_keb7tgm_ActiveRow",
					"selectionState": "$GridDetail_keb7tgm_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_keb7tgm_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_keb7tgmDS_Id",
					"columns": [
						{
							"id": "ec67dca0-0d37-67cc-2c88-2365f59ada2a",
							"code": "GridDetail_keb7tgmDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_keb7tgmDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "a9e7c722-fb4a-3f80-adff-d74bd24938c7",
							"code": "GridDetail_keb7tgmDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_keb7tgmDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "8565561a-f02c-05ed-262d-f6ffabce2c55",
							"code": "GridDetail_keb7tgmDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_keb7tgmDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "59f592bb-dd3b-43bf-cd41-3e0de10c9ada",
							"code": "GridDetail_keb7tgmDS_UsrComment",
							"caption": "#ResourceString(GridDetail_keb7tgmDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "dd897f7e-edf6-a4a5-cf82-da7ecd7292fe",
							"code": "GridDetail_keb7tgmDS_UsrComment",
							"caption": "#ResourceString(GridDetail_keb7tgmDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "c63abb7b-b888-e17d-8865-0d11d5188c75",
							"code": "GridDetail_keb7tgmDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_keb7tgmDS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_x92tddh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_keb7tgm_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_keb7tgmDS",
							"filters": "$GridDetail_keb7tgm | crt.ToCollectionFilters : 'GridDetail_keb7tgm' : $GridDetail_keb7tgm_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_keb7tgm_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_keb7tgm_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_keb7tgmDS",
							"filters": "$GridDetail_keb7tgm | crt.ToCollectionFilters : 'GridDetail_keb7tgm' : $GridDetail_keb7tgm_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_keb7tgm_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_keb7tgm_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_keb7tgm_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitsGridDetail",
							"filters": "$GridDetail_keb7tgm | crt.ToCollectionFilters : 'GridDetail_keb7tgm' : $GridDetail_keb7tgm_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_keb7tgm_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_keb7tgm_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_keb7tgmDS",
							"filters": "$GridDetail_keb7tgm | crt.ToCollectionFilters : 'GridDetail_keb7tgm' : $GridDetail_keb7tgm_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_keb7tgm_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrColumn2_4qa54ih": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrPrice_np2m71b": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_20tmnno": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrOfferType_wku9qxz": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_om6olst": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrColumn8_bcuw008": {
						"modelConfig": {
							"path": "PDS.UsrColumn8"
						}
					},
					"PDS_UsrCountry_26lq8a2": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrColumn10_r80v6hr": {
						"modelConfig": {
							"path": "PDS.UsrColumn10"
						}
					},
					"PDS_UsrColumn11_uiugegk": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrType_rp0qomm": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_xww7zu0": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_xww7zu0"
						}
					},
					"GridDetail_keb7tgm": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_keb7tgmDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_n2km6xj_GridDetail_keb7tgm",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_keb7tgmDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_keb7tgmDS.UsrVisitDateTime"
									}
								},
								"GridDetail_keb7tgmDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_keb7tgmDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_keb7tgmDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_keb7tgmDS.CreatedOn"
									}
								},
								"GridDetail_keb7tgmDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_keb7tgmDS.UsrComment"
									}
								},
								"GridDetail_keb7tgmDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_keb7tgmDS.UsrParentRealty"
									}
								},
								"GridDetail_keb7tgmDS_Id": {
									"modelConfig": {
										"path": "GridDetail_keb7tgmDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_keb7tgmDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_xww7zu0": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_keb7tgmDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					/*Terrasoft.showInformation("My button was pressed.");*/
					var price = await request.$context.PDS_UsrPrice_np2m71b;
					console.log("Price = " + price);
					request.$context.PDS_UsrPrice_np2m71b = price * 1.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      					if (request.attributeName === 'PDS_UsrPrice_np2m71b' || 				             // if price changed
					    request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent_xww7zu0' ) { 		// or percent changed
						var price = await request.$context.PDS_UsrPrice_np2m71b;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_xww7zu0;
						var commission = price * percent / 100;
						request.$context.PDS_UsrColumn11_uiugegk = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			
			/* The validator type must contain a vendor prefix.
			
			Format the validator type in PascalCase. */
			
			"usr.DGValidator": {
				
				validator: function (config) {
					
					return function (control) {
						
						let value = control.value;
						
						let minValue = config.minValue;
						
						let valueIsCorrect = value >= minValue;
						
						var result;
						
						if (valueIsCorrect) {
							
							result = null;
						
						} else {
							
							result = {
								
								"usr.DGValidator": { 
									
									message: config.message
								
								}
							
							};
						
						}
						
						return result;
					
					};
				
				},
				
				params: [
					
					{
						
						name: "minValue"
					
					},
					
					{
						
						name: "message"
					
					}
				
				],
				
				async: false
			
			}
		
		}/**SCHEMA_VALIDATORS*/
	};
});