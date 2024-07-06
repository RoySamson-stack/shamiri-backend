import { Sequelize } from 'sequelize';
import Journal from './Journal';

// change the database username and passwor to match the ones for the postgres database
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

// Import and initialize all models
const models = {
  Journal: Journal.initModel(sequelize),
};

// Sync all models
sequelize.sync().then(() => {
  console.log('Database connected and models synchronized');
});

export { sequelize };
export default models;
