import Product from "../models/Product.js";


export const getProduct = async (req, res) => {

    const product = await Product.find();

    res.json(product);
}

export const getProductById = async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.json(product);
}

export const postProduct = async(req, res) => {

    const product = new Product(req.body);

    try{
        const saveCar = await product.save();
        res.status(200).json({data: saveCar});
    }catch(e){
        res.status(401).json({message: "Data Gagal Disimpan"});
    }
}

export const updateProduct = async (req, res) => {
    const id = await Product.findById(req.params.id);
    if(!id) return res.status(404).json({message: `Data dengan id : ${req.params.id} tidak ditemukan`})
    try{
        const users = await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(users);
    }catch(error){
        res.status(400).json({message: error.message})
    }
}


export const deleteProduct = async (req, res) => {
    const id = await Product.findById(req.params.id);
    if(!id) return res.status(404).json({message: `Data dengan id : ${req.params.id} tidak ditemukan`})
    try{
        const products = await Product.deleteOne({_id: req.params.id});
        res.status(200).json(products);
    }catch(error){
        res.status(400).json({message: error.message})
    }
}