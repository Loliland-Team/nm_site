import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './pages.js'
import { RegisterPage } from './pages/RegisterPage.js'
import {WS} from './utils/consts.js';



const ws = new WebSocket(WS + '/nmws')

export let taskSort = false
export let setTaskSort = () => {
	taskSort = !taskSort
}

export default function App() {
	const [data, setData] = useState(null)

	if (data === null) setData({
		user_info: {name: null, user_id: 0, foto: null, user_group: -1},
		tasks: [],
		users: [],
		groups: [],
		servers: [],
		sortedUsers: [],
		sortedGroups: [],
	})

	ws.addEventListener('message', message => {
		let data = JSON.parse(message.data).data
		let tasks = data.tasks,
			users = data.users,
			user_info,
			sortedGroups = []

		data.groups.forEach(group => {
			sortedGroups[group.id] = group
		})

		user_info = users[+sessionStorage.getItem('uid')]

		tasks = taskSort ? tasks.reverse() : tasks

		setData({data: data, users, sortedGroups, user_info, tasks})
	})

	return (
		<Routes>
			<Route path={'/'} element={<Pages loc={'/'} store={data} />} />
			<Route path={'/work'} element={<Pages loc={'/work'} store={data} />} />
			<Route path={'/work/:page'} element={<Pages loc={'/work'} store={data} />} />
			<Route path={'/prices'} element={<Pages loc={'/prices'} store={data} />} />
			<Route path={'/guides'} element={<Pages loc={'/guides'} store={data} />} />
			<Route path={'/forum'} element={<Pages loc={'/forum'} store={data} />} />
			<Route path={'/register'} element={<RegisterPage />} />
			<Route path={'/news'} element={<Pages loc={'/news'} store={data} />} />
		</Routes>
	)
}