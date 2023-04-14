import { createRoot } from 'react-dom/client'
import { SelectTaskType } from '../pages/Work/Controls/menu/Popup.js'
import { EngineUserPanel } from '../pages/Work/EngineUserPanel/View/EngineUserPanel.js'
import { UserStatusPanel } from '../pages/Work/UserStatus/Panel/UserStatusPanel.js'
import { EDWSTaskCreatePopup } from '../pages/Work/EDWS3/Tasks/taskDialog/Dialog/EDWSTaskCreatePopup.js'

export function stringGen(len) {
	let string = 'abcdefghijklmnopqrstuvwxyz0123456789',
		string2 = ''
	for (let i = 0; i < len; i++) {
		string2 += string[Math.round(Math.random() * string.length)]
	}
	return string2
}

export function loadStyle(domain, name) {
	let link = document.createElement('link')
	link.rel = 'stylesheet'
	link.type = 'text/css'
	link.href = `/asset/resources/${domain}/${name}.min.css`
	document.head.appendChild(link)
}
export function loadFont(domain, name) {
	let link = document.createElement('link')
	link.rel = 'preload'
	link.as = 'font'
	link.href = `/asset/resources/${domain}/fonts/${name}.woff2`
	link.type = 'font/woff2'
	document.head.appendChild(link)
}
export function loadScript(domain, name) {}

export function lsw(name) {
	loadStyle('work', name)
}
export function lsa(name) {
	loadStyle('auth', name)
}
export function lsm(name) {
	loadStyle('main', name)
}

function loadFontsAuth() {
	loadFont('auth', 'cbuc-icons/cbuc-icons')
	loadFont('auth', 'cbuc-icons24/cbuc-icons24')
	loadFont('auth', 'Inter-WindowsHinted/Inter-Italic')
	loadFont('auth', 'Inter-WindowsHinted/Inter-Regular')
	loadFont('auth', 'Inter-WindowsHinted/Inter-SemiBold')
	loadFont('auth', 'Inter-WindowsHinted/Inter-SemiBoldItalic')
}
function loadFontsWork() {
	// loadFont('work', 'cbuc-icons/cbuc-icons')
	// loadFont('work', 'cbuc-icons24/cbuc-icons24')
	// loadFont('work', 'Inter-WindowsHinted/Inter-Italic')
	// loadFont('work', 'Inter-WindowsHinted/Inter-Regular')
	// loadFont('work', 'Inter-WindowsHinted/Inter-SemiBold')
	// loadFont('work', 'Inter-WindowsHinted/Inter-SemiBoldItalic')
}

