import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';

import cors from 'cors'

// const router = express.Router();
const app = express();
app.use(cors())

app.post('/signup', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Failed to sign up user' });
  }
});

export default app;
