import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import './config';
import './db';
import gamesRouter from './routes/games';

const app = express();
const port = process.env.PORT || 3000;

// logger middleware
app.use(morgan('combined'));
// body parser middleware
app.use(bodyParser.json());

// route reg
app.use('/games', gamesRouter);

// allow cors
app.use(cors());

// status
app.get('/status', (req, res) => {
    res.status(200).send();
});

// listen
app.listen(port, () => {
    console.log(`Server started at * ${port}`);
});