export let loadedStyles = {
	WorkPage: {
		_this: false,
		Navigation: false,
		uicore: false,
		tailwind: false,
		viewSettings: false,
		nanomagicPage: {
			contentLayout: false,
			widgets: false,
			widgetRightPanel: false,
			mainLayout: false,
		},
		controls: {
			dropdown: false,
			toolbars: false,
			operations: false,
			filter: false,
			baseDecorator: false,
			input: false,
			search: false,
			suggest: false,
			paging: false,
			validate: false,
			checkbox: false,
			itemActions: false,
			markerComponent: false,
			baseList: false,
			heading: false,
			tabs: false,
			date: false,
			sorting: false,
			progress: false,
			themesExt: false,
			scrollbar: false,
			popupTemplate: false,
			skeleton: false,
			CustomColors: false,
			baseTree: false,
			list: false,
			column: false,
			grid: false,
			masterDetail: false,
			Tumbler: false,
		},
		ShowMoreButtons: false,
		EngineUser: {
			_this: false,
			Panel: false,
		},
		Dashboard: {
			"new/dashboard": false,
			"new/compatible": false,
			dashboard: false,
			page: false,
			runtime: false,
			"new/pgEditors": false,
		},
		sbis: {
			header: false,
			parking: false,
		},
		toolbar: {
			edit: false,
		},
		Informers: {
			bar: false,
		},
		tasks: {
			registry: {
				InWork: false,
				Registry: false,
				FromMe: false,
			},
			MasterDetail: {
				MasterDetail: false,
			},
			"MasterView/MasterView": false,
		},
		person: {
			popup: {
				previewController: false,
			},
			photo: false,
		},
		edo3: {
			browser: false,
		},
		edo3core: {
			browsertemplate: false,
		},
		Message: {
			search: false,
		},
		EngineUserPanel: {
			View: false,
		},
		EngineLanguage: {
			_this: false,
		},
		UserStatus: {
			Selector: false,
			Panel: false,
		},
		AppSelector: {
			appPanel: false,
		},
	},

	Main: {
		_this: false
	},

	Login: {
		_this: false
	},

	Auth: {
		_this: false,
		controls: {
			baseDecorator: false,
			baseList: false,
			baseTree: false,
			checkbox: false,
			dropdown: false,
			heading: false,
			input: false,
			itemActions: false,
			list: false,
			markerComponent: false,
			markup: false,
			menu: false,
			popupTemplate: false,
			scrollbar: false,
			tile: false,
			toggle: false,
			validate: false,
			extemdedDecorator: false
		},
		page: {
			template: false,
		},
		themes: {
			pageTemplate: false,
		},
		authControls: {
			_authForm: false,
			_demo: false,
			_oauth: false,
			_stepsMaster: false,
		},
		nmPage: false,
		nav: false,
		sbis: false,
		tailwind: false,
		uicore: false,
		settings: {
			view: false,
		}
	},
}

