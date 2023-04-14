export function closeBtn() {
	return (
		<span onClick={close} title={'Закрыть'} className={'controls_buttons_theme-default controls-CloseButton__close sbisname-window-title-close controls-StickyTemplate__close_button controls-StickyTemplate__close_button_position-right controls-StickyTemplate__close_button-external controls-StickyTemplate__close_button-external-with-header'} ws-creates-context={'false'} data-qa={'controls-stack-Button__close'} sbisname={'floatAreaCloseButton'} tabIndex={0}>
			<span className={'controls-CloseButton__close__wrapper controls-CloseButton__close_external controls-CloseButton__close_size-m controls-CloseButton__close_external_offset'}>
				<svg className={'controls-CloseButton__close__icon_external'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 12 12'}>
					<path
						xmlns={'http://www.w3.org/2000/svg'}
						d={'M12.7,12l5.16-5.16a0.49,0.49,0,0,0-.7-0.7L12,11.3,6.84,6.14a0.49,0.49,0,0,0-.7.7L11.3,12,6.14,17.16a0.49,0.49,0,1,0,.7.7L12,12.7l5.16,5.16a0.49,0.49,0,0,0,.7-0.7Z'}
						transform={'translate(-6 -6)'}
					/>
				</svg>
			</span>
		</span>
	)
}

function close(event) {
	event.currentTarget.closest('[templatename]').remove()
}