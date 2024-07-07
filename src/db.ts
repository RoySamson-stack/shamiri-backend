import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('journal_app', 'root', 'root9332', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