export function workPage() {
	loadedStyles.WorkPage._this = true
	lsw('Page/base')
	loadFontsWork()
	lsw('ThemesModule/default')
	lsw('ThemesModule/onlinenavigation')
	lsw('Controls/controls-superbundle.package')
	lsw('Hint/page-superbundle.package')
	lsw('Page/page-superbundle.package')
	lsw('Layout/layout-browser.package')
}
export function workNavigation() {
	loadedStyles.WorkPage.Navigation = true
	lsw('NavigationPanels/base-superbundle.package')
	lsw('NavigationPanels/Logotype')
	lsw('NavigationPanels/quickadd')
}
export function workUICore() {
	loadedStyles.WorkPage.uicore = true
	lsw('UICore/_adaptive/adaptive')
}
export function workTailwind() {
	loadedStyles.WorkPage.tailwind = true
	lsw('Tailwind/tailwind')
}
export function workEngineUser(name) {
	if (name === '') {
		loadedStyles.WorkPage.EngineUser._this = true
		lsw('EngineUser/UserStatus')
	} else {
		loadedStyles.WorkPage.EngineUser[name] = true
		lsw(`EngineUser/${name}`)
	}
}
export function workControls(name) {
	loadedStyles.WorkPage.controls[`${name}`] = true
	lsw(`Controls/${name}`)
}
export function workNMPage(name) {
	loadedStyles.WorkPage.nanomagicPage[`${name}`] = true
	lsw(`NanoMagicPage/${name}`)
}
export function workDashboardNew(name) {
	if (name === 'new/dashboard') {
		loadedStyles.WorkPage.Dashboard["new/dashboard"] = true
		lsw(`Dashboard/new/dashboard`)
	}
	if (name === 'new/compatible') {
		loadedStyles.WorkPage.Dashboard["new/compatible"] = true
		lsw(`Dashboard/new/compatible`)
	}
	if (name === 'dashboard') {
		loadedStyles.WorkPage.Dashboard.dashboard = true
		lsw(`Dashboard/dashboard`)
	}
	if (name === 'page') {
		loadedStyles.WorkPage.Dashboard.page = true
		lsw(`Dashboard/page`)
	}
	if (name === 'runtime') {
		loadedStyles.WorkPage.Dashboard.runtime = true
		lsw('Dashboard/runtime')
	}
	if (name === 'new/pgEditors') {
		loadedStyles.WorkPage.Dashboard["new/pgEditors"] = true
		lsw('Dashboard/new/pgEditors')
	}
}
export function workWidgets() {
	loadedStyles.WorkPage.nanomagicPage.widgets = true
	lsw('NanoMagicPage/widgets')
}
export function workWidgetsRightPanel() {
	loadedStyles.WorkPage.nanomagicPage.widgetRightPanel = true
	lsw('NanoMagicPage/widgets/RightPanel')
}
export function workInformersBar() {
	loadedStyles.WorkPage.Informers.bar = true
	lsw('Informers/bar')
}
export function workTRInWork() {
	loadedStyles.WorkPage.tasks.registry.InWork = true
	lsw('EDWS3/Tasks/Registry/InWork/InWork')
}
export function workMasterDetail() {
	loadedStyles.WorkPage.tasks.MasterDetail.MasterDetail = true
	lsw('EDWS3/Tasks/MasterDetail/MasterDetail')
}
export function workTRRegistry() {
	loadedStyles.WorkPage.tasks.registry.Registry = true
	lsw('EDWS3/Tasks/Registry/Registry')
}
export function workPersonPopupPreview() {
	loadedStyles.WorkPage.person.popup.previewController = true
	lsw('Person/_popup/PreviewController')
}
export function workEDO3Browser() {
	loadedStyles.WorkPage.edo3.browser = true
	lsw('EDO3/browser')
}
export function workPersonPhoto() {
	loadedStyles.WorkPage.person.photo = true
	lsw('Person/photo')
}
export function workEDO3CoreBrowserTemplate() {
	loadedStyles.WorkPage.edo3core.browserTemplate = true
	lsw('EDO3Core/browserTemplate')
}
export function workMessage(name) {
	loadedStyles.WorkPage.Message[`${name}`] = true
	lsw(`Message/${name}`)
}
export function workEngineUserPanel(name) {
	loadedStyles.WorkPage.EngineUserPanel[`${name}`] = true
	lsw(`EngineUserPanel/${name}`)
}
export function workEngineLanguage() {
	loadedStyles.WorkPage.EngineLanguage._this = true
	lsw('EngineLanguage/language-selector.package')
}
export function workUserStatus(name) {
	loadedStyles.WorkPage.EngineUserPanel[`${name}`] = true
	lsw(`UserStatus/${name}`)
}
export function workAppSelectorAppPanel() {
	loadedStyles.WorkPage.AppSelector.appPanel = true
	lsw('AppSelector/appPanel')
}
export function workTRFromMe() {
	loadedStyles.WorkPage.tasks.registry.FromMe = true
	lsw('EDWS3/Tasks/Registry/FromMe/FromMe')
}
export function workTasksStyle(name) {
	loadedStyles.WorkPage.tasks[name] = true
	lsw(`EDWS3/Tasks/${name}`)
}


export function mainStyle() {
	loadedStyles.Main._this = true
	lsm('bootstrap')
	lsm('style')
}


export function loginStyle() {
	loadedStyles.Login._this = true
	lsm('LoginPage/Main')
}


