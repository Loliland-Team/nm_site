import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'

const elem = document.getElementById('nm-root')
const root = createRoot(elem)

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)