import express from 'express';
import sequelize from '../db';
import User from './User';
import Journal from './Journal';

const app = express();
app.use(express.json());

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((err) => {
  console.error('Error syncing database:', err);
});

app.post('/users', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.create({ username, password, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
