import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import signupRouter from './routes/signup';
import journalRouter from './routes/createJournal'
import sequelize from './db'; 
import User from "./models/User"

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/test', (req, res) => {
  res.send('Test request');
});

app.use('/signup',(req, res, next)=>{
  console.log('Rceived request at /signup');
  next()
}, signupRouter);

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }


    res.status(200).json({ user_id: user.id, username: user.username }); 
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ message: 'Failed to sign in' });
  }
});

// Route to fetch user ID for logged-in user
app.get('/user/id', async (req, res) => {
  const userId = '123'; 

  try {
    // Fetch user details from database based on userId
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user_id: user.id, username: user.username });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Failed to fetch user details' });
  }
});

app.use('/createJournal', (req,res,next)=>{
  console.log('creating a new journal')
  next()
}, journalRouter)



sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

export default app;
