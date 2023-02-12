import express from 'express';
import { getTransactionByUserId, postTransaction } from "../controllers/TransactionController.js";

const cars = express.Router();

cars.get('/:id', getTransactionByUserId);
cars.post('/', postTransaction);

export default cars;
