import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';  

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  try {
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

export default router;
