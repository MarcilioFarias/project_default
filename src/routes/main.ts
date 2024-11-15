import express from 'express';
import { createUser } from '../services/user';


export const mainRouter =  express.Router();

mainRouter.get('/ping', (req, res)=>{
    res.json({pong: true});
});

mainRouter.post('/user', async (req, res)=>{
    const newUser = await createUser({     
            name: `${req.body.name}`,
            email: `${req.body.email}`        
    });
    if(newUser){
        res.status(201).json({newUser});
    } else {
        res.status(500).json({error: 'Email already exists'})
    }
});