export function HintButton(props) {
	let p = props.page,
		s = props.store

	return (
		<div className={'hint-helpButton__helpButtonWrapper nanomagicPage-HelpButton ws-align-self-center'} data-qa={'nanomagicPage-helpButton'} tabIndex={0} key={'helpButton'}>
			<div data-hint-target={'helpButton'} className={'hint-helpButton__wrapper controls_Hint_theme-default hint-helpButton__container controls-Popup__isolatedFocusingContext ws-flexbox ws-align-items-end'} tabIndex={0}>
				<div name={'helpButtonTarget'} className={'hint-helpButton__button hint-helpButton__button-compressed'}>
					<div className={'hint-helpButton__icon'}>
						<svg xmlns={'http://www.w3.org/2000/svg'} width={12} height={16} viewBox={'0 0 12 16'} className={'hint-helpButton__iconFill'} tabIndex={0}>
							<path d={'M5.69,12.92 C6.18718204,12.8766025 6.66632962,13.1173195 6.92830264,13.5421059 C7.19027566,13.9668922 7.19027566,14.5031078 6.92830264,14.9278941 C6.66632962,15.3526805 6.18718204,15.5933975 5.69,15.55 C5.19281796,15.5933975 4.71367038,15.3526805 4.45169736,14.9278941 C4.18972434,14.5031078 4.18972434,13.9668922 4.45169736,13.5421059 C4.71367038,13.1173195 5.19281796,12.8766025 5.69,12.92 Z M6.06,0.55 C8.76,0.55 10.57,2.15 10.54,4.33 C10.5474607,5.80790664 9.71888268,7.16305759 8.4,7.83 C7.09,8.61 6.71,9.15 6.71,10.2 L6.71,10.83 C6.71,11.26 6.24,11.62 5.65,11.62 C5.06,11.62 4.59,11.27 4.59,10.83 L4.59,10.01 C4.5280761,8.63412981 5.32459189,7.36368711 6.59,6.82 C7.82,6.07 8.26,5.48 8.26,4.43 C8.24429078,3.84902829 7.98507127,3.30142255 7.54568861,2.92100466 C7.10630594,2.54058676 6.52723971,2.362404 5.95,2.43 C4.57909249,2.41043525 3.43043914,3.46263679 3.33,4.83 C3.33,5.22 2.9,5.54 2.38,5.54 C1.86,5.54 1.43,5.22 1.43,4.83 C1.43502111,3.63446975 1.93639852,2.49473728 2.81430423,1.68319593 C3.69220994,0.87165458 4.86775973,0.461225406 6.06,0.55 Z'} xmlns={'http://www.w3.org/2000/svg'} className={'hint-helpButton__iconFill'} />
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}