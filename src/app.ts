import express from 'express'
import sequelize from './models'
import journalRoutes from './routes'


const app = express();


app.use(express.json())


app.use('/journals', journalRoutes)

sequelize.sync().then(() =>{
    console.log('Databse connected and models synchronized')
});

export default app;