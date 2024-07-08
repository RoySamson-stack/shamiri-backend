"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('journal_app', 'root', 'root9332', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
