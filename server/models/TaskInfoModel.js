import { Sequelize, DataTypes } from 'sequelize'
import db from '../config/Database.js'

const TaskIfno = await db.define('task_info', {
	task_id: {
		type: DataTypes.INTEGER
	},
	lastStatus: {
		type: DataTypes.INTEGER
	},
	nowStatus: {
		type: DataTypes.INTEGER
	},
	createdDate: {
		type: DataTypes.DATE
	},
	ispoln: {
		type: DataTypes.INTEGER
	},
	newIspoln: {
		type: DataTypes.INTEGER
	},
	closedId: {
		type: DataTypes.INTEGER
	},
	comment: {
		type: DataTypes.STRING
	},
	tsComment: {
		type: DataTypes.STRING
	},
	ts_complete: {
		type: DataTypes.INTEGER
	}
}, {
	freezeTableName: true
});

(async () => {
	await db.sync();
})();

export default TaskIfno;