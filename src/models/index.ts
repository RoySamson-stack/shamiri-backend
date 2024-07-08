import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import signupRouter from '../routes/signup'; 
import sequelize from '../db';  

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/signup', signupRouter);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

export default app;
