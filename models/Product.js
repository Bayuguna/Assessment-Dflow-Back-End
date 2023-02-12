import mongoose from "mongoose";


const Products = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        type: {
            type: String
        }, 
        price:{
            type: String,
            require: true
        },
        stock:{
            type: Number,
        },
        description:{
            type: String,
            require: true
        },
        image:{
            type: String,
        }
    }, {timestamps: true}
) 

Products.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['__v']
        return ret
    }
})

export default mongoose.model('Products', Products)