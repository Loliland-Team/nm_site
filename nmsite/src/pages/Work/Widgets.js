import React from 'react'
import * as f from '../../utils/functions.js'
import { EngineUser } from './widgets/EngineUser.js'
import { Toolbars } from './widgets/Toolbars.js'
import { HintButton } from './widgets/HintButton.js'
import { Informers } from './widgets/Informer.js'

export function Widgets(props) {
	let s = props.store,
		p = props.page,
		topElems = [],
		bottomElems = []

	if (!f.loadedStyles.WorkPage.nanomagicPage.widgets) f.workWidgets()
	if (!f.loadedStyles.WorkPage.nanomagicPage.widgetRightPanel) f.workWidgetsRightPanel()

	if (!f.loadedStyles.WorkPage.EngineUser._this) f.workEngineUser('')
	topElems.push(<EngineUser key={'EngineUser'} store={s} page={p} />)
	if (!f.loadedStyles.WorkPage.controls.toolbars) f.workControls('toolbars')
	topElems.push(<Toolbars key={'Toolbars'} store={s} page={p} />)

	bottomElems.push(<Informers key={'Informers'} store={s} page={p} />)

	bottomElems.push(<HintButton key={'HintButton'} store={s} page={p} />)

	return (
		<React.Fragment>
			<div className={'nanomagicPage-widgets__rightPanelWrapper ws-flexbox ws-justify-content-start  ws-flex-grow-0 ws-flex-shrink-0 nanomagicPage-MainLayout__rightPanel__left'} tabIndex={0} style={{width: '48px'}}>
				<div className={'nanomagicPage-widgets__rightPanel nanomagicPage-widgets__rightPanel_blockLayout _blockLayout ws-flexbox ws-justify-content-between ws-flex-grow-0 ws-flex-shrink-0'}>
					<div className={'nanomagicPage-widgets__rightPanel__topButtons ws-flexbox ws-flex-column ws-flex-shrink-0'}>{topElems}</div>
					<div className={'nanomagicPage-widgets__rightPanel__bottomButtons ws-flexbox   '} tabIndex={0}>{bottomElems}</div>
				</div>
			</div>
		</React.Fragment>
	)
}