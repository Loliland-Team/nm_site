import React, { useState } from 'react'
import * as f from '../utils/functions.js'
import { WorkPage } from './WorkPage.js'
// import { GuidePage } from './GuidePage.js'
// import { PricePage } from './PricePage.js'
// import { ForumPage } from './ForumPage.js'
import { NewsPage } from './NewsPage.js'
import detect from '../utils/detect.js'
import { logout } from '../utils/Request.js'
const body = document.body

export function MainPage(props) {
	const [loading, setLoading] = useState(true);
	let loader = document.querySelector('div.loader')

	let store = props.store

	function Page(p) {
		window.location.href = p
	}

	let userAgent = detect.parse(navigator.userAgent)
	if (userAgent.browser.family.toLowerCase() === "chrome") body.classList.add('ws-is-chrome')
	if (userAgent.os.family.toLowerCase() === 'windows 10') body.classList.add('ws-is-windows-10')
	if (userAgent.device.type.toLowerCase() === 'desktop') body.classList.add('ws-is-desktop-platform')
	else body.classList.add('ws-is-mobile-platform')
	body.classList.add('zIndex-context')
	body.classList.add('ws-is-no-touch', 'ws-is-no-drag')
	body.classList.add('Application-body')
	body.classList.add('controls_theme-default')
	if (navigator.language === 'ru') body.classList.add('ru', 'ru-RU')
	body.classList.add('nanomagicPage-MainLayout__body', 'nanomagicPage-MainLayout__body_width', 'undefined', 'ws-is-hover')

	let str = f.stringGen(8) + '-' + f.stringGen(4) + '-' + f.stringGen(4) + '-' + f.stringGen(4) + '-' + f.stringGen(12)

	if (props.loc === '/work') {
		// loadStyle

		if (loading && loader.style.display === 'none')
			loader.style.display = ''

		if (loading && loader) {
			setTimeout(() => {
				setLoading(false)
				loader.style.display = 'none'
			}, 2000)
		}

		return <WorkPage store={store} loc={props.loc} />
	}
	// else if (props.loc === '/guides') {
	// 	// loadStyle
	//
	// 	if (loading) {
	// 		setTimeout(() => {
	// 			setLoading(false)
	// 			loader.remove()
	// 		}, 4000)
	// 	}
	//
	// 	return <GuidePage />
	// }
	// else if (props.loc === '/prices') {
	// 	// loadStyle
	//
	// 	if (loading) {
	// 		setTimeout(() => {
	// 			setLoading(false)
	// 			loader.remove()
	// 		}, 4000)
	// 	}
	//
	// 	return <PricePage />
	// }
	// else if (props.loc === '/forum') {
	// 	// loadStyle
	//
	// 	if (loading) {
	// 		setTimeout(() => {
	// 			setLoading(false)
	// 			loader.remove()
	// 		}, 4000)
	// 	}
	//
	// 	return <ForumPage />
	// }
	else if (props.loc === '/news') {
		// loadStyle

		if (loading) {
			setTimeout(() => {
				setLoading(false)
				loader.remove()
			}, 3000)
		}

		return <NewsPage page={props.loc} store={store} />
	}
	else {
		// loadStyle
		if (!f.loadedStyles.Main._this) f.mainStyle()
		if (!f.loadedStyles.Auth._this) f.authStyle()
		if (!f.loadedStyles.Auth.popup) f.authPopup()
		for (let el in f.loadedStyles.Auth.controls) {
			if (!f.loadedStyles.Auth.controls[el]) f.aControls(el)
		}
		for (let el in f.loadedStyles.Auth.authControls) {
			if (!f.loadedStyles.Auth.authControls[el]) f.authControls(el)
		}
		if (!f.loadedStyles.Auth.themes.pageTemplate) f.authTPT()
		if (!f.loadedStyles.Auth.tailwind) f.authTailwind()
		if (!f.loadedStyles.Auth.uicore) f.authUICore()
		if (!f.loadedStyles.Auth.settings.view) f.authSettingsView()
		if (!f.loadedStyles.Auth.nav) f.authNav()
		if (!f.loadedStyles.Auth.sbis) f.authSbis()
		if (!f.loadedStyles.Auth.page.template) f.authPageTemplate()


		if (loading && loader.style.display === 'none')
			loader.style.display = ''

		if (loading && loader) {
			setTimeout(() => {
				setLoading(false)
				loader.style.display = 'none'
			}, 2000)
		}

		return !loading && (
			<div className={''} tabIndex={0} style={{width: 'inherit', height: 'inherit'}}>
				<a className={'vdom-focus-in'} tabIndex={1}/>
				<div className={'bodyContent'} tabIndex={0}>
					<div id={'popup'} className={'controls-PopupContainer ws-float-area-stack-panel-overflow'} tabIndex={0}/>
					<div className={'page-Entity__containerWrapper bodyContent__zIndex-context'} tabIndex={0} style={{width: '100%', height: '100%'}}>
						<div className={'auth-authTemplate auth-AuthTemlate__relative auth-AuthTemplate__allSize page-Entity__content undefined'} tabIndex={0}>
							<div className={'auth-AuthTemplate__background_template auth-AuthTemplate__background auth-AuthTemplate__allSize'} tabIndex={0} />
							<div className={'auth-AuthTemplate__main auth-AuthTemplate__relative ws-flexbox ws-flex-column ws-align-items-center ws-justify-content-between'}>
								<div className={'auth-AuthTemplate__head controls-margin_top-xl auth-AuthTemplate__absoluteHead'}>
									<div className={'auth-AuthTemplate__head_logo auth-AuthTemplate__marginLeft ws-flexbox'}>
										<div className={'ws-flexbox NavigationPanels-Container navigation_theme-default auth-AuthTemplate__navigationLogo'} tabIndex={0}>
											<div className={'ws-flexbox NavigationPanels-Sidebar__sabyLogo NavigationPanels-Sidebar__sabyLogo-Header'}>
												<span className={'NavigationPanels-Sidebar__sabyLogo_title_default NavigationPanels-Sidebar__sabyLogo_title-Header'}>NanoMagic RPG</span>
											</div>
										</div>
									</div>
								</div>
								<div className={'ws-flexbox auth-AuthTemplate__contentWithoutScrollArbitrary'} tabIndex={0}>
									<div className={'auth-DemoList ws-flexbox ws-flex-column'}>
										<div className={'ws-flexbox ws-align-items-center'}>
											<div data-qa={'auth-DemoList__backButton'} tabIndex={-1} className={'controls-Back'}>
												<div className={'controls-Back__wrapper controls-fontsize-6xl'}>
													<div className={'controls-Back__icon-wrapper  ws-align-items-center'}>
														<div className={'controls-Back__icon_view-button controls-Back__icon_view-button_size-xl'}>
															<svg onClick={(e) => logout(e)} id={'Слой_1'} version={'1.1'} xmlns={'http://www.w3.org/2000/svg'} x={'0px'} y={'0px'} viewBox={'0 0 6 12'} xmlSpace={'preserve'} xmlnsXlink={'http://www.w3.org/1999/xlink'} className={'controls-Back_arrow controls-Back__icon controls-Back__icon_style-primary'}>
																<path d={'M4.58552 0L6 1.23896L2.36136 6L6 10.761L4.58552 12L0 6L4.58552 0Z'} xmlns={'http://www.w3.org/2000/svg'} fillRule={'evenodd'} clipRule={'evenodd'} />
															</svg>
														</div>
													</div>
												</div>
											</div>
											<div className={'controls-fontsize-5xl controls-fontweight-bold controls-margin_left-m'}>Выберите локацию, куда хотите отправиться</div>
										</div>
										<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default ws-flex-grow-1'} tabIndex={0}>
											<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
												<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
													<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default auth-DemoList__tileList controls-Scroll-containerBase_userContent'} data-qa={'auth-DemoList__tileList'} tabIndex={0}>
														<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
														<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_' + str} tabIndex={0}>
															<div className={'controls_list_theme-default controls-TileView_new controls-TileView__itemPaddingContainer controls-TileView__itemsPaddingContainer_spacingLeft_xs_itemPadding_m controls-TileView__itemsPaddingContainer_spacingRight_xs_itemPadding_m controls-TileView__itemsPaddingContainer_spacingTop_null_itemPadding_s controls-TileView__itemsPaddingContainer_spacingBottom_null_itemPadding_s controls-itemActionsV_menu-hidden'} tabIndex={0}>
																{store.user_info.user_group !== 15 && !store.user_info.banned ? <div name={'itemsContainer'} data-qa={'tile-container'} className={'controls-ListViewV controls-TileView_orientation-vertical controls-BaseControl_showActions controls-BaseControl_showActions_onhover controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_' + str}>
																	<div onClick={() => Page('/guides')} attr-data-qa={'key-Guides'} item-key={'guides'} data-qa={'item'} className={'controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs  controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs'} tabIndex={0} style={{flexBasis: '218.5px', height: '87px', maxWidth: '100%'}}>
																		<div className={'controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs controls-TileView__itemContent js-controls-ListView__measurableContainer controls-TileView__item_shadow_hidden controls-TileView__item_unscaleable controls-ListView__item_showActions'}>
																			<div className={'auth-DemoList__block ws-flexbox'} tabIndex={0}>
																				<div className={'auth-DemoList__imgContainer ws-flex-shrink-0'}>
																					<img alt={''} className={'auth-DemoList__img'} src={'/cdn/AppIconCDN/1.0.2/icon3.svg'} />
																				</div>
																				<div className={'auth-DemoList__blockInfo controls-padding_left-s controls-padding_right-m'}>
																					<div title={'Гайды'} className={'auth-DemoList__blockCaption ws-ellipsis controls-margin_top-s controls-fontsize-l controls-fontweight-bold controls-text-secondary'}>Гайды</div>
																					<div className={'controls-text-unaccented controls-fontsize-xs controls-margin_top-2xs'}>Гайды по серверу NanoMagic RPG 1.12.2</div>
																				</div>
																			</div>
																			<div data-qa={'controls-TileView__previewTemplate_itemActions_node'} className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default controls-TileView__itemActions controls-TileView__itemActions_bottomRight controls-itemActionsV_inside'}>
																				<div className={'controls-itemActionsV__wrapper'}>
																					<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Скопировать ссылку для входа'} data-qa={'controls-itemActions__action copyLink'} tabIndex={-1} ws-no-focus={'true'}>
																						<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
																							<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																								<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Link'} tabIndex={0}/>
																							</span>
																						</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	{store.user_info.user_group <= 13 ? <div onClick={() => Page('/work')} attr-data-qa={'key-Work'} item-key={'work'} data-qa={'item'} className={'controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs  controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs'} tabIndex={0} style={{flexBasis: '218.5px', height: '87px', maxWidth: '100%'}}>
																		<div className={'controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs controls-TileView__itemContent js-controls-ListView__measurableContainer controls-TileView__item_shadow_hidden controls-TileView__item_unscaleable controls-ListView__item_showActions'}>
																			<div className={'auth-DemoList__block ws-flexbox'} tabIndex={0}>
																				<div className={'auth-DemoList__imgContainer ws-flex-shrink-0'}>
																					<img alt={''} className={'auth-DemoList__img'} src={'/cdn/AppIconCDN/1.0.2/icon3.svg'}/>
																				</div>
																				<div className={'auth-DemoList__blockInfo controls-padding_left-s controls-padding_right-m'}>
																					<div title={'Гайды'} className={'auth-DemoList__blockCaption ws-ellipsis controls-margin_top-s controls-fontsize-l controls-fontweight-bold controls-text-secondary'}>Работа</div>
																					<div className={'controls-text-unaccented controls-fontsize-xs controls-margin_top-2xs'}>Рабочее пространство NanoMagic RPG 1.12.2</div>
																				</div>
																			</div>
																			<div data-qa={'controls-TileView__previewTemplate_itemActions_node'} className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default controls-TileView__itemActions controls-TileView__itemActions_bottomRight controls-itemActionsV_inside'}>
																				<div className={'controls-itemActionsV__wrapper'}>
																					<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Скопировать ссылку для входа'} data-qa={'controls-itemActions__action copyLink'} tabIndex={-1} ws-no-focus={'true'}>
																						<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
																							<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																								<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Link'} tabIndex={0}/>
																							</span>
																						</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div> : ''}
																	<div onClick={() => Page('/prices')} attr-data-qa={'key-Prices'} item-key={'prices'} data-qa={'item'} className={'controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs  controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs'} tabIndex={0} style={{flexBasis: '218.5px', height: '87px', maxWidth: '100%'}}>
																		<div className={'controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs controls-TileView__itemContent js-controls-ListView__measurableContainer controls-TileView__item_shadow_hidden controls-TileView__item_unscaleable controls-ListView__item_showActions'}>
																			<div className={'auth-DemoList__block ws-flexbox'} tabIndex={0}>
																				<div className={'auth-DemoList__imgContainer ws-flex-shrink-0'}>
																					<img alt={''} className={'auth-DemoList__img'} src={'/cdn/AppIconCDN/1.0.2/icon3.svg'}/>
																				</div>
																				<div className={'auth-DemoList__blockInfo controls-padding_left-s controls-padding_right-m'}>
																					<div title={'Гайды'} className={'auth-DemoList__blockCaption ws-ellipsis controls-margin_top-s controls-fontsize-l controls-fontweight-bold controls-text-secondary'}>Цены</div>
																					<div className={'controls-text-unaccented controls-fontsize-xs controls-margin_top-2xs'}>Цены на предметы сервера NanoMagic RPG 1.12.2</div>
																				</div>
																			</div>
																			<div data-qa={'controls-TileView__previewTemplate_itemActions_node'} className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default controls-TileView__itemActions controls-TileView__itemActions_bottomRight controls-itemActionsV_inside'}>
																				<div className={'controls-itemActionsV__wrapper'}>
																					<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Скопировать ссылку для входа'} data-qa={'controls-itemActions__action copyLink'} tabIndex={-1} ws-no-focus={'true'}>
																						<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
																							<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																								<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Link'} tabIndex={0}/>
																							</span>
																						</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	{store.user_info.forum_banned === false ? <div onClick={() => Page('/forum')} attr-data-qa={'key-Forum'} item-key={'forum'} data-qa={'item'} className={'controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs  controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs'} tabIndex={0} style={{flexBasis: '218.5px', height: '87px', maxWidth: '100%'}}>
																		<div className={'controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs controls-TileView__itemContent js-controls-ListView__measurableContainer controls-TileView__item_shadow_hidden controls-TileView__item_unscaleable controls-ListView__item_showActions'}>
																			<div className={'auth-DemoList__block ws-flexbox'} tabIndex={0}>
																				<div className={'auth-DemoList__imgContainer ws-flex-shrink-0'}>
																					<img alt={''} className={'auth-DemoList__img'} src={'/cdn/AppIconCDN/1.0.2/icon3.svg'}/>
																				</div>
																				<div className={'auth-DemoList__blockInfo controls-padding_left-s controls-padding_right-m'}>
																					<div title={'Гайды'} className={'auth-DemoList__blockCaption ws-ellipsis controls-margin_top-s controls-fontsize-l controls-fontweight-bold controls-text-secondary'}>Форум</div>
																					<div className={'controls-text-unaccented controls-fontsize-xs controls-margin_top-2xs'}>Форум сервера NanoMagic RPG 1.12.2</div>
																				</div>
																			</div>
																			<div data-qa={'controls-TileView__previewTemplate_itemActions_node'} className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default controls-TileView__itemActions controls-TileView__itemActions_bottomRight controls-itemActionsV_inside'}>
																				<div className={'controls-itemActionsV__wrapper'}>
																					<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Скопировать ссылку для входа'} data-qa={'controls-itemActions__action copyLink'} tabIndex={-1} ws-no-focus={'true'}>
																					<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
																						<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																							<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Link'} tabIndex={0}/>
																						</span>
																					</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div> : ''}
																	<div onClick={() => Page('/news')} attr-data-qa={'key-News'} item-key={'news'} data-qa={'item'} className={'controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs  controls-TileView__item controls-ListView__itemV js-controls-ListView__editingTarget controls-TileView__item_unscalable controls-ListView__itemV_cursor-pointer ws-flex-grow-1 controls-TileView__item_spacingLeft_m controls-TileView__item_spacingRight_m controls-TileView__item_spacingTop_s controls-TileView__item_spacingBottom_s  controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs'} tabIndex={0} style={{flexBasis: '218.5px', height: '87px', maxWidth: '100%'}}>
																		<div className={'controls-TileView__item_roundBorder_topLeft_xs controls-TileView__item_roundBorder_topRight_xs controls-TileView__item_roundBorder_bottomLeft_xs controls-TileView__item_roundBorder_bottomRight_xs controls-TileView__itemContent js-controls-ListView__measurableContainer controls-TileView__item_shadow_hidden controls-TileView__item_unscaleable controls-ListView__item_showActions'}>
																			<div className={'auth-DemoList__block ws-flexbox'} tabIndex={0}>
																				<div className={'auth-DemoList__imgContainer ws-flex-shrink-0'}>
																					<img alt={''} className={'auth-DemoList__img'} src={'/cdn/AppIconCDN/1.0.2/icon3.svg'}/>
																				</div>
																				<div className={'auth-DemoList__blockInfo controls-padding_left-s controls-padding_right-m'}>
																					<div title={'Гайды'} className={'auth-DemoList__blockCaption ws-ellipsis controls-margin_top-s controls-fontsize-l controls-fontweight-bold controls-text-secondary'}>Новости</div>
																					<div className={'controls-text-unaccented controls-fontsize-xs controls-margin_top-2xs'}>Новости сервера NanoMagic RPG 1.12.2 и проекта в целом</div>
																				</div>
																			</div>
																			<div data-qa={'controls-TileView__previewTemplate_itemActions_node'} className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default controls-TileView__itemActions controls-TileView__itemActions_bottomRight controls-itemActionsV_inside'}>
																				<div className={'controls-itemActionsV__wrapper'}>
																					<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m controls-itemActionsV__action_padding'} title={'Скопировать ссылку для входа'} data-qa={'controls-itemActions__action copyLink'} tabIndex={-1} ws-no-focus={'true'}>
																					<span ws-no-focus={'true'} className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
																						<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
																							<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-Link'} tabIndex={0}/>
																						</span>
																					</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div> : ''}
															</div>
															<div className={'controls__BaseControl__footer'} tabIndex={0}/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div tabIndex={0}/>
									</div>
								</div>
								<div className={'auth-AuthTemplate__footer ws-flexbox ws-justify-content-between ws-align-items-center'}>
									<div className={'auth-AuthTemplate__langSelector'} tabIndex={0}>
										<div className={'controls-Dropdown engine_LanguageSelector'} tabIndex={0}>
											<div tabIndex={0} className={'engine_LanguageSelector-flagRow'}>
												<div className={'engine_LanguageSelector-flagItem engine_LanguageSelector-flagItem-ru-RU engine_LanguageSelector-flagItem-highRes-ru-RU controls-margin_right-xs'} />
												<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter engine_LanguageSelector-selectedItem'} tabIndex={0}>
													<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
														<span className={'controls-BaseButton__text controls-text-secondary controls-Button__text-secondary_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>RU</span>
													</span>
												</span>
											</div>
										</div>
										<div tabIndex={0}/>
										<div tabIndex={0}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={'controls-LoadingIndicator'} tabIndex={0}>
						<div className={'controls-loading-indicator_content'} tabIndex={0}/>
					</div>
				</div>
				<a className={'vdom-focus-out'} tabIndex={0}/>
			</div>
		)
	}
}