import { Sequelize, DataTypes } from 'sequelize'
import db from '../config/Database.js'

const Users = db.define('users', {
	email: {
		type: DataTypes.STRING
	},
	email_status: {
		type: DataTypes.INTEGER
	},
	password: {
		type: DataTypes.STRING
	},
	name: {
		type: DataTypes.STRING
	},
	user_id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		unique: true
	},
	user_group: {
		type: DataTypes.INTEGER
	},
	server: {
		type: DataTypes.INTEGER
	},
	reg_date: {
		type: DataTypes.DATE
	},
	banned: {
		type: DataTypes.INTEGER,
		default: 0
	},
	info: {
		type: DataTypes.STRING
	},
	signature: {
		type: DataTypes.STRING
	},
	foto: {
		type: DataTypes.STRING
	},
	fullname: {
		type: DataTypes.STRING
	},
	land: {
		type: DataTypes.STRING
	},
	logged_ip: {
		type: DataTypes.STRING
	},
	burn_day: {
		type: DataTypes.STRING,
		default: '01.01.1970'
	},
	sex: {
		type: DataTypes.TINYINT,
		default: 0
	},
	refresh_token: {
		type: DataTypes.STRING
	},
	forum_banned: {
		type: DataTypes.BOOLEAN,
		default: 0
	}
}, {
	freezeTableName: true
});

(async () => {
	await db.sync()
})();

export default Users