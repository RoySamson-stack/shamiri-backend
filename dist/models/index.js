"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../db"));
const User_1 = __importDefault(require("./User"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
db_1.default.sync().then(() => {
    console.log('Database synced');
}).catch((err) => {
    console.error('Error syncing database:', err);
});
app.post('/users', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const user = await User_1.default.create({ username, password, email });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