export function authStyle() {
	loadedStyles.Auth._this = true
	lsa('ThemesModule/default')
	loadFontsAuth()
	lsa('Controls/controls-superbundle.package')
	lsa('Hint/page-superbundle.package')
	lsa('Page/page-superbundle.package')
	lsa('PopupNotifications/page-superbundle.package')
	lsa('EngineLanguage/language-selector.package')
}
export function authPopup() {
	loadedStyles.Auth.controls.popupTemplate = true
	lsa('Controls/popupTemplate')
}
export function aControls(name) {
	if (name === 'baseDecorator') {
		loadedStyles.Auth.controls.baseDecorator = true
		lsa('Controls/baseDecorator')
	}
	if (name === 'baseList') {
		loadedStyles.Auth.controls.baseList = true
		lsa('Controls/baseList')
	}
	if (name === 'baseTree') {
		loadedStyles.Auth.controls.baseTree = true
		lsa('Controls/baseTree')
	}
	if (name === 'checkbox') {
		loadedStyles.Auth.controls.checkbox = true
		lsa('Controls/checkbox')
	}
	if (name === 'dropdown') {
		loadedStyles.Auth.controls.dropdown = true
		lsa('Controls/dropdown')
	}
	if (name === 'heading') {
		loadedStyles.Auth.controls.heading = true
		lsa('Controls/heading')
	}
	if (name === 'input') {
		loadedStyles.Auth.controls.input = true
		lsa('Controls/input')
	}
	if (name === 'itemActions') {
		loadedStyles.Auth.controls.itemActions = true
		lsa('Controls/itemActions')
	}
	if (name === 'list') {
		loadedStyles.Auth.controls.list = true
		lsa('Controls/list')
	}
	if (name === 'markerComponent') {
		loadedStyles.Auth.controls.markerComponent = true
		lsa('Controls/markerComponent')
	}
	if (name === 'markup') {
		loadedStyles.Auth.controls.markup = true
		lsa('Controls/markup')
	}
	if (name === 'menu') {
		loadedStyles.Auth.controls.menu = true
		lsa('Controls/menu')
	}
	if (name === 'popupTemplate') {
		loadedStyles.Auth.controls.popupTemplate = true
		lsa('Controls/popupTemplate')
	}
	if (name === 'scrollbar') {
		loadedStyles.Auth.controls.scrollbar = true
		lsa('Controls/scrollbar')
	}
	if (name === 'tile') {
		loadedStyles.Auth.controls.tile = true
		lsa('Controls/tile')
	}
	if (name === 'toggle') {
		loadedStyles.Auth.controls.toggle = true
		lsa('Controls/toggle')
	}
	if (name === 'validate') {
		loadedStyles.Auth.controls.validate = true
		lsa('Controls/validate')
	}
}
export function authControls(name) {
	if (name === '_authForm') {
		loadedStyles.Auth.authControls._authForm = true
		lsa('AuthControls/_authForm/authForm')
	}
	if (name === '_demo') {
		loadedStyles.Auth.authControls._demo = true
		lsa('AuthControls/_demo/demo')
	}
	if (name === '_oauth') {
		loadedStyles.Auth.authControls._oauth = true
		lsa('AuthControls/_oauth/oauth')
	}
	if (name === '_stepsMaster') {
		loadedStyles.Auth.authControls._stepsMaster = true
		lsa('AuthControls/_stepsMaster/View/View')
	}
}
export function authTPT() {
	loadedStyles.Auth.themes.pageTemplate = true
	lsa('AuthThemes/_pageTemplate/pageTemplate')
}
export function authTailwind() {
	loadedStyles.Auth.tailwind = true
	lsa('Tailwind/tailwind')
}
export function authUICore() {
	loadedStyles.Auth.uicore = true
	lsa('UICore/_adaptive/adaptive')
}
export function authNav() {
	loadedStyles.Auth.nav = true
	lsa('NavigationPanels/Logotype')
}
export function authSbis() {
	loadedStyles.Auth.sbis = true
	lsa('SbisEnvUI/header')
	lsa('SbisEnvUI/parking')
}
export function authSettingsView() {
	loadedStyles.Auth.settings.view = true
	lsa('ViewSettings/controller')
}
export function authPageTemplate() {
	loadedStyles.Auth.page.template = true
	lsa('Page/template')
	lsa('AuthPage/_pageTemplate/pageTemplate')
}
export function authNanoMagicPage() {
	loadedStyles.Auth.nmPage = true
	lsa('NanoMagicPage/landingLayout')
}


