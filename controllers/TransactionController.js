import Transaction from "../models/Transaction.js";


export const getTransactionByUserId = async (req, res) => {

    try{
        const product = await Transaction.find({
            where: {
                user_id: req.params.id
            },
        });

        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const postTransaction = async(req, res) => {

    const product = new Transaction(req.body);

    try{
        const saveCar = await product.save();
        res.status(200).json({data: saveCar});
    }catch(e){
        res.status(401).json({message: "Data Gagal Disimpan"});
    }
}

export const deleteTransaction = async (req, res) => {
    const id = await Transaction.findById(req.params.id);
    if(!id) return res.status(404).json({message: `Data dengan id : ${req.params.id} tidak ditemukan`})
    try{
        const transactions = await Transaction.deleteOne({_id: req.params.id});
        res.status(200).json(transactions);
    }catch(error){
        res.status(400).json({message: error.message})
    }
}