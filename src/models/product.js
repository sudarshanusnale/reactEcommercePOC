const mongoose = require('mongoose')
const validator = require('validator')


const productSchema = new mongoose.Schema({
    productName:{
        type : String,
        unique : true,
        required : true,
        trim : true
    },
    imagePath:{
        type: String,
        required: true,
        default : 'provide image path'
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
    description : {
        type :String,
        required : true,
        default : 'provide description'
    }
},
{
    timestamps : true
})

const Product = mongoose.model('Product',productSchema)

module.exports = Product