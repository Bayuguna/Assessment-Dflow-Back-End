import mongoose from "mongoose";


const Transactions = mongoose.Schema(
    {
        product_id: {
            type: String,
            require: true
        },
        product_image: {
            type: String,
        },
        product_name: {
            type: String
        }, 
        product_price:{
            type: String,
            require: true
        },
        tax:{
            type: Number,
        },
        qty:{
            type: Number,
            require: true
        },
        total:{
            type: Number,
            require: true
        },
        user_id:{
            type: String,
            require: true
        },
        status_payment:{
            type: String,
            require: true
        },
        status_shipping:{
            type: String,
            require: true
        },
    }, {timestamps: true}
) 

Transactions.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['__v']
        return ret
    }
})

export default mongoose.model('Transactions', Transactions)