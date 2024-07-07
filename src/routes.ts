import {Router} from 'express'
import Journal from './models/Journal'
import { junit } from 'node:test/reporters';
import connection from "./db"



const router = Router()


router.get('/', async (req, res) =>{
    const journals = await Journal.findAll();
    res.json(journals)
});


router.post('/', async(req,res) => {
    const {text} = req.body
    const journal = await Journal.create({text});
    res.json(journal)
});

router.get('/:id', async (req,res) => {
    const { id } = req.params
    const journal = await Journal.findByPk(id);
    if (journal){
        res.json(journal);
    }else {
        res.status(404).send('Journal not found')
    }
});

router.delete('/:id', async (req, res) =>{
    const {id} = req.params;
    const journal = await Journal.findByPk(id);
    if (journal){
        await journal.destroy();
        res.json({message: 'Journal deleted'})
    }else {
        res.status(404).send("Journal not found")
    }
})

export default router 