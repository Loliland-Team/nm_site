import React from 'react'
import * as f from '../../../utils/functions.js'

export function Toolbars(props) {
	let s = props.store,
		p = props.page

	return (
		<div className={'controls-Toolbar nanomagicPage-widgets__rightToolbar'} tabIndex={0}>
			<div className={'controls-Toolbar_content controls-Toolbar_content-vertical'}>
				{[undefined].includes(p) ? <div data-name={'edit'} data-qa={'edit'} className={'controls-Toolbar__item  controls-Toolbar__item'} title={'Настроить страницу'}>
					<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-Toolbar__button  controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'}>
						<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
							<svg fillRule={'evenodd'} className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon_svg '} tabIndex={0}>
								<use xlinkHref={'/asset/resources/Dashboard-icons/designtime.svg#icon-DashboardEditor'} />
							</svg>
						</span>
					</span>
				</div> : ''}
			</div>
		</div>
	)
}