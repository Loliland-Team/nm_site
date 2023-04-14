import React from 'react'
import useToken from './useToken.js'
import { MainPage } from './pages/MainPage.js'
import { Login } from './pages/Login.js'

export function Pages(props) {
	const { token, setToken } = useToken()

	let loc = props.loc,
		store = props.store

	if (token) {
		return <MainPage loc={loc} store={store} />
	} else {
		return <Login setToken={setToken} />
	}
}