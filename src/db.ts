import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('journal_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
