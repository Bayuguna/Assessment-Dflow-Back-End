import express from 'express';
import { deleteTransaction, getTransactionByUserId, postTransaction } from "../controllers/TransactionController.js";

const cars = express.Router();

cars.get('/:id', getTransactionByUserId);
cars.post('/', postTransaction);
cars.delete('/:id', deleteTransaction);

export default cars;