export function createPopup(name, s, p) {
	let popup = document.querySelector('#popup')
	let div = document.createElement('div')
	let root = createRoot(div)
	if (name === 'selectTaskTypeDialog') {
		div.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-MenuButton_filled__xl_iconSize-medium_popup', 'controls_dropdownPopup_theme-default', 'controls_popupTemplate_theme-default', 'controls-Popup-corner-vertical-top', 'controls-Popup-corner-horizontal-left', 'controls-Popup-align-horizontal-right', 'controls-Popup-align-vertical-bottom', 'controls-Zoom')
		div.setAttribute('templatename', 'Controls/menu:Popup')
		div.setAttribute('template', 'Controls/menu:Popup')
		div.style.zIndex = '10'
		div.style.position = 'absolute'
		div.style.top = '0px'
		div.style.left = (sessionStorage.getItem('compat') === "false" ? '390px' : '235px')
		div.style.width = 'auto'
		div.style.maxWidth = '1872px'
		div.style.maxHeight = '940px'
		div.style.height = 'auto'
		div.style.margin = '0px'
		div.style.zoom = 1
		div.tabIndex = 0
		let key = 'popup-' + stringGen(11) + (new Date()).getTime()
		div.setAttribute('key', key)
		root.render(<SelectTaskType store={s} page={p} />)
	}
	if (name === 'EngineUserPanel/View') {
		div.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-Popup-corner-vertical-top', 'controls-Popup-corner-horizontal-right', 'controls-Popup-align-horizontal-left', 'controls-Popup-align-vertical-bottom', 'controls-Zoom')
		div.setAttribute('templatename', 'EngineUserPanel/View')
		div.setAttribute('template', 'EngineUserPanel/View')
		div.tabIndex = 0
		let key = 'popup-' + stringGen(11) + (new Date()).getTime()
		div.setAttribute('key', key)
		div.style.zIndex = 10
		div.style.position = 'absolute'
		div.style.top = '6px'
		div.style.right = '274px'
		div.style.width = 'auto'
		div.style.height = 'auto'
		div.style.maxWidth = '1600px'
		div.style.maxHeight = '934px'
		div.style.margin = 0
		div.style.zoom = 1

		root.render(<EngineUserPanel page={p} store={s} />)
	}
	if (name === 'UserStatus/Panel') {
		div.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-Popup-corner-vertical-top', 'controls-Popup-corner-horizontal-left', 'controls-Popup-align-horizontal-right', 'controls-Popup-align-vertical-bottom', 'controls-Zoom')
		div.setAttribute('templatename', 'UserStatus/Panel')
		div.setAttribute('template', 'UserStatus/Panel')
		div.tabIndex = 0
		let key = 'popup-' + stringGen(11) + (new Date()).getTime()
		div.setAttribute('key', key)
		div.style.zIndex = 20
		div.style.position = 'absolute'
		div.style.top = '30px'
		div.style.right = '300px'
		div.style.width = 'auto'
		div.style.height = 'auto'
		div.style.maxWidth = '600px'
		div.style.maxHeight = '911px'
		div.style.margin = 0
		div.style.zoom = 1

		root.render(<UserStatusPanel page={p} store={s} />)
	}
	if (name === 'EDWS3/Tasks/taskDialog:Dialog') {
		div.classList.add('controls-Popup', 'ws-float-area-show-complete', 'controls-Scroll_webkitOverflowScrollingTouch', 'controls-Stack__last-item')
		div.setAttribute('templatename', 'EDWS3/Tasks/taskDialog:Dialog')
		div.setAttribute('template', 'EDWS3/Tasks/taskDialog:Dialog')
		div.style.zIndex = 10
		div.style.position = 'fixed'
		div.style.top = 0
		div.style.right = '326px'
		div.style.width = '700px'
		div.style.maxWidth = '1400px'
		div.style.minWidth = '450px'
		div.style.height = 'auto'
		div.tabIndex = 0
		let key = 'popup-' + stringGen(11) + (new Date()).getTime()
		div.setAttribute('key', key)

		root.render(<EDWSTaskCreatePopup store={s} page={p} />)
	}
	popup.appendChild(div)
}