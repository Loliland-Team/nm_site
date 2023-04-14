import { Sequelize, DataTypes } from 'sequelize'
import db from '../config/Database.js'

const Groups = db.define('groups', {
	name: {
		type: DataTypes.STRING
	},
	userCount: {
		type: DataTypes.INTEGER
	}
}, {
	freezeTableName: true
});

(async () => {
	await db.sync();
})();

export default Groups;