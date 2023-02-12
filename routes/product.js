import express from 'express';
import { deleteProduct, getProduct, updateProduct, getProductById, postProduct } from "../controllers/ProductController.js";

const cars = express.Router();

cars.get('/', getProduct);
cars.get('/:id', getProductById);
cars.post('/', postProduct);
cars.put('/:id', updateProduct);
cars.delete('/:id', deleteProduct);

export default cars;
