const mongoose = require('mongoose')
const validator = require('validator')


const orderSchema = new mongoose.Schema({
    productName:{
        type : String,
        required : true,
        trim : true
    },
    completed: {
        type : Boolean,
        default : false
    },
    quantity:{
        type : Number,
        default : 0,
        required : true,
        validate(value) {
            if(value<0){
                throw new Error('Age must be a positive number.')
            }
        }        
    },
    price:{
        type : Number,
        default : 0,
        required : true,
        validate(value) {
            if(value<0){
                throw new Error('Age must be a positive number.')
            }
        }        
    },
    owner: {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
},
{
    timestamps : true
})

const Order = mongoose.model('Order',orderSchema)

module.exports = Order