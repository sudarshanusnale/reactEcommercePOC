const express = require('express')
const Product = require('../models/product')
const auth = require('../middleware/auth')
const router = new express.Router()

const mongoose = require('mongoose')

const craeteProduct = async (req,res)=>{
    const product = new Product(req.body)
    
    try{
         await product.save()
        
        res.status(201).send(product)
    }catch(e){
        res.status(400).send(e)        
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const product = await Product.findOneAndDelete({_id:req.params.id})
        if(!product){
            return res.status(404).send()
        }
        res.status(200).send(product)
    } catch(e){
        res.status(500).send()
    }
}

const readProducts = async (req,res)=>{
    try{
        const product = await Product.find({})
        res.json(product)
        res.send(product)
    }catch(e){
        res.status(500).send()
    }
}

const editProduct = async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['productName','quantity','price','description']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({ error : 'Invalid updates!'})
    }

    try{
        const product = await Product.findOne({_id: req.params.id})
        if(!product){
            return res.status(404).send()
        }

        updates.forEach((update)=> product[update] = req.body[update])
        await product.save()
       
        res.send(product)
    }catch(e){
        res.status(400).send(e)
    }
}

module.exports = {
    craeteProduct,
    deleteProduct,
    readProducts,
    editProduct
}