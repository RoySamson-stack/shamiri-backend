import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('journal_app', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
