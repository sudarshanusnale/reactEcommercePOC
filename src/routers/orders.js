const express = require('express')
const Order = require('../models/orders')
const auth = require('../middleware/auth')
const router = new express.Router()


const {createOrder, deleteOrder, readOrder, readSpecificOrder, editOrder} = require('../controller/order')

router.post('/api/orders', auth, createOrder)
router.delete('/api/orders/:id', auth ,deleteOrder)
router.get('/api/orders',auth,readOrder)
router.get('/api/orders/:id',auth,readSpecificOrder)
router.patch('/api/orders/:id', auth,editOrder)

module.exports = router 