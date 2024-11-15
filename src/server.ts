import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { mainRouter } from './routes/main';

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.urlencoded({extended:true}));

server.use(mainRouter);

server.listen(process.env.PORT, ()=>{
    console.log('http://localhost:3000')
});