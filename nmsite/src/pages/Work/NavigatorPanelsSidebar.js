import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loadedStyles, workNavigation } from '../../utils/functions.js';
import { getUserImgUrl } from '../../utils/Request.js'

export function NavigationPanelsSidebar(props) {
	let p = props.page,
		s = props.store
	if (!loadedStyles.WorkPage.Navigation) workNavigation();
	let [compat, setCompat] = useState(sessionStorage.getItem('compat') === "true")
	let [hoverTask, setHoverTask] = useState(false)

	function changeCompatNavigationPanels() {
		setCompat(!compat)
		sessionStorage.setItem('compat', !compat)
	}
	let taskCount = 0,
		u

	if (s !== null) {
		u = s.user_info
		s.tasks.forEach(el => {
			if (el.ispoln === s.user_info.user_id) taskCount++
		})
	}

	return s !== null && (
		<div className={'NavigationPanels-Sidebar__container NavigationPanels-Sidebar__wrapper ws-flexbox navigation_theme navigation_theme-onlinenavigation nanomagicPage-MainLayout__sidebar'}>
			<div name={'rootContainer'} className={'NavigationPanels-Sidebar ws-flexbox ws-flex-column ' + (compat ? 'NavigationPanels-Sidebar__width_minimal' : 'NavigationPanels-Sidebar__width_normal')}>
				<div data-qa={'NavigationPanels-Sidebar__header'} className={'NavigationPanels-Sidebar__header ' + (compat ? ' NavigationPanels-Sidebar__header_compact' : '')}>
					<div data-qa={'NavigationPanels-Sidebar__headerTopLine'} className={'ws-flexbox NavigationPanels-Sidebar__headerTopLine'}>
						<div className={'NavigationPanels-Sidebar__beforeLogoTemplate ' + (compat ? 'NavigationPanels-Sidebar__beforeLogoTemplate_compact' : 'NavigationPanels-Sidebar__beforeLogoTemplate_normal') + ' online-QuickAdd ws-flex-grow-0 ws-flex-shrink-0 online-QuickAdd'} tabIndex={0}>
							<Link to={'/work'}>
								<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-quickadd controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-small controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper online-QuickAdd_menu controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl'} data-name={'online-QuickAdd_menu'} data-qa={'QuickAdd-menu'} tabIndex={0} key={'asyncPart'}>
									<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'}>
										<img alt={''} src={'/asset/resources/logo.png'} width={30} />
									</span>
								</span>
							</Link>
						</div>
						{!compat ? <Link to={'/work'} className={'ws-flexbox ws-flex-shrink-1 ws-flex-grow-1 NavigationPanels-Container NavigationPanels-Logo NavigationPanels-Logo-default NavigationPanels-SidebarLogo NavigationPanels-Sidebar__logo NavigationPanels-Sidebar__logo_smallSpacing'} title={'На главную'} data-qa={'NavigationPanels-Logo'} tabIndex={0}>
							<div className={'ws-flexbox NavigationPanels-Container'} tabIndex={0}>
								<div className={'ws-flexbox NavigationPanels-Sidebar__sabyLogo NavigationPanels-Sidebar__sabyLogo-Sidebar'}>
									<span className={'NavigationPanels-Sidebar__sabyLogo_title_default NavigationPanels-Sidebar__sabyLogo_title-Sidebar'}>nanomagic</span>
								</div>
							</div>
						</Link> : ''}
					</div>
					<div data-qa={'NavigationPanels-Sidebar__headerBottomLine'} className={'ws-flexbox NavigationPanels-Sidebar__headerBottomLine'}>
						<div onClick={changeCompatNavigationPanels} data-qa={'NavigationPanels-Sidebar__compactBtn'} className={'NavigationPanels-Sidebar__compactBtn ' + (compat ? 'NavigationPanels-Sidebar__compactBtn_compact' : '') + ' ws-flexbox ws-flex-shrink-0 acc-icon-default acc-icon-Menu'} tabIndex={0} />
						{!compat ? <div className={'NavigationPanels-NavSchemeLink NavigationPanels-Sidebar__navSchemeLink'} data-qa={'NavigationPanels-NavSchemeLink'} data-name={'NavigationPanels-NavSchemeLink'} tabIndex={0}>
							<div data-qa={'NavigationPanels-NavSchemeLink__link'} className={'NavigationPanels-NavSchemeLink__link NavigationPanels-NavSchemeLink__link_inlineHeight-m controls-text-label NavigationPanels-NavSchemeLink__link-hover'}>Рабочая зона</div>
						</div> : ''}
					</div>
				</div>
				<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-onlinenavigation NavigationPanels-Accordion NavigationPanels-Sidebar__accordion ws-flexbox ws-flex-column'} tabIndex={0}>
					<div className={'controls-Scroll-ContainerBase controls_scroll_theme-onlinenavigation controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined ' + (!compat ? 'controls-Scroll__backgroundShadow controls-Scroll__background-Shadow_style-accordion controls-Scroll__background-Shadow_top-auto_bottom-auto_style-default' : '')} name={'content'} data-qa={'controls-Scroll_content'}>
						<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
							<div className={'navigation_theme navigation_theme-onlinenavigation controls_list_theme-onlinenavigation ws-flexbox ws-flex-grow-1 ws-align-items-stretch ws-flex-column  ' + (compat ? 'NavigationPanels-Accordion__width_minimal' : 'NavigationPanels-Accordion__width_normal') + ' controls-Scroll-containerBase_userContent'} tabIndex={0}>
								<div name={'restrictiveTarget'} className={'NavigationPanels-Accordion__subMenuRestrictArea'} />
								<div data-qa={'NavigationPanels-Accordion__container'} className={'NavigationPanels-Accordion__container ' + (compat ? 'NavigationPanels-Accordion__container_compact' : '') + ' ws-flexbox ws-flex-shrink-0 ws-flex-column NavigationPanels-Accordion_showSelectedOnly'}>
									<svg width={0} height={0} className={'clip-svg'}>
										<defs>
											<clipPath id={'NavigationPanels-Accordion__image_ellipse'} clipPathUnits={'objectBoundingBox'}>
												<path d={'M0.5, 0 C 0.625,0 0.7891304347826086, 0.0391304347826087 0.875, 0.125 S 1, 0.375 1, 0.5 S 0.9608695652173914, 0.7891304347826086 0.875,0.875 S 0.625, 1 0.5, 1 S 0.21086956521739128, 0.9608695652173914 0.125, 0.875 S 0, 0.625 0, 0.5 S 0.0391304347826087, 0.21086956521739128 0.125, 0.125 S 0.375,0 0.5,0 '} />
											</clipPath>
										</defs>
									</svg>
									<Link name={'item-contacts'} data-qa={'Контакты'} to={'/work/dialogs'} className={'NavigationPanels-Accordion__item ' + (compat ? 'NavigationPanels-Accordion__item_compact' : 'NavigationPanels-Accordion__item_normal') + ' NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1  NavigationPanels-Accordion__item_showSelectedOnly ' + ( ['dialogs', 'people', 'contacts'].includes(p) ? 'NavigationPanels-Accordion__item_activeMenu' : '') + '  ' + (compat ? ' ws-flex-column' : '')} tabIndex={0}>
										<span className={'NavigationPanels-Accordion__item_substrate'} />
										<span data-qa={'NavigationPanels-Accordion__icon'} date={'1'} className={'NavigationPanels-Accordion__icon NavigationPanels-Accordion__icon_font-colors NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon ' + (compat ? 'acc-icon' : 'acc-icon-small') + ' acc-contacts'} />
										{compat ? <span data-qa={'NavigationPanels-Accordion__item_shortTitle'} className={'NavigationPanels-Accordion__item_shortTitle ' + ( ['dialogs', 'people', 'contacts'].includes(p) ? 'NavigationPanels-Accordion__item_activeShortTitle' : '')}>Контакты</span> : ''}
										<span data-qa={'NavigationPanels-Accordion__title'} className={'NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'}>Контакты</span>
									</Link>
									<Link name={'item-work'} onMouseEnter={() => setHoverTask(true)} onMouseLeave={() => setHoverTask(false)} data-qa={'Задачи'} to={'/work/tasks-in-work'} className={'NavigationPanels-Accordion__item ' + (compat ? 'NavigationPanels-Accordion__item_compact' : 'NavigationPanels-Accordion__item_normal') + ' NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1  NavigationPanels-Accordion__item_showSelectedOnly ' + ( ['tasks-in-work', 'tasks-done', 'tasks-from-me', 'tasks-returned'].includes(p) ? 'NavigationPanels-Accordion__item_activeMenu' : '') + '  ' + (compat ? ' ws-flex-column' : '')}>
										<span className={'NavigationPanels-Accordion__item_substrate'} />
										<span data-qa={'NavigationPanels-Accordion__icon'} date={'2'} className={'NavigationPanels-Accordion__icon NavigationPanels-Accordion__icon_font-colors NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon ' + (compat ? 'acc-icon' : 'acc-icon-small') + ' acc-icon-work'} />
										{hoverTask ? compat ? '' : <div className={'NavigationPanels-Accordion-AddButton__container NavigationPanels-Accordion__AddButton'} name={'container'} tabIndex={0}>
											<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-accordion controls-Button_bg-contrast controls-Button_circle_height-l controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-small controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper NavigationPanels-Accordion-AddButton__button controls-inlineheight-l controls-Button-inlineheight-l controls-Button_filled_l'} data-qa={'NavigationPanels-Accordion-AddButton__dropdown'} title={'Создать задачу'} tabIndex={0}>
												<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_l'}>
													<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-s controls-icon_style-default controls-icon icon-AddForSectoinOfAccordion'} tabIndex={0} />
												</span>
											</span>
										</div> : ''}
										{compat ? <span data-qa={'NavigationPanels-Accordion__item_shortTitle'} className={'NavigationPanels-Accordion__item_shortTitle ' + (['tasks-in-work', 'tasks-done', 'tasks-from-me', 'tasks-returned'].includes(p) ? 'NavigationPanels-Accordion__item_activeShortTitle' : '') }>Задачи</span> : ''}
										<span data-qa={'NavigationPanels-Accordion__title'} className={'NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'}>Задачи</span>
										{compat ? <span data-qa={'NavigationPanels-Accordion__counter'} className={'NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color NavigationPanels-Accordion__counter-background NavigationPanels-Counter__compact NavigationPanels-Counter__lvl-1 navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container'} tabIndex={0} key={'counter_task.onme'} title={'Всего: ' + taskCount}>
											<span data-qa={'counter'} className={'NavigationPanels-Counter__default NavigationPanels-Counter__compact-show NavigationPanels-Counter__compact-all'}>{taskCount}</span>
										</span> : <span data-qa={'NavigationPanels-Accordion__counter'} className={'NavigationPanels-Accordion__counter NavigationPanels-Accordion__counter-arrow-color  NavigationPanels-Accordion__counter-background     NavigationPanels-Counter__lvl-1  NavigationPanels-Counter__has-hover navigation_theme navigation_theme-onlinenavigation NavigationPanels-Counter__container'} tabIndex={0} key={'counter_task.onme'} title={'Всего: ' + taskCount}>
											<span data-qa={'counter'} className={'NavigationPanels-Counter__default'}>{taskCount}</span>
										</span>}
									</Link>
									<Link name={'item-staff'} data-qa={'Сотрудники'} to={'/work/staff-list'} className={'NavigationPanels-Accordion__item ' + (compat ? 'NavigationPanels-Accordion__item_compact' : 'NavigationPanels-Accordion__item_normal') + ' NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1  NavigationPanels-Accordion__item_showSelectedOnly ' + ( ['staff-list'].includes(p) ? 'NavigationPanels-Accordion__item_activeMenu' : '') + '  ' + (compat ? ' ws-flex-column' : '')}>
										<span className={'NavigationPanels-Accordion__item_substrate'} />
										<span data-qa={'NavigationPanels-Accordion__icon'} date={'2'} className={'NavigationPanels-Accordion__icon NavigationPanels-Accordion__icon_font-colors NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon ' + (compat ? 'acc-icon' : 'acc-icon-small') + ' acc-icon-staff'} />
										{compat ? <span data-qa={'NavigationPanels-Accordion__item_shortTitle'} className={'NavigationPanels-Accordion__item_shortTitle ' + (['staff-list'].includes(p) ? 'NavigationPanels-Accordion__item_activeShortTitle' : '') }>Сотр-ки</span> : ''}
										<span data-qa={'NavigationPanels-Accordion__title'} className={'NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'}>Сотрудники</span>
									</Link>
									<Link name={'item-contact-center'} data-qa={'Контакт-центр'} to={'/work/contact-center'} className={'NavigationPanels-Accordion__item ' + (compat ? 'NavigationPanels-Accordion__item_compact' : 'NavigationPanels-Accordion__item_normal') + ' NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1  NavigationPanels-Accordion__item_showSelectedOnly ' + ( ['contact-center'].includes(p) ? 'NavigationPanels-Accordion__item_activeMenu' : '') + '  ' + (compat ? ' ws-flex-column' : '')}>
										<span className={'NavigationPanels-Accordion__item_substrate'} />
										<span data-qa={'NavigationPanels-Accordion__icon'} date={'2'} className={'NavigationPanels-Accordion__icon NavigationPanels-Accordion__icon_font-colors NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon ' + (compat ? 'acc-icon' : 'acc-icon-small') + ' acc-icon-Support'} />
										{compat ? <span data-qa={'NavigationPanels-Accordion__item_shortTitle'} className={'NavigationPanels-Accordion__item_shortTitle ' + (['contact-center'].includes(p) ? 'NavigationPanels-Accordion__item_activeShortTitle' : '') }>К-центр</span> : ''}
										<span data-qa={'NavigationPanels-Accordion__title'} className={'NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'}>Контакт-центр</span>
									</Link>
									<Link name={'item-recipes'} data-qa={'Рецепты'} to={'/work/recipes'} className={'NavigationPanels-Accordion__item ' + (compat ? 'NavigationPanels-Accordion__item_compact' : 'NavigationPanels-Accordion__item_normal') + ' NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1  NavigationPanels-Accordion__item_showSelectedOnly ' + ( ['recipes'].includes(p) ? 'NavigationPanels-Accordion__item_activeMenu' : '') + '  ' + (compat ? ' ws-flex-column' : '')}>
										<span className={'NavigationPanels-Accordion__item_substrate'} />
										<span data-qa={'NavigationPanels-Accordion__icon'} date={'2'} className={'NavigationPanels-Accordion__icon NavigationPanels-Accordion__icon_font-colors NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon ' + (compat ? 'acc-icon' : 'acc-icon-small') + ' acc-icon-Support'} />
										{compat ? <span data-qa={'NavigationPanels-Accordion__item_shortTitle'} className={'NavigationPanels-Accordion__item_shortTitle ' + (['contact-center'].includes(p) ? 'NavigationPanels-Accordion__item_activeShortTitle' : '') }>Рец-ты</span> : ''}
										<span data-qa={'NavigationPanels-Accordion__title'} className={'NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'}>Рецепты</span>
									</Link>
									<Link name={'item-myProfile'} data-qa={'Моя страница'} to={'/work/my-general-info'} className={'NavigationPanels-Accordion__item ' + (compat ? 'NavigationPanels-Accordion__item_compact' : 'NavigationPanels-Accordion__item_normal') + ' NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1  NavigationPanels-Accordion__item_showSelectedOnly ' + ( ['my-general-info'].includes(p) ? 'NavigationPanels-Accordion__item_activeMenu' : '') + '  ' + (compat ? ' ws-flex-column' : '')}>
										<span className={'NavigationPanels-Accordion__item_substrate'} />
										<img alt={''} style={{width: '26px'}} src={getUserImgUrl(s.user_info)} data-qa={'NavigationPanels-Accordion__icon'} date={'2'} className={'NavigationPanels-Accordion__icon NavigationPanels-Accordion__item_custom_icon  NavigationPanels-Accordion__icon_custom  NavigationPanels-Accordion__prevent-default'} />
										{compat ? <span data-qa={'NavigationPanels-Accordion__item_shortTitle'} className={'NavigationPanels-Accordion__item_shortTitle ' + (['my-general-info'].includes(p) ? 'NavigationPanels-Accordion__item_activeShortTitle' : '') }>{u.name}</span> : ''}
										<span data-qa={'NavigationPanels-Accordion__title'} className={'NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'}>{u.name}</span>
									</Link>
									<Link name={'item-online-settings'} data-qa={'Настройки'} to={'/work/settings-interface'} className={'NavigationPanels-Accordion__item ' + (compat ? 'NavigationPanels-Accordion__item_compact' : 'NavigationPanels-Accordion__item_normal') + ' NavigationPanels-Accordion__prevent-default NavigationPanels-Accordion__item_level-1  NavigationPanels-Accordion__item_showSelectedOnly ' + ( ['settings-interface'].includes(p) ? 'NavigationPanels-Accordion__item_activeMenu' : '') + '  ' + (compat ? ' ws-flex-column' : '')}>
										<span className={'NavigationPanels-Accordion__item_substrate'} />
										<span data-qa={'NavigationPanels-Accordion__icon'} date={'2'} className={'NavigationPanels-Accordion__icon NavigationPanels-Accordion__icon_font-colors NavigationPanels-Accordion__item_icon NavigationPanels-Accordion__prevent-default acc-default-icon ' + (compat ? 'acc-icon' : 'acc-icon-small') + ' acc-icon-Setting'} />
										{compat ? <span data-qa={'NavigationPanels-Accordion__item_shortTitle'} className={'NavigationPanels-Accordion__item_shortTitle ' + (['settings-interface'].includes(p) ? 'NavigationPanels-Accordion__item_activeShortTitle' : '') }>Настр-ки</span> : ''}
										<span data-qa={'NavigationPanels-Accordion__title'} className={'NavigationPanels-Accordion__title NavigationPanels-Accordion__title_level-1'}>Настройки</span>
									</Link>
									<div tabIndex={0} />
									<div tabIndex={0} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}