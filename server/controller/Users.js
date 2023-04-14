import Users from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUsers = async (req, res) => {
	try {
		const users = await Users.findAll({
			attributes: ['user_id', 'name', 'email']
		})
		res.json(users)
	} catch (error) {
		console.log(error)
	}
}

export const Register = async (req, res) => {
	const { user: name, pwd: password } = req.body;
	const salt = await bcrypt.genSalt()
	const hashPassword = await bcrypt.hash(password, salt)
	let user = await Users.findOne({
		where: {
			name: name
		}
	})
	if (user) return res.status(200).send({msg: 'User name is exist on this database'})
	try {
		let user2 = await Users.create({
			name: name,
			email: '',
			email_status: 0,
			password: hashPassword,
			user_group: 14,
			server: 0,
			reg_date: new Date().getTime(),
			banned: 0,
			logged_ip: getIP(),
			burn_day: '01.01.1970',
			sex: 0
		})
		let token = await tokenize({name, password})
		res.status(200).json({msg: 'Registration successful', token, uid: user2.user_id})
	} catch (err) {
		console.log(err)
	}
}

export async function tokenize(data) {
	let user = await Users.findOne({
		where: {
			name: data.name
		}
	})
	const accessToken = jwt.sign({
		user_id: user.user_id,
		name: user.name,
		ip: getIP()
	}, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '15s'
	})
	user.set('logged_ip', getIP())
	return accessToken
}

export const Login = async (req, res) => {
	const user = await Users.findAll({
		where: {
			name: req.body.name
		}
	})
	const match = await bcrypt.compare(req.body.pass, user[0].password)
	if (!match) return res.status(400).send({msg: 'Wrong password!'})
	const accessToken = jwt.sign({
		user_id: user[0].user_id,
		name: user[0].name
	}, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '15s'
	})
	const refreshToken = jwt.sign({
		user_id: user[0].user_id,
		name: user[0].name
	}, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '1d'
	})
	await Users.update({
		refresh_token: refreshToken
	}, {
		where: {
			user_id: user[0].user_id
		}
	})
	res.cookie('refreshToken', refreshToken, {
		httpOnly: true,
		maxAge: 24 * 60 * 60 * 1000
	})
	res.status(200).send({
		token: accessToken,
		uid: user[0].user_id,
		msg: 'Login success'
	})
}

export const Logout = async(req, res) => {
	const user = await Users.findAll({
		where: {
			user_id: +req.body.uid
		}
	});
	await Users.update({
		refresh_token: null
	}, {
		where: {
			user_id: user[0].user_id
		}
	});
	res.clearCookie('refreshToken');
	res.status(200).send({msg: 'Ok!'});
}

function getIP() {
	let IP;

	fetch('https://www.cloudflare.com/cdn-cgi/trace')
		.then(res => res.text())
		.then(data => IP = data.match(/[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/)[0])

	return IP;
}

export async function setUserStatus(req, res) {
	const user = await Users.findOne({
		where: {
			user_id: +req.body.uid
		}
	})
	await Users.update({
		status: req.body.status
	}, {
		where: {
			user_id: user[0].user_id
		}
	})
	res.status(200).send({msg: 'Success'})
}