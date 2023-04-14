import { MAIN_API as API} from './consts.js'
import $ from 'jquery'

export let settings = {
	useMaxWidth: 1600
}

export function getUserImgUrl(user_info) {
	if (user_info === undefined) return `https://api.loliland.ru/avatar/$Fnse#Nr#N@#$nMA@##$NmSERMN345mNS#$mns3`
	if (user_info.foto) return `/asset/resources/users/photos/${user_info.foto}`
	else return `https://api.loliland.ru/avatar/${user_info.name}`
}

export async function logout() {
	await request('POST', API + '/logout', {uid: +sessionStorage.getItem('uid')}, false)
	sessionStorage.removeItem('token')
	sessionStorage.removeItem('uid')
	window.location.href = '/'
}
export async function login(json) {
	let data = await request('POST', API + '/login', json, false)

	if (data.msg === 'Login success') {
		return { token: data.token, uid: data.uid }
	}
	return { msgError: data.err }
}
export async function register(json) {
	let data = await request('POST', API + '/register', json, false)

	if (data.msg === 'Registration successful') {
		return { accessToken: data.token, uid: data.uid }
	}
	return { msgError: data.err }
}
export async function setStatus(event, store, status) {
	let data = await request('POST', API + '/setStatus', {status: status, uid: store.user_info.user_id}, false)

	if (data.msg === 'Success')
		return data
}

async function request(method, url, data, async) {
	if (typeof data === 'object') {
		data = JSON.stringify(data)
	}
	let xhr = new XMLHttpRequest()
	xhr.withCredentials = true
	xhr.open(method, url, async)
	xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
	xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
	xhr.send(data)

	if (xhr.status === 200) {
		return JSON.parse(xhr.response)
	} else {
		return {err: JSON.parse(xhr.response)}
	}
}