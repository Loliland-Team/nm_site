import React, { useState } from 'react'
import * as f from '../../utils/functions.js';
import { TaskElement } from './TaskElement.js'
import { Link } from 'react-router-dom'

export function TaskPage(props) {
	let p = props.page,
		s = props.store

	let [load, setLoad] = useState(false)

	let tasks = [];

	if (!f.loadedStyles.WorkPage.tasks.MasterDetail.MasterDetail) f.workMasterDetail()
	if (!f.loadedStyles.WorkPage.controls.masterDetail) f.workControls('masterDetail')
	if (!f.loadedStyles.WorkPage.controls.grid) f.workControls('grid')
	if (!f.loadedStyles.WorkPage.controls.baseList) f.workControls('baseList')
	if (!f.loadedStyles.WorkPage.controls.baseTree) f.workControls('baseTree')
	if (!f.loadedStyles.WorkPage.controls.markerComponent) f.workControls('markerComponent')
	if (!f.loadedStyles.WorkPage.tasks.registry.Registry) f.workTRRegistry()
	if (!f.loadedStyles.WorkPage.person.popup.previewController) f.workPersonPopupPreview()
	if (!f.loadedStyles.WorkPage.edo3.browser) f.workEDO3Browser()
	if (['tasks-from-me', 'tasks-returned'].includes(p)) {
		if (!f.loadedStyles.WorkPage.tasks.registry.FromMe) f.workTRFromMe()
	} else {
		if (!f.loadedStyles.WorkPage.tasks.registry.InWork) f.workTRInWork()
	}
	if (!f.loadedStyles.WorkPage.tasks['MasterView/MasterView']) f.workTasksStyle('MasterView/MasterView')

	s.tasks.forEach(task => {
		if (p === 'tasks-in-work') if (task.ispoln === s.user_info.user_id) tasks.push(<TaskElement key={task.id} task={task} page={p} store={s} />)
		if (p === 'tasks-from-me') if (task.author_id === s.user_info.user_id) tasks.push(<TaskElement key={task.id} task={task} page={p} store={s} />)
	})
	tasks.reverse()

	return (
		<div className={'edws-tasks-InWorkMD sabyPage-MainLayout__workspaceTemplate ws-workspace-width-1600'} tabIndex={0}>
			<div className={'hint-HintBannerContainer controls_Hint_theme-default edws-tasks-InWork-banner'} tabIndex={0}>
				<div className={'edws3-Controller_ErrorContainer ws-flexbox'} tabIndex={0}>
					<div className={'controls-MasterDetail controls-MasterDetail_masterPosition-left  ws-flexbox controls_list_theme-default edws-MasterDetail ws-flexbox edws-tasks-InWorkMD edws-MasterDetail'} tabIndex={0}>
						<div className={'controls-MasterDetail_master controls-MasterDetail_master-contrast controls-MasterDetail_master_width'} style={{width: '30%', maxWidth: '750px', minWidth: '200px'}}>
							<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default edws-MasterArea_scroll edws-MasterArea_sabyPage edws-FromMe__master controls-MasterDetail_master-template controls-master-template-newDesign controls-master-template-newDesign-left controls-MasterDetail_master-template'} fixcompatible={1} tabIndex={0}>
								<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} style={{overscrollBehaviorY: 'auto'}} tabIndex={0}>
									<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
										<div className={'edws-MasterView controls-Scroll-containerBase_userContent'} tabIndex={0}>
											<div tabIndex={0}>
												<div tabIndex={-1} />
												<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default'} tabIndex={0}>
													<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
													<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_080ce2ad-7f99-4b4e-8544-b475481fc3d2 controls-GridControl__viewContainer'} tabIndex={0}>
														<div className={'controls_list_theme-default controls-itemActionsV_menu-hidden'} name={'gridWrapper'} tabIndex={0}>
															<div name={'grid'} className={'controls-Grid controls-Grid_master controls-Grid_part-fixed controls-Grid_grid-layout'} style={{gridTemplateColumns: '1fr'}} tabIndex={0}>
																<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-GridViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_delayed controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_080ce2ad-7f99-4b4e-8544-b475481fc3d2'}>
																	<div attr-data-qa={'key--1,ПапкаДокументов'} data-qa={'row'} item-key={'-1,ПапкаДокументов'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<Link to={'/work/tasks-in-work'}>
																			<div data-qa={'cell'} className={(['tasks-in-work', 'tasks-controlled', 'tasks-done'].includes(p) ? 'controls-StickyBlock  controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master js-controls-Grid__row-cell controls-Grid__row-cell_master ' + (['tasks-in-work', 'tasks-controlled', 'tasks-done'].includes(p) ? '' : 'controls-Grid__row-cell_relative') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + ([['tasks-in-work', 'tasks-controlled', 'tasks-done']].includes(p) ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (['tasks-in-work', 'tasks-controlled', 'tasks-done'].includes(p) ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master js-controls-Grid__row-cell controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} tabIndex={0} data-stickyblockid={45} style={{}}>
																				{['tasks-in-work', 'tasks-done', 'tasks-controlled'].includes(p) ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default content-xs'} /> : ''}
																				<div className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_s controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'controls_Layout_theme-default layout-MasterItem ws-inline-flexbox'} tabIndex={0}>
																						<div className={'layout-MasterItem__container layout-MasterItem__container_maxLineHeight ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline ws-align-items-baseline'}>
																							<div title={'Входящие'} data-qa={'layout-MasterItem__title'} className={'layout-MasterItem__title ws-ellipsis'}>Входящие</div>
																						</div>
																					</div>
																				</div>
																				<div className={'controls-StickyBlock__observationTarget_top'} data-stickyblockid={45} style={{top: '-2px'}} />
																				<div className={'controls-StickyBlock__observationTarget_top2'} data-stickyblockid={45} />
																				<div className={'controls-StickyBlock__observationTarget_top2Right'} data-stickyblockid={45} />
																				<div className={'controls-StickyBlock__observationTarget_bottomLeft'} data-stickyblockid={45} style={{bottom: '-2px'}} />
																				<div className={'controls-StickyBlock__observationTarget_bottomRight'} data-stickyblockid={45} style={{bottom: '-2px'}} />
																				<div className={'controls-StickyBlock__observationTarget_left'} data-stickyblockid={45} style={{left: '-2px'}} />
																				<div className={'controls-StickyBlock__observationTarget_right'} data-stickyblockid={45} style={{right: '-2px'}} />
																			</div>
																		</Link>
																	</div>
																	<div attr-data-qa={'key--2,ПапкаДокументов'} data-qa={'row'} item-key={'-2,ПапкаДокументов'} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_master controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-master controls-ListView__item_showActions'} tabIndex={0}>
																		<Link to={'/work/tasks-from-me'}>
																			<div data-qa={'cell'} className={(['tasks-from-me', 'tasks-returned'].includes(p) ? 'controls-StickyBlock  controls-background-master' : '') + ' controls-Grid__row-cell controls-Grid__cell_master js-controls-Grid__row-cell controls-Grid__row-cell_master ' + (['tasks-from-me', 'tasks-returned'].includes(p) ? '' : 'controls-Grid__row-cell_relative') + ' controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  ' + (['tasks-from-me', 'tasks-returned'].includes(p) ? 'controls-background-master' : '') + ' js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master ' + (['tasks-from-me', 'tasks-returned'].includes(p) ? 'controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master  controls-Grid__row-cell controls-Grid__cell_master js-controls-Grid__row-cell controls-Grid__row-cell_master controls-Grid__row-cell_default_min_height controls-TreeGrid__row-cell controls-TreeGrid__row-cell_master controls-TreeGrid__row-cell__node controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-master controls-Grid__row-cell-background-hover-master  controls-background-master js-controls-ListView__measurableContainer controls-Grid__row-cell__first-master controls-Grid__row-cell__last-master controls-Grid__row-cell_selected controls-Grid__row-cell_selected-master controls-Grid__row-cell_selected__first-master controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-master' : '')} tabIndex={0} data-stickyblockid={45} style={{}}>
																				{['tasks-from-me', 'tasks-returned'].includes(p) ? <div data-qa={'marker'} className={'controls-ListView__itemV_marker controls-ListView__itemV_marker_size_content-xs  controls-ListView__itemV_marker-master_topPadding-default controls-ListView__baseline_font-size controls-Grid__row-cell__content_baseline_default content-xs'} /> : ''}
																				<div className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingFirstCol_default controls-Grid__cell_spacingLastCol_s controls-Grid__row-cell_rowSpacingTop_default controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__item_background-hover_undefined controls-hover-background-master controls-Grid__cell_spacingFirstCol_default  controls-StickyBlock__content'} data-qa={'cell_content'} tabIndex={0}>
																					<div className={'controls_Layout_theme-default layout-MasterItem ws-inline-flexbox'} tabIndex={0}>
																						<div className={'layout-MasterItem__container layout-MasterItem__container_maxLineHeight ws-inline-flexbox ws-flex-nowrap ws-ellipsis ws-align-self-baseline ws-align-items-baseline'}>
																							<div title={'Исходящие'} data-qa={'layout-MasterItem__title'} className={'layout-MasterItem__title ws-ellipsis'}>Исходящие</div>
																						</div>
																					</div>
																				</div>
																				<div className={'controls-StickyBlock__observationTarget_top'} data-stickyblockid={45} style={{top: '-2px'}} />
																				<div className={'controls-StickyBlock__observationTarget_top2'} data-stickyblockid={45} />
																				<div className={'controls-StickyBlock__observationTarget_top2Right'} data-stickyblockid={45} />
																				<div className={'controls-StickyBlock__observationTarget_bottomLeft'} data-stickyblockid={45} style={{bottom: '-2px'}} />
																				<div className={'controls-StickyBlock__observationTarget_bottomRight'} data-stickyblockid={45} style={{bottom: '-2px'}} />
																				<div className={'controls-StickyBlock__observationTarget_left'} data-stickyblockid={45} style={{left: '-2px'}} />
																				<div className={'controls-StickyBlock__observationTarget_right'} data-stickyblockid={45} style={{right: '-2px'}} />
																			</div>
																		</Link>
																	</div>
																</div>
															</div>
														</div>
														<div className={'controls__BaseControl__footer'} tabIndex={0} />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={'controls-MasterDetail_resizing-line_wrapper controls-MasterDetail_resizingLine_masterPosition-left'} />
						<div fixcompatible={1} className={'controls-MasterDetail_details controls-MasterDetail_details-contrast ws-flexbox ws-flex-grow-1'} tabIndex={0}>
							<div className={'brTasks detailTasksInWork controls-MasterDetail_detailsContent  controls-MasterDetail_details-bg-contrast controls-MasterDetail_details-newDesign tlr'} tabIndex={0}>
								<div className={'person-PopupController__container'} tabIndex={0}>
									<div className={'edo3-Browser ' + (['tasks-from-me', 'tasks-returned'].includes(p) ? 'brTasksFromMe' : 'brTasksOnMe')} tabIndex={0}>
										<div className={'layout-Browser controls_Layout_theme-default edo3-Browser-browser'} tabIndex={0}>
											<div tabIndex={-1} />
											<div tabIndex={0} />
											<div className={'layout-Browser__content layout-Browser__content'} tabIndex={0}>
												<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default edo3-Browser-scroll-container controls-air-m'} tabIndex={0}>
													<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} style={{overscrollBehaviorY: 'auto'}} tabIndex={0}>
														<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column controls-Scroll-ContainerBase__contentNotScrollable'}>
															<div className={'Hint-ListWrapper controls_Hint_theme-default controls-Scroll-containerBase_userContent'} tabIndex={0}>
																<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default edo3-Browser-view undefined Hint-ListWrapper_list'} tabIndex={0}>
																	<div name={'fakeFocusElem'} className={'controls-BaseControl__fakeFocusElem'} tabIndex={0} />
																	<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_ controls-GridControl__viewContainer'} tabIndex={0}>
																		<div className={'controls_list_theme-default controls-itemActionsV_menu-hidden'} name={'gridWrapper'} tabIndex={0}>
																			<div name={'grid'} className={'controls-Grid controls-Grid_default controls-Grid_part-fixed controls-Grid_grid-layout controls-Grid_support-ladder controls-GridView__ladderOffset-'} style={{gridTemplateColumns: 'max-content 0px auto 1fr 160px'}} tabIndex={0}>
																				<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-GridViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_'}>
																					{tasks}
																				</div>
																			</div>
																		</div>
																		<div className={'controls__BaseControl__footer'} tabIndex={0} />
																	</div>
																</div>
																<div className={'Hint-ListWrapper_hintWrapper'}>
																	<div className={'Hint-ListWrapper_wrapBlock Hint-ListWrapper_wrapBlock_l'} />
																	<div className={'hint-text_color hint-EmptyView hint-EmptyView_rowLayout hint-EmptyView_rowLayout_subtypeLayout_common_marginSize_m hint-EmptyView_rowLayout_bottom hint-EmptyView_rowLayout_m   ws-flexbox ws-flex-wrap ws-flex-column-reverse ws-align-items-center ws-justify-content-start controls_Hint_theme-default Hint-ListWrapper_hint'} tabIndex={0}>
																		<div className={'hint-Template__wrapBlock'} />
																		<div className={'hint-EmptyView__rowCentralizer hint-EmptyView__rowCentralizer_bottom ws-flexbox ws-justify-content-center'}>
																			<div className={'hint-EmptyView__rowWrapper hint-EmptyView__rowWrapper_bottom ws-flexbox ws-flex-column ws-justify-content-between'}>
																				<div className={'hint-EmptyView__main hint-EmptyView__main_m ws-flexbox ws-flex-wrap ws-align-items-end hint-EmptyView__minHeight_m  ws-justify-content-start'}>
																					<div className={'hint-EmptyView__textWrapper hint-EmptyView__textWrapper_m hint-EmptyView__rowTextWrapper_m ws-flexbox ws-align-items-center ws-flex-grow-1 hint-EmptyView__rowTextWrapper_withImage_m'}>
																						<div className={'hint-EmptyView__text hint-EmptyView__text_m'}>
																							<div className={'controls_Hint_theme-default hint-Template-Content hint-Template-Content_m hint-text_color'} tabIndex={0}>
																								<div className={'hint-Template-Markup hint-text_color controls_Hint_theme-default hint-Template-Content__contentMarkup'} tabIndex={0}>
																									<p className={'hint-Template-Markup__blockOffset_l'} tabIndex={0}>
																										<Link className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter'} data-qa={'hint-Template-Markup__link'} to={'/help/work_in/mas_doc'} tabIndex={0}>
																											<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
																												<span className={'controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>Отправьте сообщение</span>
																											</span>
																										</Link>
																										<span className={'controls-fontsize-m'} tabIndex={0}> </span>
																										<span className={'controls-fontsize-m'} tabIndex={0}>прямо из документа</span>
																										<span className={'controls-fontsize-m'} tabIndex={0}>, </span>
																										<span className={'controls-fontsize-m'} tabIndex={0}>чтобы обсудить детали</span>
																										<span className={'controls-fontsize-m'} tabIndex={0}>. </span>
																										<span className={'controls-fontsize-m'} tabIndex={0}>Кроме того, вы можете</span>
																										<span className={'controls-fontsize-m'} tabIndex={0}> </span>
																										<Link className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter'} target={'_blank'} to={'/help/work_in/task/control/task_oncontrol'} tabIndex={0}>
																											<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
																												<span className={'controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>поставить задачу на контроль</span>
																											</span>
																										</Link>
																										<span className={'controls-fontsize-m'} tabIndex={0}>.</span>
																									</p>
																									<p className={'hint-Template-Markup__blockOffset_l'} tabIndex={0}>
																										<span className={'controls-fontsize-m'} tabIndex={0}>Все события по задаче сохранятся в</span>
																										<span className={'controls-fontsize-m'} tabIndex={0}> </span>
																										<Link className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter'} target={'_blank'} to={'/help/another/doc/execute/passage'} tabIndex={0}>
																											<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
																												<span className={'controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>ленте</span>
																											</span>
																										</Link>
																										<span className={'controls-fontsize-m'} tabIndex={0}> </span>
																										<span className={'controls-fontsize-m'} tabIndex={0}>и будут видны всем участникам</span>
																										<span className={'controls-fontsize-m'} tabIndex={0}>.</span>
																									</p>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div className={'hint-EmptyView__imageHider'} />
																					<div className={'hint-Template__imageWrapper controls_Hint_theme-default hint-Template__imageWrapper_m_emptyView hint-Template-HelpPersonImage-Common_cool hint-EmptyView__imageWrapper_m hint-EmptyView__imageWrapper_m_position_right hint-EmptyView__imageWrapper_verticalOffset_m'} data-qa={'hint-Template__imageWrapper'} style={{background: "url('http://cdn.workspace-loliland.ru/HelpPersonCommon/1.0.4/default/cool.svg')"}} tabIndex={0} />
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className={'layout-Browser__hint'} tabIndex={0} key={'bd_0_2__el__el_2_0_1_0__el_0__el_0_0_0_0_1_2_0_1_0_0_0_1_0_0_0_1_0_0_0_4_1_0_0_0__el_0_0_0_0_2_0_0_0_0_0_0_0_1__el_1_0_0_0_0_5_0_0_2_0_0_0_1_0__el_0_0_1_0_0_0_15_0_13_0_1__el_13_0_1_0_2_1_1_0_6_1_0_1_0_5_0__el_5_0_0_0_2_0_2_0_2_0_0_0_2_0_0_0_1_0_0_0_0_1_0_0_0_0_1_0_0_0_0_0_0_0_1_0_0_0_0_0_0__el_0_0_0_1_2_0_1_2_0_0_1_0_1_0_0_0_1_0_0_0_0_1_1_0_0_0_0_0_0_0_0_0_0__el_0_0_0_4_0_2_4_0_2_0_0_3_0_3_0__el_0_0_0_0_0_0_0_0_0_0__el_0_0_0_3_0_0_2_0_4_0_'} />
										</div>
									</div>
									<div tabIndex={0} />
								</div>
							</div>
						</div>
						<div tabIndex={0} />
					</div>
				</div>
			</div>
		</div>
	)
}