import React from 'react'
import * as b from '../../../../utils/buttons.js'
import * as f from '../../../../utils/functions.js'

export function SelectTaskType(props) {
	if (!f.loadedStyles.WorkPage.controls.menu) f.workControls('menu')
	if (!f.loadedStyles.WorkPage.controls.itemActions) f.workControls('itemActions')
	if (!f.loadedStyles.WorkPage.controls.popupTemplate) f.workControls('popupTemplate')
	if (!f.loadedStyles.WorkPage.controls.search) f.workControls('search')
	if (!f.loadedStyles.WorkPage.controls.input) f.workControls('input')
	if (!f.loadedStyles.WorkPage.controls.CustomColors) f.workControls('CustomColors')

	return (
		<div className={'controls_dropdownPopup_theme-default controls-Menu__popup controls-Menu__popup_with-closeButton controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
			<div className={'controls_popupTemplate_theme-default controls-StickyTemplate  controls-PopupTemplate__roundBorder controls_border-radius-s controls-StickyTemplate-borderStyle-default controls-StickyTemplate-hoverBorderStyle- controls-StickyTemplate-borderSize-default   controls-StickyTemplate-backgroundColor controls-Popup__isolatedFocusingContext controls-Menu__popup-template controls-Menu__popup-direction-vertical-bottom   controls-Menu__popup-offset controls-Menu__popup-shadow-default undefined'} data-qa={'nanomagicPage-addButton__dropdownMenu_root_null'} tabIndex={0}>
				<div className={'controls-StickyTemplate__top-area controls-PopupTemplate__roundBorder_top controls_border-radius-s controls-StickyTemplate-backgroundColor controls-StickyTemplate__top-area-withClose_external'} tabIndex={0}>
					<div className={'controls-StickyTemplate__top-area-content'}>
						<div className={'edws-AddButton__headerContent ws-flexbox ws-flex-nowrap'} tabIndex={0}>
							<div className={'controls_dropdownPopup_theme-default controls_list_theme-default controls-Menu__popup-header controls-Menu__popup_header_searchWrapper controls-Menu__popup_header_searchWrapper_offset controls-Menu__popup-header-singleSelect controls-Menu__popup-header_withClose'} tabIndex={0}>
								<div className={'controls-Render js-controls-Render js-controls-Render  controls-Render_background-contrast controls-Render_textAlign-left controls-Render_searchContrast_borderRadius controls-Render_state-searchContrast-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-searchContrast-valid_caretEmpty  controls-inlineheight-default controls-Render-inlineheight-default controls-search controls_search_theme-default controls-notFocusOnEnter controls_theme-default controls-Menu__popup_header_search controls-Menu__popup_header_search_minWidth_l controls-Menu__popup_header_search_maxWidth_l'} tabIndex={0}>
									<div className={'controls-Render__wrapper'}>
										<span className={'controls-Render__baseline'}>﻿</span>
										<div className={'controls_search_theme-default controls-Search__buttons controls-Render__beforeField'} tabIndex={0} />
										<div className={'controls-InputBase__field  controls-Search__field_margin-null controls-Search__field_theme_default_margin-null controls-Render__field controls-Render__field_textAlign_left ws-ellipsis controls-Render__field_zIndex'} data-qa={'controls-Render__field'} tabIndex={0}>
											<input name={'input-1680145972763'} className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-Search__nativeField_caretEmpty controls-Search__nativeField_caretEmpty_theme_default   controls-InputBase__nativeField_hideCustomPlaceholder'} type={'text'} placeholder={'﻿'} spellCheck={'true'} autoCorrect={'off'} autoCapitalize={'off'} inputMode={'text'} autoComplete={'off'} tabIndex={0} />
											<div className={'controls-InputBase__placeholder  controls-InputBase__placeholder_displayed-under-caret'} tabIndex={0}>
												<div className={'controls-Render__placeholder controls-Render__placeholder_overflow'} tabIndex={0}>Найти</div>
											</div>
										</div>
										<div className={'controls_search_theme-default controls-Search__buttons controls-Render__afterField'} title={0}>
											<div data-qa={'Search__searchButton'} className={'controls_search_theme-default controls-Search__button controls-Search__button_enabled controls-Search__searchButton controls-Search__searchButton_iconSize-s controls-Search__searchButton-right_inlineheight-default controls-Search__searchButton_position-right controls-Search__searchButton_color icon-Search2'} tabIndex={0} />
										</div>
									</div>
								</div>
							</div>
							<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter controls-padding_left-m controls-inlineheight-default controls-Button-inlineheight-default controls-Button_link_default'} title={'Настроить'} tabIndex={0}>
								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_link_default'}>
									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-TFSettings'} tabIndex={0} />
								</span>
							</span>
						</div>
						{b.closeBtn()}
					</div>
				</div>
				<div className={'controls-StickyTemplate__content-area controls-PopupTemplate__roundBorder_bottom  controls_border-radius-s controls-StickyTemplate-backgroundColor'}>
					<div className={'controls-margin_top-2xs controls-Menu__popup-content'} tabIndex={0}>
						<div className={' controls-Menu__popup-misspellContainer'} tabIndex={0}>
							<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default controls-ScrollContainer__flex controls-Menu__scroll'} tabIndex={0}>
								<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} style={{overscrollBehaviorY: 'auto'}} tabIndex={0}>
									<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
										<div className={'controls_breadcrumbs_theme-default controls_dropdownPopup_theme-default controls-menu controls-Menu__popup-list controls-padding_left-xs controls-padding_right-xs controls-Scroll-containerBase_userContent'} ws-autofocus={'false'} data-index={0} tabIndex={0}>
											<div className={'ws-flexbox ws-flex-column controls-Menu_showActions_undefined'} tabIndex={0}>
												<div className={'controls-ListViewV controls-ListView_default controls_list_theme-default controls_dropdownPopup_theme-default'} tabIndex={0}>
													<div name={'itemsContainer'} className={'controls-ListViewV__itemsContainer controls-ListViewV__itemsContainer--newRender'}>
														<div className={'controls-Menu__row controls-Menu__row_overflow controls-Menu__row_roundBorder  controls-Menu__row_align_center controls-ListView__itemV js-controls-ListView__measurableContainer controls-ListView__itemContent  controls-ListView__item_default-topPadding_null controls-ListView__item_default-bottomPadding_menu-default controls-ListView__item-rightPadding_ controls-ListView__item-leftPadding_s controls-Menu__row_state_default controls-Menu__row_hoverBackgroundStyle-default controls-ListView__item-rightPadding_menu-pin controls-Menu__defaultItem  controls-Menu__text-default controls-Menu__row_singleLine controls-Menu__row_margin-bottom'} data-qa={'item'} attr-data-qa={'leaf'} type-data-qa={'leaf'} tabIndex={0} key={'list-render-'}>
															<div className={'controls-Menu__row_selected controls-Menu__row_selected_align'} tabIndex={0} />
															<div className={'controls-Menu__content_baseline'}>
																<div className={'edws-AddButtonItem ws-flexbox ws-align-items-center ws-ellipsis'} tabIndex={0}>
																	<span className={'ws-ellipsis'}>Задача</span>
																</div>
															</div>
															<div className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_menu-default  controls-Menu__itemActions_position_rightBottom  controls-itemActionsV_inside'} tabIndex={0}>
																<div className={'controls-itemActionsV__wrapper'}>
																	<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_s controls-itemActionsV__action_padding'} data-qa={'controls-itemActions__action'} title={'Закрепить'} tabIndex={-1}>
																		<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-itemActionsV__Button_iconSize_s'} tabIndex={0}>
																			<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																				<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-unaccented controls-icon icon-PinNull'} tabIndex={0} />
																			</span>
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div tabIndex={0} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}