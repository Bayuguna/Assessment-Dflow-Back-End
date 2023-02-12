import Transaction from "../models/Transaction.js";


export const getTransactionByUserId = async (req, res) => {

    const product = await Transaction.find({
        where: {
            user_id: req.params.id
        },
    });

    res.json(product);
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