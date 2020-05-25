const express = require('express')
const Order = require('../models/orders')
const auth = require('../middleware/auth')
const Product  = require('../models/product')
const router = new express.Router()

const {craeteProduct, deleteProduct , readProducts, editProduct} = require('../controller/product')

router.post('/api/product', craeteProduct)
router.delete('/api/product/:id', deleteProduct)
router.get('/api/product',readProducts )
router.patch('/api/product/:id', editProduct)

module.exports = router