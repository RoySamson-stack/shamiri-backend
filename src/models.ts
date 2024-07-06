import { Sequelize } from "sequelize";



// replace the databse username and password with details for postgres database
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})

export default sequelize