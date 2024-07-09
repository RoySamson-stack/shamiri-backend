import express from 'express';
import bcrypt from 'bcryptjs';
import Journal from '../models/Journal';  



const router = express.Router();

router.post('/', async (req, res) => {
  const { user_id, title, content } = req.body;  

  try {
    const newJournal = await Journal.create({
      user_id,
      title,
      content,
    });

    res.status(201).json(newJournal);
  } catch (error) {
    console.error('Error creating journal:', error);
    res.status(500).json({ message: 'Failed to create journal entry' });
  }
});

export default router;
