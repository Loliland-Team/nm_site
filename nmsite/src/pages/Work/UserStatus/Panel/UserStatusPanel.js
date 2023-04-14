import React from 'react'
import * as r from '../../../../utils/Request.js'
import * as f from '../../../../utils/functions.js'
import { closeBtn } from '../../../../utils/buttons.js'

export function UserStatusPanel(props) {
	let p = props.page,
		s = props.store

	if (!f.loadedStyles.WorkPage.UserStatus.Selector) f.workUserStatus('Selector/Selector')
	if (!f.loadedStyles.WorkPage.UserStatus.Panel) f.workUserStatus('Panel/Panel')
	if (!f.loadedStyles.WorkPage.controls.baseList) f.workControls('baseList')
	if (!f.loadedStyles.WorkPage.EngineUser.Panel) f.workEngineUser('Panel')

	function setStatus(event, status) {
		r.setStatus(event, s, status)
			.then(data => data.msg === 'Success' ? event.currentTarget.closest(`[template]`).remove() : '')
	}

	return (
		<div className={'controls_popupTemplate_theme-default controls-StickyTemplate controls-StickyTemplate__border controls-PopupTemplate__roundBorder controls_border-radius-s controls-StickyTemplate-borderStyle-default controls-StickyTemplate-hoverBorderStyle- controls-StickyTemplate-borderSize-default   controls-StickyTemplate-backgroundColor controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
			<div className={'controls-StickyTemplate__content-area controls-PopupTemplate__roundBorder controls_border-radius-s controls-StickyTemplate-backgroundColor'}>
				<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default userStatus-Panel__scrollContainer'} tabIndex={0}>
					<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined controls-Scroll__backgroundShadow controls-Scroll__background-Shadow_style-default controls-Scroll__background-Shadow_top-auto_bottom-auto_style-default'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
						<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
							<div className={'userStatus-Selector userStatus-Selector-list userStatus-Panel__selector controls-Scroll-containerBase_userContent'} tabIndex={0}>
								<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default'} tabIndex={0}>
									<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
									<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_0dec2ce8-e878-43b8-b46a-f5ecdf8f83be'} tabIndex={0}>
										<div className={'controls-ListViewV controls_list_theme-default controls-ListView_default controls-itemActionsV_menu-hidden'} tabIndex={0}>
											<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-ListViewV__itemsContainer controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_0dec2ce8-e878-43b8-b46a-f5ecdf8f83be'}>
												<div data-qa={'group'} className={'controls-StickyBlock  controls-background-default-sticky controls-ListView__itemV ws-hidden controls-ListView__group '} attr-data-qa={'key-true'} item-key={'true'} tabIndex={0} style={{top: '0px'}}>
													<div className={'controls-ListView__group   '}>
														<div className={'controls-ListView__groupContent controls-ListView__groupContent_height controls-ListView__groupContent__leftPadding_null controls-ListView__groupContent__rightPadding_null'}>
															<div className={'controls-ListView__groupSeparator controls-ListView__groupSeparator-left'}>&nbsp;</div>
															<div className={'controls-ListView__groupContent-text_wrapper controls-ListView__groupContent-text_default controls-ListView__groupContent-text_color_default  controls-ListView__groupContent_baseline  controls-ListView__groupContent_baseline_default'}>
																<div className={'controls-ListView__groupContent-text controls-ListView__groupContent_center  controls-ListView__groupExpander  controls-ListView__groupExpander_left controls-ListView__groupExpander-iconSize_default controls-ListView__groupExpander-iconStyle_default'} data-qa={'group-expander'}>
																	<invisible-node tabIndex={-1} className={'ws-hidden'} />
																</div>
															</div>
															<div className={'controls-ListView__groupSeparator controls-ListView__groupSeparator-right'}>&nbsp;</div>
														</div>
													</div>
													<div className={'controls-StickyBlock__observationTarget_top'} data-stickyblockid={11} style={{top: '-2px'}} />
													<div className={'controls-StickyBlock__observationTarget_top2'} data-stickyblockid={11} />
													<div className={'controls-StickyBlock__observationTarget_top2Right'} data-stickyblockid={11} />
													<div className={'controls-StickyBlock__observationTarget_bottomLeft'} data-stickyblockid={11} style={{bottom: '-2px'}} />
													<div className={'controls-StickyBlock__observationTarget_bottomRight'} data-stickyblockid={11} style={{bottom: '-2px'}} />
													<div className={'controls-StickyBlock__observationTarget_left'} data-stickyblockid={11} style={{left: '-2px'}} />
													<div className={'controls-StickyBlock__observationTarget_right'} data-stickyblockid={11} style={{right: '-2px'}} />
												</div>
												<div onClick={(event) => setStatus(event, 1)} attr-data-qa={'key-1'} data-qa={'item'} item-key={1} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default controls-ListView__item_roundBorder_topLeft_l controls-ListView__item_roundBorder_topRight_l controls-ListView__item_roundBorder_bottomLeft_l controls-ListView__item_roundBorder_bottomRight_l userStatus-Selector__item-current-list'} tabIndex={0}>
													<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_null controls-ListView__item-leftPadding_null '}>
														<div className={'engineUser-MenuPanelItemTemplate engineUser-MenuPanelItemTemplate-noHover engineUser-MenuPanelItemTemplate_size-m controls_EngineUser_theme-default userStatus-Selector__MenuPanel userStatus-Selector__statusItem  controls-margin_bottom-3xs  userStatus-Selector__item-folder'} tabIndex={0}>
															<div className={'userStatus-Selector__item userStatus-Selector__item-icon userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__leftSide controls-margin_right-xs engineUser-MenuPanelItemTemplate__leftSide_sizeM controls-icon_size-m'} tabIndex={0}>
																<svg data-qa={'userStatus-Selector__item-icon'} className={'controls-icon_size-s controls-icon_style-primary controls-icon_svg undefined'} fillRule={'evenodd'} tabIndex={0}>
																	<use xlinkHref={'/asset/resources/work/EngineUserPanel-icons/designtime.svg#icon-NotWorking'} />
																</svg>
															</div>
															<div className={'userStatus-Selector__item userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__content'} tabIndex={0}>
																<div className={'userStatus-Selector__title-container'}>
																	<div className={'ws-flexbox'}>
																		<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'}>
																			<div title={'Работаю'} className={'userStatus-Selector__title userStatus-Selector__title_working'}>Работаю</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className={'userStatus-Selector__editModeSwitcher icon-16 icon-Settings icon-disabled engineUser-MenuPanelItemTemplate__content'} title={'Настроить статусы'} data-qa={'userStatus-Selector__editModeSwitcher'} tabIndex={0} />
														</div>
													</div>
												</div>
												<div onClick={(event) => setStatus(event, 2)} attr-data-qa={'key-2'} data-qa={'item'} item-key={2} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default controls-ListView__item_roundBorder_topLeft_l controls-ListView__item_roundBorder_topRight_l controls-ListView__item_roundBorder_bottomLeft_l controls-ListView__item_roundBorder_bottomRight_l userStatus-Selector__item-current-list'} tabIndex={0}>
													<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_null controls-ListView__item-leftPadding_null '}>
														<div className={'engineUser-MenuPanelItemTemplate engineUser-MenuPanelItemTemplate-noHover engineUser-MenuPanelItemTemplate_size-m controls_EngineUser_theme-default userStatus-Selector__MenuPanel userStatus-Selector__statusItem  controls-margin_bottom-3xs  userStatus-Selector__item-folder'} tabIndex={0}>
															<div className={'userStatus-Selector__item userStatus-Selector__item-icon userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__leftSide controls-margin_right-xs engineUser-MenuPanelItemTemplate__leftSide_sizeM controls-icon_size-m'} tabIndex={0}>
																<div data-qa={'userStatus-Selector__item-icon'} className={'controls-icon_size-m controls-icon_style-secondary icon-statusCoffee controls-icon undefined'} tabIndex={0} />
															</div>
															<div className={'userStatus-Selector__item userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__content'} tabIndex={0}>
																<div className={'userStatus-Selector__title-container'}>
																	<div className={'ws-flexbox'}>
																		<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'}>
																			<div title={'Кофе-брейк'} className={'userStatus-Selector__title userStatus-Selector__title_working'}>Кофе-брейк</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div onClick={(event) => setStatus(event, 3)} attr-data-qa={'key-3'} data-qa={'item'} item-key={3} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default controls-ListView__item_roundBorder_topLeft_l controls-ListView__item_roundBorder_topRight_l controls-ListView__item_roundBorder_bottomLeft_l controls-ListView__item_roundBorder_bottomRight_l userStatus-Selector__item-current-list'} tabIndex={0}>
													<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_null controls-ListView__item-leftPadding_null '}>
														<div className={'engineUser-MenuPanelItemTemplate engineUser-MenuPanelItemTemplate-noHover engineUser-MenuPanelItemTemplate_size-m controls_EngineUser_theme-default userStatus-Selector__MenuPanel userStatus-Selector__statusItem  controls-margin_bottom-3xs  userStatus-Selector__item-folder'} tabIndex={0}>
															<div className={'userStatus-Selector__item userStatus-Selector__item-icon userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__leftSide controls-margin_right-xs engineUser-MenuPanelItemTemplate__leftSide_sizeM controls-icon_size-m'} tabIndex={0}>
																<div data-qa={'userStatus-Selector__item-icon'} className={'controls-icon_size-m controls-icon_style-secondary icon-statusSleeps controls-icon undefined'} tabIndex={0} />
															</div>
															<div className={'userStatus-Selector__item userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__content'} tabIndex={0}>
																<div className={'userStatus-Selector__title-container'}>
																	<div className={'ws-flexbox'}>
																		<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'}>
																			<div title={'Работаю дома'} className={'userStatus-Selector__title userStatus-Selector__title_working'}>Работаю дома</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div onClick={(event) => setStatus(event, 4)} attr-data-qa={'key-4'} data-qa={'item'} item-key={4} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default controls-ListView__item_roundBorder_topLeft_l controls-ListView__item_roundBorder_topRight_l controls-ListView__item_roundBorder_bottomLeft_l controls-ListView__item_roundBorder_bottomRight_l userStatus-Selector__item-current-list'} tabIndex={0}>
													<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_null controls-ListView__item-leftPadding_null '}>
														<div className={'engineUser-MenuPanelItemTemplate engineUser-MenuPanelItemTemplate-noHover engineUser-MenuPanelItemTemplate_size-m controls_EngineUser_theme-default userStatus-Selector__MenuPanel userStatus-Selector__statusItem  controls-margin_bottom-3xs  userStatus-Selector__item-folder'} tabIndex={0}>
															<div className={'userStatus-Selector__item userStatus-Selector__item-icon userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__leftSide controls-margin_right-xs engineUser-MenuPanelItemTemplate__leftSide_sizeM controls-icon_size-m'} tabIndex={0}>
																<div data-qa={'userStatus-Selector__item-icon'} className={'controls-icon_size-m controls-icon_style-secondary icon-statusDisturb controls-icon undefined'} tabIndex={0} />
															</div>
															<div className={'userStatus-Selector__item userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__content'} tabIndex={0}>
																<div className={'userStatus-Selector__title-container'}>
																	<div className={'ws-flexbox'}>
																		<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'}>
																			<div title={'Не отвлекать'} className={'userStatus-Selector__title userStatus-Selector__title_working'}>Не отвлекать</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div data-qa={'group'} className={'controls-StickyBlock  controls-background-default-sticky controls-ListView__itemV ws-hidden controls-ListView__group '} attr-data-qa={'key-false'} item-key={'false'} tabIndex={0} style={{top: '0px'}}>
													<div className={'controls-ListView__group   '}>
														<div className={'controls-ListView__groupContent controls-ListView__groupContent_height controls-ListView__groupContent__leftPadding_null controls-ListView__groupContent__rightPadding_null'}>
															<div className={'controls-ListView__groupSeparator controls-ListView__groupSeparator-left'}>&nbsp;</div>
															<div className={'controls-ListView__groupContent-text_wrapper controls-ListView__groupContent-text_default controls-ListView__groupContent-text_color_default  controls-ListView__groupContent_baseline  controls-ListView__groupContent_baseline_default'}>
																<div className={'controls-ListView__groupContent-text controls-ListView__groupContent_center  controls-ListView__groupExpander  controls-ListView__groupExpander_left controls-ListView__groupExpander-iconSize_default controls-ListView__groupExpander-iconStyle_default'} data-qa={'group-expander'}>
																	<invisible-node tabIndex={-1} className={'ws-hidden'} />
																</div>
															</div>
															<div className={'controls-ListView__groupSeparator controls-ListView__groupSeparator-right'}>&nbsp;</div>
														</div>
													</div>
													<div className={'controls-StickyBlock__observationTarget_top'} data-stickyblockid={12} style={{top: '-2px'}} />
													<div className={'controls-StickyBlock__observationTarget_top2'} data-stickyblockid={12} />
													<div className={'controls-StickyBlock__observationTarget_top2Right'} data-stickyblockid={12} />
													<div className={'controls-StickyBlock__observationTarget_bottomLeft'} data-stickyblockid={12} style={{bottom: '-2px'}} />
													<div className={'controls-StickyBlock__observationTarget_bottomRight'} data-stickyblockid={12} style={{bottom: '-2px'}} />
													<div className={'controls-StickyBlock__observationTarget_left'} data-stickyblockid={12} style={{left: '-2px'}} />
													<div className={'controls-StickyBlock__observationTarget_right'} data-stickyblockid={12} style={{right: '-2px'}} />
												</div>
												<div onClick={(event) => setStatus(event, 5)} attr-data-qa={'key-5'} data-qa={'item'} item-key={5} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default controls-ListView__item_roundBorder_topLeft_l controls-ListView__item_roundBorder_topRight_l controls-ListView__item_roundBorder_bottomLeft_l controls-ListView__item_roundBorder_bottomRight_l userStatus-Selector__item-current-list'} tabIndex={0}>
													<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_null controls-ListView__item-leftPadding_null '}>
														<div className={'engineUser-MenuPanelItemTemplate engineUser-MenuPanelItemTemplate-noHover engineUser-MenuPanelItemTemplate_size-m controls_EngineUser_theme-default userStatus-Selector__MenuPanel userStatus-Selector__statusItem  controls-margin_bottom-3xs  userStatus-Selector__item-folder'} tabIndex={0}>
															<div className={'userStatus-Selector__item userStatus-Selector__item-icon userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__leftSide controls-margin_right-xs engineUser-MenuPanelItemTemplate__leftSide_sizeM controls-icon_size-m'} tabIndex={0}>
																<svg data-qa={'userStatus-Selector__item-icon'} className={'controls-icon_size-s controls-icon_style-primary controls-icon_svg undefined'} fillRule={'evenodd'} tabIndex={0}>
																	<use xlinkHref={'/asset/resources/work/EngineUserPanel-icons/designtime.svg#icon-Working'} />
																</svg>
															</div>
															<div className={'userStatus-Selector__item userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__content'} tabIndex={0}>
																<div className={'userStatus-Selector__title-container'}>
																	<div className={'ws-flexbox'}>
																		<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'}>
																			<div title={'Вне работы'} className={'userStatus-Selector__title userStatus-Selector__title_working'}>Вне работы</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div onClick={(event) => setStatus(event, 6)} attr-data-qa={'key-6'} data-qa={'item'} item-key={6} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default controls-ListView__item_roundBorder_topLeft_l controls-ListView__item_roundBorder_topRight_l controls-ListView__item_roundBorder_bottomLeft_l controls-ListView__item_roundBorder_bottomRight_l userStatus-Selector__item-current-list'} tabIndex={0}>
													<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_null controls-ListView__item-leftPadding_null '}>
														<div className={'engineUser-MenuPanelItemTemplate engineUser-MenuPanelItemTemplate-noHover engineUser-MenuPanelItemTemplate_size-m controls_EngineUser_theme-default userStatus-Selector__MenuPanel userStatus-Selector__statusItem  controls-margin_bottom-3xs  userStatus-Selector__item-folder'} tabIndex={0}>
															<div className={'userStatus-Selector__item userStatus-Selector__item-icon userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__leftSide controls-margin_right-xs engineUser-MenuPanelItemTemplate__leftSide_sizeM controls-icon_size-m'} tabIndex={0}>
																<div data-qa={'userStatus-Selector__item-icon'} className={'controls-icon_size-m controls-icon_style-secondary icon-statusConnected controls-icon undefined'} tabIndex={0} />
															</div>
															<div className={'userStatus-Selector__item userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__content'} tabIndex={0}>
																<div className={'userStatus-Selector__title-container'}>
																	<div className={'ws-flexbox'}>
																		<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'}>
																			<div title={'На связи'} className={'userStatus-Selector__title userStatus-Selector__title_working'}>На связи</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div onClick={(event) => setStatus(event, 7)} attr-data-qa={'key-7'} data-qa={'item'} item-key={7} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default controls-ListView__item_roundBorder_topLeft_l controls-ListView__item_roundBorder_topRight_l controls-ListView__item_roundBorder_bottomLeft_l controls-ListView__item_roundBorder_bottomRight_l userStatus-Selector__item-current-list'} tabIndex={0}>
													<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_null controls-ListView__item-rightPadding_null controls-ListView__item-leftPadding_null '}>
														<div className={'engineUser-MenuPanelItemTemplate engineUser-MenuPanelItemTemplate-noHover engineUser-MenuPanelItemTemplate_size-m controls_EngineUser_theme-default userStatus-Selector__MenuPanel userStatus-Selector__statusItem  controls-margin_bottom-3xs  userStatus-Selector__item-folder'} tabIndex={0}>
															<div className={'userStatus-Selector__item userStatus-Selector__item-icon userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__leftSide controls-margin_right-xs engineUser-MenuPanelItemTemplate__leftSide_sizeM controls-icon_size-m'} tabIndex={0}>
																<div data-qa={'userStatus-Selector__item-icon'} className={'controls-icon_size-m controls-icon_style-secondary icon-statusDisturb controls-icon undefined'} tabIndex={0} />
															</div>
															<div className={'userStatus-Selector__item userStatus-Selector__item--enable engineUser-MenuPanelItemTemplate__content'} tabIndex={0}>
																<div className={'userStatus-Selector__title-container'}>
																	<div className={'ws-flexbox'}>
																		<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'}>
																			<div title={'Недоступен'} className={'userStatus-Selector__title userStatus-Selector__title_working'}>Недоступен</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={'controls__BaseControl__footer'} tabIndex={0} />
									</div>
								</div>
								<div tabIndex={0} />
								<div tabIndex={0} />
							</div>
						</div>
					</div>
				</div>
			</div>
			{closeBtn()}
		</div>
	)
}