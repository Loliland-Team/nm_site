import React from 'react'
import { closeBtn } from '../../../../utils/buttons.js'
import * as r from '../../../../utils/Request.js'
import * as f from '../../../../utils/functions.js'

export function EngineUserPanel(props) {
	let s = props.store,
		p = props.page

	if (!f.loadedStyles.WorkPage.controls.popupTemplate) f.workControls('popupTemplate')
	if (!f.loadedStyles.WorkPage.EngineUserPanel.View) f.workEngineUserPanel('View')
	if (!f.loadedStyles.WorkPage.controls.dropdown) f.workControls('dropdown')
	if (!f.loadedStyles.WorkPage.EngineLanguage._this) f.workEngineLanguage()
	if (!f.loadedStyles.WorkPage.UserStatus.Selector) f.workUserStatus('Selector/Selector')
	if (!f.loadedStyles.WorkPage.EngineUser.Panel) f.workEngineUser('Panel')
	if (!f.loadedStyles.WorkPage.AppSelector.appPanel) f.workAppSelectorAppPanel()
	if (!f.loadedStyles.WorkPage.controls.Tumbler) f.workControls('Tumbler')
	if (!f.loadedStyles.WorkPage.controls.baseList) f.workControls('baseList')
	if (!f.loadedStyles.WorkPage.controls.tile) f.workControls('tile')

	function createPopupUserStatus(event) {
		f.createPopup('UserStatus/Panel', s, p)
	}

	return (
		<div className={'controls_popupTemplate_theme-default controls-DialogTemplate controls-background-unaccented controls-PopupTemplate__margin-horizontal controls-PopupTemplate__roundBorder controls_border-radius-s controls_toggle_theme-default engineUser-PanelView controls_EngineUser_theme-default controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
			<div className={'controls-DialogTemplate__top-area controls-background-unaccented controls-DialogTemplate__top-area_size-m   controls-PopupTemplate__roundBorder_top controls_border-radius-s'} tabIndex={0}>
				<div className={'controls-DialogTemplate__top-area-content'}>
					<div className={'controls-DialogTemplate__headerContentTemplate controls-DialogTemplate__headerContentTemplate_margin-right-null'}>
						<div className={'engineUser-PanelView__topArea'} tabIndex={0}>
							<img alt={''} className={'EngineUserPanel-Photo__container EngineUserPanel-Photo__image engineUser-PanelView__photo controls-image_border-round'} src={r.getUserImgUrl(s.user_info)} tabIndex={0} />
							<div className={'ws-flexbox ws-flex-column ws-flex-grow-1 engineUser-PanelView__headerRightBlock'}>
								<div className={'ws-flexbox'}>
									<div data-qa={'engineUser-PanelView__name'} className={'ws-flexbox ws-flex-grow-1 engineUser-PanelView__nameWrapper ws-align-items-center'}>
										<a href={'/work/my-general-info'} className={'engineUser-PanelView__name ws-ellipsis engineUser-PanelView__activeName'} title={s.user_info.name} tabIndex={0}>{s.user_info.name}</a>
										<div className={'engineUser-PanelView__lang ws-flex-shrink-0'} data-qa={'engineUser-PanelView__lang'} tabIndex={0}>
											<div className={'controls-Dropdown engine_LanguageSelector'} tabIndex={0}>
												<div tabIndex={0} className={'engine_LanguageSelector-flagRow engine_LanguageSelector-country-RU'}>
													<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-l controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter controls-inlineheight-l controls-Button-inlineheight-l controls-Button_ghost_l'} tabIndex={0}>
														<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_l'}>
															<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-secondary controls-icon engine_LanguageSelector-flagItem engine_LanguageSelector-flagItem-ru-RU engine_LanguageSelector-flagItem-highRes-ru-RU'} tabIndex={0} />
														</span>
													</span>
												</div>
											</div>
											<div tabIndex={0} />
											<div tabIndex={0} />
										</div>
									</div>
									<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-label controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter engineUser-PanelView__logout ws-flex-shrink-0'} data-qa={'engineUser-PanelView__logout'} title={'Выйти из аккаунта'} tabIndex={0} onClick={r.logout}>
										<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_start controls-Button_textAlign-none'}>
											<svg fillRule={'evenodd'} className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-label controls-icon_svg '} tabIndex={-1}>
												<use xlinkHref={'/asset/resources/work/EngineUserPanel-icons/designtime.svg#icon-ExitNew'} />
											</svg>
											<span className={'controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-link controls-Button__text_captionPosition-default_start controls-Button__text_viewMode-link'}>Выход</span>
										</span>
									</span>
								</div>
								<div className={'ws-flexbox engineUser-PanelView__headerBottom'}>
									<div data-qa={'engineUser-PanelView__userStatus'} className={'userStatus-Selector userStatus-Selector-button engineUser-PanelView__userStatus'} tabIndex={0}>
										<div className={'userStatus-Selector__item userStatus-Selector__item-icon userStatus-Selector__item--enable userStatus-Selector__button-icon'} tabIndex={0}>
											<svg data-qa={'userStatus-Selector__item-icon'} className={'controls-icon_size-s controls-icon_style-primary controls-icon_svg undefined'} fillRule={'evenodd'} tabIndex={0}>
												<use xlinkHref={'/asset/resources/work/EngineUserPanel-icons/designtime.svg#icon-NotWorking'} />
											</svg>
										</div>
										<div className={'userStatus-Selector__item userStatus-Selector__item--enable userStatus-Selector__item--fullwidth'} tabIndex={0}>
											<div className={'userStatus-Selector__title-container'}>
												<div className={'ws-flexbox'}>
													<div className={'ws-flex-grow-1 ws-flex-shrink-1 ws-ellipsis'}>
														<div onClick={createPopupUserStatus} title={'Работаю'} className={'userStatus-Selector__title userStatus-Selector__title_working'}>Работаю</div>
													</div>
												</div>
											</div>
										</div>
										<div tabIndex={0} />
										<div tabIndex={0} />
									</div>
									<div className={'engineUser-PanelView__geo'}>
										<svg className={'controls-icon_size-xs controls-icon_style-secondary controls-icon_svg engineUser-PanelView__geoIcon'} fillRule={'evenodd'} tabIndex={0}>
											<use xlinkHref={'/asset/resources/work/EngineUserPanel-icons/designtime.svg#icon-MapMarker'} />
										</svg>
										<span title={''} className={'engineUser-PanelView__geoText ws-ellipsis'}>Undefined</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{closeBtn()}
			</div>
			<div className={'controls-DialogTemplate__content-area controls-background-unaccented controls-PopupTemplate__roundBorder_bottom  controls_border-radius-s'}>
				<div className={'engineUser-PanelView__content ws-flexbox ws-flex-column'} tabIndex={0}>
					<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default engineUser-MenuPanel__scrollContainer'} tabIndex={0}>
						<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
							<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
								<div className={'controls-Scroll-containerBase_userContent'} tabIndex={0}>
									<div>
										<div className={'controls-DemoLogin_ButtonTemplate'} tabIndex={0}>
											<div className={'engineUser-MenuPanelItemTemplate engineUser-MenuPanelItemTemplate-hover engineUser-MenuPanelItemTemplate_size-s controls_EngineUser_theme-default engineUser-MenuPanelButtonTemplate controls_EngineUser_theme-default'} tabIndex={0}>
												<div className={'engineUser-MenuPanelButtonTemplate__icon engineUser-MenuPanelItemTemplate__leftSide controls-margin_right-xs  controls-icon_size-s'} tabIndex={0}>
													<i className={'icon-16 icon-Profile icon-primary'} tabIndex={0} />
												</div>
												<div className={'engineUser-MenuPanelButtonTemplate__caption controls-fontsize-l engineUser-MenuPanelItemTemplate__content'} tabIndex={0}>{s.user_info.email ? s.user_info.email : s.user_info.name}</div>
											</div>
										</div>
									</div>
									<div>
										<div className={'app-CompactPanel__bodyWrapper'} tabIndex={0}>
											<div className={'app-CompactPanel__header'} >
												<div className={'app-AppHeading app-CompactPanel__heading'}>
													<span className={'app-AppHeading__nanomagic'}>nanomagic&nbsp;</span><span className={'app-AppHeading__app app-AppHeading__app-dark'}>приложения</span>
												</div>
												<div className={'controls_toggle_theme-default controls-Tumbler controls-Tumbler__wrapper_radius'} tabIndex={0}>
													<div className={'controls-Tumbler__wrapper controls-Tumbler__wrapper_radius controls-Tumbler__wrapper_same controls-Tumbler__wrapper_horizontal controls-inlineheight-default'} tabIndex={0}>
														<div data-qa={'controls-Tumbler__button'} name={'TumblerButton0'} className={'controls-Tumbler__button controls-Tumbler__button-animation controls-Tumbler__button-default controls-Tumbler__button-enabled controls-Tumbler__button-selected controls-Tumbler__button-selected_same ws-ellipsis'}>
															<div className={'controls-icon_size-s  icon-TFComputer controls-icon ws-flex-shrink-0'} tabIndex={0} />
														</div>
														<div data-qa={'controls-Tumbler__button'} name={'TumblerButton1'} className={'controls-Tumbler__button controls-Tumbler__button-animation controls-Tumbler__button-default controls-Tumbler__button-enabled controls-Tumbler__button-unselected controls-Tumbler__button-unselected_same controls-Tumbler__button-underline_same ws-ellipsis'}>
															<div className={'controls-icon_size-s  icon-PhoneCell controls-icon ws-flex-shrink-0'} tabIndex={0} />
														</div>
														<div className={'controls-Tumbler__button-background controls-Tumbler__button-background-animation controls-Tumbler__button-background_same controls-Tumbler__button-default'} style={{width: '40px', left: '2px'}} />
													</div>
												</div>
											</div>
											<div className={'app-CompactPanel__body'}>
												<div className={'app-CompactPanel__wrap'}>
													<div className={'ws-flexbox app-CompactPanel__wrap-web ws-flex-column'} tabIndex={0}>
														<section className={'app-CompactPanel__list controls-margin_bottom-xs'}>
															<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default app-CompactPanel__tile'} data-name={'app-CompactPanel'} tabIndex={0}>
																<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
																<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_031962f6-0e77-4e55-9ba4-3ec8ef89d872'}>
																	<div className={'controls_list_theme-default controls-TileView_new controls-TileView__itemPaddingContainer controls-TileView__itemsPaddingContainer_spacingLeft_null_itemPadding_null controls-TileView__itemsPaddingContainer_spacingRight_null_itemPadding_null controls-TileView__itemsPaddingContainer_spacingTop_null_itemPadding_null controls-TileView__itemsPaddingContainer_spacingBottom_default_itemPadding_default controls-itemActionsV_menu-hidden'} tabIndex={0}>
																		<div name={'itemsContainer'} data-qa={'tile-container'} className={'controls-ListViewV controls-TileView controls-TileView_orientation-vertical controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_031962f6-0e77-4e55-9ba4-3ec8ef89d872'}></div>
																	</div>
																	<div className={'controls__BaseControl__footer'} tabIndex={0} />
																</div>
															</div>
														</section>
														<footer></footer>
													</div>
													<div></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div tabIndex={0} />
					<div tabIndex={0} />
					<div tabIndex={0} />
					<div tabIndex={0} />
				</div>
			</div>
		</div>
	)
}