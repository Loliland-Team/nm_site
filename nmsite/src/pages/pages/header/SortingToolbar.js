import React from 'react'
import { setTaskSort, taskSort } from '../../../App.js'

export function SortingToolbar(props) {
	let p = props.page,
		s = props.store

	return (
		<div className={'controls-SortingSelector controls_list_theme-default nanomagicPage-MainLayout__sorting controls-margin_left-m'} data-qa={'edws-sorting'} title={'По дате'} tabIndex={0}>
			<span onClick={setTaskSort} className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_ghost_style-default controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-notFocusOnEnter controls-SortingSelector_button controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'} tabIndex={0} data-qa={'controls-SortingSelector_button'}>
				<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
					<svg fillRule={'evenodd'} className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon_svg '} tabIndex={0}>
						{taskSort ? <use xlinkHref={'/asset/resources/work/Controls/sortIcons.svg#date_DESC'} /> : <use xlinkHref={'/asset/resources/work/Controls/sortIcons.svg#date_ASC'} />}
					</svg>
				</span>
			</span>
		</div>
	)
}