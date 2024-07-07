import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const router = express.Router();

router.post('/signup', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    // Optional: Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword // Store hashed password in the database
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Failed to sign up user' });
  }
});

export default router;
