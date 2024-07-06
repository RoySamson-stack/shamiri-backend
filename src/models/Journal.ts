import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface JournalAttributes {
  id: number;
  text: string;
}

interface JournalCreationAttributes extends Optional<JournalAttributes, 'id'> {}

class Journal extends Model<JournalAttributes, JournalCreationAttributes> implements JournalAttributes {
  public id!: number;
  public text!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize): typeof Journal {
    Journal.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        text: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
      },
      {
        tableName: 'journals',
        sequelize,
      }
    );
    return Journal;
  }
}

export default Journal;
