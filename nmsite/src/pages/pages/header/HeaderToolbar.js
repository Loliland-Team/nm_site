import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as f from '../../../utils/functions.js'
import * as r from '../../../utils/Request.js'


export function HeaderToolbar(props) {
	let pages = {
		'tasks-from-me': 'От меня',
		'tasks-in-work': 'Задачи на мне',
		'dialogs': 'Контакты',
		'tasks-controlled': 'Задачи на мне',
		'tasks-done': 'Задачи на мне',
		'tasks-returned': 'От меня',
		'staff-list': 'Сотрудники',
		'staff-statistic-new': 'Сотрудники',
		'staff-structure': 'Сотрудники',
		'contact-center': 'Контакт-центр',
		'support-service': 'Обращения',
		'support-service_clients': 'Обращения',
		'support-service_statistic': 'Обращения',
		'support-service_state': 'Обращения',
		'support-service_types': 'Обращения',
		'support-service_claims': 'Обращения',
		'documents-all': 'Документы',
		'tasks-process': 'По сотрудникам',
		'tasks-stat': 'По сотрудникам',
		'tasks-by-staff': 'По сотрудникам',
		'settings-interface': 'Настройки',
		'settings-functional': 'Настройки',
		'sabydoc-styles': 'Настройки',
		'security-settings': 'Настройки',
		'trusted-networks': 'Настройки',
		'access-requests': 'Настройки',
		'sabydoc-rooms': 'Настройки',
		'saby-integrations': 'Настройки',
		'corp-mail': 'Настройки',
		'company-mail': 'Настройки',
		'sending-sms': 'Настройки',
		'settings-wifi': 'Настройки',
		'notice-settings-employee': 'Настройки',
		'plugin-settings': 'Настройки',
	},
		p = props.page,
		s = props.store

	let addTask = ['tasks-in-work', 'tasks-controlled', 'tasks-from-me'].includes(p),
		addContact = ['dialogs', 'people', 'contacts'].includes(p),
		transferButton = ['tasks-in-work'].includes(p)

	function createSelectTaskType(e) {
		f.createPopup('selectTaskTypeDialog', s, p)
	}

	return (
		<div className={'nanomagicPage-MainLayout__headerLeft ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center controls-padding_right-m'} style={{minWidth: (window.outerWidth / 4.75) + 'px'}}>
			<div className={'nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-margin_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline'}>
				{p === undefined ? <Link className={'ws-flexbox ws-flex-shrink-1 ws-flex-grow-1 NavigationPanels-Container NavigationPanels-Logo NavigationPanels-Logo-default NavigationPanels-HeaderLogo nanomagicPage-MainLayout__logo navigation_theme controls-margin_left-xl ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline'} to={'/'} data-qa={'NavigationPanels-Logo'} tabIndex={0}>
					<div className={'ws-flexbox NavigationPanels-Container'} tabIndex={0}>
						<div className={'ws-flexbox NavigationPanels-Sidebar__sabyLogo NavigationPanels-Sidebar__sabyLogo-Header'}>
							<span className={'NavigationPanels-Sidebar__sabyLogo_title_default NavigationPanels-Sidebar__sabyLogo_title-Header'}>nanomagic</span>
						</div>
					</div>
				</Link> : <span className={'controls-Header__caption  controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top'} title={pages[p]} tabIndex={0}>{pages[p]}</span>}
			</div>
			{addTask ? <span onClick={(e) => createSelectTaskType(e)} className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper extControls-addButton nanomagicPage-MainLayout__addButton ws-flex-shrink-0 controls-margin_left-m controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl'}>
				<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'}>
					<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-default controls-icon icon-RoundPlus'} tabIndex={0} />
				</span>
			</span> : ''}
			{addContact ? <span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter controls-MenuButton controls-MenuButton__Wrapper extControls-addButton nanomagicPage-MainLayout__addButton ws-flex-shrink-0 controls-margin_left-m controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl'}>
				<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'}>
					<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-default controls-icon icon-RoundPlus'} tabIndex={0} />
				</span>
			</span> : ''}
			<div className={'controls-Toolbar nanomagicPage-MainLayout__toolbar-empty nanomagicPage-MainLayout__mainToolbar controls-margin_left-m'}>
				<div className={'controls-Toolbar_content controls-Toolbar_content-horizontal'} />
			</div>
			{transferButton ? <div className={'edws-TransferButton ws-flexbox ws-align-items-center ws-ellipsis nanomagicPage-MainLayout__topTemplate ws-flexbox ws-flex-grow-0 ws-flex-shrink-0 controls-margin_left-m undefined'} data-name={'edws-TransferButton'} tabIndex={0}>
				<div name={'edws-TransferButton__delegate'} className={'hint-HintInfoboxContainer controls_Hint_theme-default'}>
					<span className={'controls-BaseButton controls-Button_filled controls-Button_radius-filled controls-Button_hoverIcon controls-Button_clickable controls-Button_filled_style-pale controls-Button_bg-contrast controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_filled_shadow-pale controls-notFocusOnEnter ws-flex-grow-0 ws-flex-shrink-1 edws-TransferButton__arrowButton controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_filled_xl'} tabIndex={0}>
						<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-filled controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_filled_xl'}>
							<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-default controls-icon icon-Publish2 '} tabIndex={0} />
						</span>
					</span>
				</div>
			</div> : ''}
		</div>
	)
}