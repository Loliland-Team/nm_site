import React from 'react'
import * as f from '../../../utils/functions.js'

export function Informers(props) {
	let p = props.page,
		s = props.store

	if (!f.loadedStyles.WorkPage.Informers.bar) f.workInformersBar()

	return (
		<div className={'nanomagicPage-widgets__wrapper ws-flexbox ws-flex-shrink-1 ws-justify-content-between ws-align-items-center'}>
			<div className={'nanomagicPage-widgets__informersWrapper controls-margin_bottom-xs nanomagicPage-widgets__informersWrapper-shadow ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 ws-align-items-center ws-justify-content-end'}>
				<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default informers_InformersBar'}>
					<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'}>
						<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
							<div className={'informers_InformersBar ws-inline-flexbox ws-flex-shrink-0 ws-align-items-center ws-flex-column-reverse controls-Scroll-containerBase_userContent'}>
								<div className={'informers-InformersBar-informer_content_wrapper'}>
									<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} title={'Новое сообщение'} />
									<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container informers_InformersBar-informers_container-last'} data-qa={'informers_informerContent_Messages_icon'} title={'Новое сообщение'}>
										<div className={'icon-EmptyMessage controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext'} />
									</div>
								</div>
								<div className={'informers-InformersBar-informer_content_wrapper'}>
									<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} title={'Звонок'} />
									<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container '} data-qa={'informers_informerContent_Calls_icon'} title={'Звонок'}>
										<div className={'icon-PhoneNull controls-icon_size-s informers-InformersBar-informer_content-icon controls-icon_style-default controls-Popup__isolatedFocusingContext'} />
									</div>
								</div>
								<div className={'informers-InformersBar-informer_content_wrapper'}>
									<div className={'informers-InformersBar-informer_click_wrapper informers-InformersBar-informer-click_container'} />
									<div className={'informers-InformersBar-informer-header_container ws-flexbox informers-InformersBar-informer_container '} data-qa={'informers_informerContent_TodayInformer_icon'}>
										<div title={'Дела на сегодня'} className={'WTM-Today__Informer'} tabIndex={0} style={{display: 'contents'}}>
											<div className={'WTM-Today__Informer_number'} style={{marginTop: '1px'}}>{(new Date()).getDate()}</div>
											<div className={'WTM-Today__Informer_day'} style={{fontSize: '11px', marginTop: '-4px'}}>{(new Date()).toLocaleString('ru-RU', {weekday: 'short'})}</div>
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