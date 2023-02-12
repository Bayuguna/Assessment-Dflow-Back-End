import mongoose from "mongoose";


const Cart = mongoose.Schema(
    {
        product_id:{
            type: String,
            require: true
        },
        product_name:{
            type: String,
        },
        product_price:{
            type: String,
        },
        product_image:{
            type: String,
        },
        qty:{
            type: Number,
            require: true
        },
        user_id:{
            type: String,
            require: true
        },
    }, {timestamps: true}
) 

Cart.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['__v']
        return ret
    }
})

export default mongoose.model('Cart', Cart)