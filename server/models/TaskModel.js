import { Sequelize, DataTypes } from 'sequelize'
import db from '../config/Database.js'

const Tasks = db.define('tasks', {
	ispoln: {
		type: DataTypes.INTEGER
	},
	createDate: {
		type: DataTypes.DATE
	},
	startedDate: {
		type: DataTypes.DATE
	},
	endedDate: {
		type: DataTypes.DATE
	},
	opis: {
		type: DataTypes.STRING
	},
	files: {
		type: DataTypes.STRING
	},
	subtasks: {
		type: DataTypes.STRING
	},
	author_id: {
		type: DataTypes.INTEGER
	},
	taskStatus: {
		type: DataTypes.INTEGER
	},
	svazanoe: {
		type: DataTypes.STRING
	}
}, {
	freezeTableName: true
});

(async () => {
	await db.sync()
})();


export default Tasks