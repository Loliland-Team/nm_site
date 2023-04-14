import React from 'react'

export function NewsPage(props) {
	return (
		<React.Fragment>
			<iframe src={'https://loliland.ru/'} style={{margin: 0, padding: 0, width: '100vw', height: 'calc(100vh - 5px)'}} />
			<a href={'/'} className={'button7'} style={{position: 'absolute', top: 0, left: 0}}>Home</a>
		</React.Fragment>
	)
}