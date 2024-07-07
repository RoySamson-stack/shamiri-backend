import express from 'express';
import  sequelize  from './models';
import signupRouter from './routes/signup';

const app = express();

app.use(express.json());

app.use('/', signupRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
  console.log(`Server is running on https://localhost:${PORT}`)
})

export default app;
