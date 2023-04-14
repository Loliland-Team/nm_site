import React from 'react'
import * as f from '../../utils/functions.js'
import * as r from '../../utils/Request.js'
import { TaskPage } from './TaskPage.js'
import { HeaderToolbar } from './header/HeaderToolbar.js'
import { SearchToolbar} from './header/SearchToolbar.js'
import { SortingToolbar } from './header/SortingToolbar.js'
import { Link } from 'react-router-dom'

export function MainLayout(props) {
	let p = props.page,
		s = props.store

	if (!f.loadedStyles.WorkPage.controls.heading) f.workControls('heading')
	if (!f.loadedStyles.WorkPage.controls.list) f.workControls('list')
	if (!f.loadedStyles.WorkPage.controls.baseList) f.workControls('baseList')
	if (!f.loadedStyles.WorkPage.controls.baseTree) f.workControls('baseTree')
	if (!f.loadedStyles.WorkPage.controls.baseDecorator) f.workControls('baseDecorator')
	if (!f.loadedStyles.WorkPage.nanomagicPage.mainLayout) f.workNMPage('mainLayout')
	if (!f.loadedStyles.WorkPage.nanomagicPage.contentLayout) f.workNMPage('contentLayout')
	if (!f.loadedStyles.WorkPage.controls.filter) f.workControls('filter')
	if (!f.loadedStyles.WorkPage.controls.tabs) f.workControls('tabs')
	let content

	if (['tasks-in-work', 'tasks-done', 'tasks-returned', 'tasks-from-me', 'tasks-controlled'].includes(p)) content = <TaskPage store={s} page={p} />
	else content = <div className={'dashboard-Page__Layout ws-flexbox ws-flex-column nanomagicPage-MainLayout__workspaceTemplate ws-workspace-width-' + r.settings.useMaxWidth} data-qa={'dashboard-page'} tabIndex={0}>
		<div className={'dashboard-Page__Layout_body'}>
			<div className={'controls-LoadingIndicator dashboard-Page__Layout_indicator'}>
				<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default dashboard-Page__Scroll controls-loading-indicator_content'}>
					<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'}>
						<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
							<div className={'dashboard-Page__Layout_dashboardContainer controls-Scroll-containerBase_userContent'} tabIndex={0}>
								<div className={'dashboard-View dashboard-Page__Layout_dashboard'} tabIndex={0}>
									<div className={'SiteEditorBase-widget undefined siteEditorBase-Player__widget undefined'} data-qa={'siteEditorBase-Constructor__widget'} tabIndex={0} key={'str'}>
										{p}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	return (
		<div className={'nanomagicPage-MainLayout__workspaceWrapper nanomagicPage-MainLayout__workspaceWrapper_contrast ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 nanomagicPage-MainLayout__content'} tabIndex={0}>
			<div tabIndex={0} />
			{['my-general-info', 'system-access', 'my-wall', 'my-training-skills', 'notice-settings-my-page', 'my-workstation', 'staff-actions-in-system', 'business-processes', 'identList', 'my-signatures', 'my-albums', 'my-groups', 'plugin-settings-person'].includes(p) ? '' : <div name={'header'} className={'nanomagicPage-MainLayout__header_default ws-flexbox ws-flex-row ws-flex-shrink-0 ws-align-items-center  ws-workspace-width' + r.settings.useMaxWidth} tabIndex={0}>
				<div className={'nanomagicPage-MainLayout__headerLeft ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center controls-padding_right-m'} style={{minWidth: '0px'}}>
					<HeaderToolbar page={p} store={s} ket={'HeaderToolbar'} />
				</div>
				<div className={'ws-flexbox nanomagicPage-MainLayout__search ws-flex-shrink-0 ws-justify-content-' + (['tasks-in-work'].includes(p) ? 'start' : 'end')}>
					<SearchToolbar page={p} store={s} ket={'SearchToolbar'} />
				</div>
				<SortingToolbar page={p} store={s} ket={'SortingToolbar'} />
			</div>}
			<div className={'nanomagicPage-MainLayout__workspace ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-flex-column'} tabIndex={0}>
				<div className={'ws-flexbox ws-flex-grow-0 ws-flex-shrink-0'}>
					<div data-qa={'nanomagicPage-tabs'} className={'controls-Tabs controls-Tabs__horizontal  controls-Tabs_inlineHeight-s nanomagicPage-MainLayout__tabs'} name={'container'} tabIndex={0}>
						<div name={'wrapper'} className={'controls-Tabs-wrapper controls-Tabs-wrapper__horizontal'}>
							{['tasks-in-work', 'tasks-controlled', 'tasks-done'].includes(p)
									? <React.Fragment>
									<div name={'tabtasks-in-work'} title={'В работе'} data-name={'tasks-in-work'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_last controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 32}}>
										<div className={'controls-Tabs__items_wrapper'}>
											<div name={'TabContent3'} className={'controls-Tabs__itemClickableArea controls-Tabs__item-element controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (['tasks-in-work'].includes(p) ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'} tabIndex={0}>
												{['tasks-in-work'].includes(p)
													? <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_view_selected controls-text-primary'} data-qa={'TabsItemSelected'} to={'/work/tasks-in-work'} tabIndex={0}>
														<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>В работе</div>
													</Link>
													: <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_state_default controls-text-secondary'} to={'/work/tasks-in-work'} tabIndex={0}>
														<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>В работе</div>
													</Link>}
											</div>
										</div>
									</div>
									<div name={'tabtasks-controlled'} title={'На контроле'} data-name={'tasks-controlled'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_last controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 32}}>
										<div className={'controls-Tabs__items_wrapper'}>
											<div name={'TabContent1'} className={'controls-Tabs__itemClickableArea controls-Tabs__item-element controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (['tasks-controlled'].includes(p) ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'} tabIndex={0}>
												{['tasks-controlled'].includes(p)
													? <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_view_selected controls-text-primary'} data-qa={'TabsItemSelected'} to={'/work/tasks-controlled'} tabIndex={0}>
														<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>На контроле</div>
													</Link>
													: <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_state_default controls-text-secondary'} to={'/work/tasks-controlled'} tabIndex={0}>
														<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>На контроле</div>
													</Link>}
											</div>
										</div>
									</div>
									<div name={'tabtasks-done'} title={'Выполненные'} data-name={'tasks-done'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_last controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 32}}>
										<div className={'controls-Tabs__items_wrapper'}>
											<div name={'TabContent2'} className={'controls-Tabs__itemClickableArea controls-Tabs__item-element controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (['tasks-done'].includes(p) ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'} tabIndex={0}>
												{['tasks-done'].includes(p)
													? <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_view_selected controls-text-primary'} data-qa={'TabsItemSelected'} to={'/work/tasks-done'} tabIndex={0}>
														<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Выполненные</div>
													</Link>
													: <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_state_default controls-text-secondary'} to={'/work/tasks-done'} tabIndex={0}>
														<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Выполненные</div>
													</Link>}
											</div>
										</div>
									</div>
								</React.Fragment>
								: (
									['tasks-from-me', 'tasks-returned'].includes(p)
									? <React.Fragment>
										<div name={'tabtasks-from-me'} title={'Список'} data-name={'tasks-from-me'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_last controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 32}}>
											<div className={'controls-Tabs__items_wrapper'}>
												<div name={'TabContent1'} className={'controls-Tabs__itemClickableArea controls-Tabs__item-element controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (['tasks-from-me'].includes(p) ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'} tabIndex={0}>
													{['tasks-from-me'].includes(p)
														? <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_view_selected controls-text-primary'} data-qa={'TabsItemSelected'} to={'/work/tasks-from-me'} tabIndex={0}>
															<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Список</div>
														</Link>
														: <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_state_default controls-text-secondary'} to={'/work/tasks-from-me'} tabIndex={0}>
															<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Список</div>
														</Link>}
												</div>
											</div>
										</div>
										<div name={'tabtasks-returned'} title={'Вернулись'} data-name={'tasks-returned'} className={'controls-Tabs__item controls-Tabs__item_inlineHeight-s controls-Tabs_horizontal-padding-xs_last controls-Tabs__item-maxWidth controls-Tabs__item_align_right controls-Tabs__item_default controls-Tabs__item_type_tabs controls-Tabs__item_canShrink'} style={{order: 32}}>
											<div className={'controls-Tabs__items_wrapper'}>
												<div name={'TabContent2'} className={'controls-Tabs__itemClickableArea controls-Tabs__item-element controls-Tabs__itemClickableArea_inlineHeight-s  controls-marker controls-marker_horizontal controls-marker_tabsThickness_horizontal ' + (['tasks-returned'].includes(p) ? 'controls-marker_style-tabsprimary' : 'controls-marker_state-default') + ' controls-Tabs__itemClickableArea_type-tabs'} tabIndex={0}>
													{['tasks-done'].includes(p)
														? <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_view_selected controls-text-primary'} data-qa={'TabsItemSelected'} to={'/work/tasks-returned'} tabIndex={0}>
															<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Вернулись</div>
														</Link>
														: <Link className={'ws-flexbox ws-align-items-center controls-Tabs__item_state_default controls-text-secondary'} to={'/work/tasks-returned'} tabIndex={0}>
															<div className={'controls-Tabs__item_overflow controls-Tabs__itemClickableArea controls-Tabs__itemClickableArea_inlineHeight-s'} tabIndex={0}>Вернулись</div>
														</Link>}
												</div>
											</div>
										</div>
									</React.Fragment>
										: '')}
							<div className={'controls-Tabs__space controls-Tabs__space_inlineHeight-s'}>
								<div className={'nanomagicPage-MainLayout__beforeTabsTemplateLeft ws-flexbox ws-align-items-baseline ws-align-self-baseline ws-flex-shrink-1'} tabIndex={0} style={{minWidth: '0px'}}>
									<div className={'hint-HintInfoboxContainer controls_Hint_theme-default nanomagicPage-MainLayout__filter nanomagicPage-MainLayout__filterLeft nanomagicPage-MainLayout__filterLeft_contrast'} data-name={'nanomagicPage-MainLayout__filterTemplate'} tabIndex={0}>
										<div className={'controls_filter_theme-default controls-FilterView controls-FilterView-left controls-FilterView_withButton'} tabIndex={0}>
											<div className={'controls-FilterView__wrapper'} />
											<div name={'detailPanelTarget'} data-qa={'FilterView__icon'} data-name={'FilterView__icon'} className={'controls-FilterView__icon controls-FilterView-button-left controls-FilterView__icon_state_enabled icon-FilterNew'} />
										</div>
										<div tabIndex={0} />
									</div>
								</div>
							</div>
						</div>
						<div className={'controls-Tabs__marker ws-invisible'} />
					</div>
				</div>
				<div className={'nanomagicPage-MainLayout__middle ws-flexbox SbisEnvUI-ParkingBody_same-background tr'}>
					{content}
				</div>
			</div>
		</div>
	)
}