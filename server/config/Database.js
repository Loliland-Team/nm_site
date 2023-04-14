import { Sequelize } from 'sequelize'

const db = new Sequelize('nm', 'admin', 'Germiona1$', {
	host: '212.76.129.200',
	dialect: 'mariadb'
})

export default db