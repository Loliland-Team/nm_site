import WebSocket, {WebSocketServer} from 'ws'
import Servers from './models/ServerModel.js'
import Users from './models/UserModel.js'
import Tasks from './models/TaskModel.js'
import Groups from './models/GroupModel.js'
import TaskInfo from './models/TaskInfoModel.js'
import http from 'http'

const server = http.createServer()

const wsServer = new WebSocketServer({server}, () => console.log(`WebSocket server is running on port ${3004}`))

wsServer.on('request', req => {
	console.log(req)
})

server.listen(3004, () => console.log(`WebSocket server is running on port ${3004}`))

wsServer.on('connection', function connection(ws) {
	sendData(ws).then(r => r)
	console.log(ws)
	setInterval(() => sendData(ws), 5000)
})

async function sendData(ws) {
	let	groups,
		tasks,
		users = [],
		servers,
		courators,
		files,
		tasksInfo,
		rawUsers

	groups = await getGroups()
	tasks = await getTasks()
	rawUsers = await getUsers()
	servers = await getServers()
	courators = await getCourators()
	files = await getFiles()
	tasksInfo = await getTaskInfo()

	rawUsers.forEach(user => {
		users[user.user_id] = user
	})

	ws.send(JSON.stringify({type: 'data', data: {groups, tasks, users, servers, courators, files, tasksInfo}}))
}

async function getUsers() {
	let users = await Users.findAll({
		attributes: {
			exclude: 'password'
		}
	})
	return JSON.parse(JSON.stringify(users))
}
async function getTasks() {
	let tasks = await Tasks.findAll()
	return JSON.parse(JSON.stringify(tasks))
}
async function getTaskInfo() {
	let taskInfo = await TaskInfo.findAll()
	return JSON.parse(JSON.stringify(taskInfo))
}
async function getGroups() {
	let groups = await Groups.findAll()
	return JSON.parse(JSON.stringify(groups))
}
async function getCourators() {
	// let courators = await Courators.findAll()
	// return JSON.parse(JSON.stringify(courators))
}
async function getServers() {
	let servers = await Servers.findAll()
	return JSON.parse(JSON.stringify(servers))
}
async function getFiles() {
	// let files = await Files.findAll()
	// return JSON.parse(JSON.stringify(files))
}