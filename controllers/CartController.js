import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
    try{
        const carts = await Cart.find();
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const findCart = async (req, res ) => {
    const id = await Cart.findById(req.params.id);
    if(!id) return res.status(404).json({message: `Data dengan id : ${req.params.id} tidak ditemukan`})
    try{
        const carts = await Cart.findById(req.params.id);
        res.json(carts);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const postCart = async (req, res) => {
    const user = new Cart();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    user.setPassword(req.body.password);
    try{
        const saveCart = await user.save();
        res.status(201).json(saveCart);
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const updateCart = async (req, res) => {
    const id = await Cart.findById(req.params.id);
    if(!id) return res.status(404).json({message: `Data dengan id : ${req.params.id} tidak ditemukan`})
    try{
        const carts = await Cart.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(carts);
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const deleteCart = async (req, res) => {
    const id = await Cart.findById(req.params.id);
    if(!id) return res.status(404).json({message: `Data dengan id : ${req.params.id} tidak ditemukan`})
    try{
        const carts = await Cart.deleteOne({_id: req.params.id});
        res.status(200).json(carts);
    }catch(error){
        res.status(400).json({message: error.message})
    }
}