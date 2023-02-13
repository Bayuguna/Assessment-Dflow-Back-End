import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
    try{
        const carts = await Cart.find();

        res.status(200).json(carts);
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

    try{
        const checkCarts = await Cart.findOne({
                product_id: req.body.product_id,
                user_id: req.body.user_id
        });

        if(checkCarts){
            const updateCart = await Cart.updateOne({_id: checkCarts._id}, {$set: {qty: checkCarts.qty + req.body.qty}});
            res.status(200).json({data:checkCarts, message: 'update data'});
        }else{
            const carts = new Cart();
            carts.product_id = req.body.product_id;
            carts.product_name = req.body.product_name;
            carts.product_price = req.body.product_price;
            carts.product_image = req.body.product_image;
            carts.qty = req.body.qty;
            carts.user_id = req.body.user_id;

            const saveCart = await carts.save();
            res.status(201).json(saveCart);
        }
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