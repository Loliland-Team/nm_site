import { Sequelize, DataTypes } from 'sequelize'
import db from '../config/Database.js'

const Servers = db.define('servers', {
	name: {
		type: DataTypes.STRING
	},
	userCount: {
		type: DataTypes.INTEGER
	},
	couratorId: {
		type: DataTypes.STRING
	},
	version: {
		type: DataTypes.STRING
	}
}, {
	freezeTableName: true
});

(async () => {
	await db.sync();
})();

export default Servers;