import React from 'react'
import { createPopup } from '../../../utils/functions.js'

export function EngineUser(props) {
	let s = props.store,
		p = props.page

	function engineUserCreatePopup() {
		createPopup('EngineUserPanel/View', s, p)
	}

	return (
		<React.Fragment>
			<div onClick={engineUserCreatePopup} className={'engineUser-UserStatus ws-flexbox controls_EngineUser_theme-default nanomagicPage-MainLayout__commandItem-default'} data-name={'engineUser-UserStatus'} tabIndex={0}>
				<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter engineUser-UserStatus_name controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'} title={s.user_info.name + ' / Работаю'} tabIndex={0}>
					<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
						<span className={'controls-BaseButton__text controls-text-label controls-Button__text-label_viewMode-ghost controls-Button__text_viewMode-ghost'} tabIndex={0}>
							<span className={'engineUser-UserStatus_marker engineUser-UserStatus_fullCircle'} tabIndex={0}>
								{s.user_info.name?.substr(0, 2).toUpperCase()}
							</span>
						</span>
					</span>
				</span>
			</div>
		</React.Fragment>
	)
}