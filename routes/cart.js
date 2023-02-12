import express from "express";
import {getCart, findCart, postCart, updateCart, deleteCart} from "../controllers/CartController.js";

const router = express.Router();

router.get('/', getCart);
router.get('/:id', findCart);
router.post('/', postCart);
router.patch('/:id', updateCart);
router.delete('/:id', deleteCart);

export default router;