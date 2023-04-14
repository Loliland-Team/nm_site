import { Link, useParams } from 'react-router-dom'
import { NavigationPanelsSidebar } from './Work/NavigatorPanelsSidebar.js'
import { Widgets } from './Work/Widgets.js'
import * as f from '../utils/functions.js'
import * as r from '../utils/Request.js'
import { MainLayout } from './pages/MainLayout.js'

export function WorkPage(props) {
	let store = props.store
	let {page} = useParams()

	if (store.user_info.user_group >= 14) window.location.href = '/'

	if (!f.loadedStyles.WorkPage._this) f.workPage()
	if (!f.loadedStyles.WorkPage.uicore) f.workUICore()
	if (!f.loadedStyles.WorkPage.tailwind) f.workTailwind()

	return (
		<div style={{width: 'inherit', height: 'inherit'}}>
			<Link to={''} className={'vdom-focus-in'} tabIndex={1} />
			<div className={'bodyContent controls_themes__wrapper controls_theme-default undefined'} tabIndex={0}>
				<div id={'popup'} className={'controls-PopupContainer ws-float-area-stack-panel-overflow'} tabIndex={0} />
				<div className={'page-Controller bodyContent__zIndex-context'} tabIndex={0}>
					<div tabIndex={0} />
					<div name={'page'} style={{maxWidth: r.settings.useMaxWidth + 'px'}} className={'ws-flexbox ws-flex-column nanomagicPage-MainLayout controls-BlockLayout_background ws-site-width-1856 page-Controller__content controls-hint-area'} tabIndex={0}>
						<div className={'ws-flexbox ws-flex-grow-1 nanomagicPage-MainLayout__blockWrapper'}>
							<div className={'nanomagicPage-MainLayout__mainContent controls-BlockLayout__block ws-flexbox ws-flex-shrink-1 ws-flex-grow-1 ws-flex-row'}>
								<NavigationPanelsSidebar page={page} store={store} />
								{/*<ResizingLineRightPanel /> */}
								<Widgets page={page} store={store} />
								{/*<ResizingLineMain /> */}
								<MainLayout page={page} store={store} />
								<div tabIndex={0} />
							</div>
						</div>
					</div>
				</div>
				<div className={'controls-LoadingIndicator'} tabIndex={0}>
					<div className={'controls-loading-indicator_content'} tabIndex={0} />
				</div>
			</div>
			<Link to={''} className={'vdom-focus-out'} tabIndex={-1} />
		</div>
	)
}