import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import User from './User';

class Journal extends Model {
public id!: number;
public user_id!: number;
public title!: string;
public content!: string;


}

Journal.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Journal',
  tableName: 'journals',
  timestamps: false
});

export default Journal;
