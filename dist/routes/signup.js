"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const cors_1 = __importDefault(require("cors"));
// const router = express.Router();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Hashing password
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const newUser = await User_1.default.create({
            username,
            email,
            password: hashedPassword
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Failed to sign up user' });
    }
});
exports.default = app;
