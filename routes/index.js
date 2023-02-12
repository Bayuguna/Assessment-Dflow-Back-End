import express from 'express';

const index = express.Router();

index.get('/', (req, res) => {
    res.send('Selamat Datang Di Assessment Backend!');
});

export default index;