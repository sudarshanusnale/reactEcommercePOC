const express = require('express')
const Order = require('../models/orders')
const auth = require('../middleware/auth')
const router = new express.Router()

const mongoose = require('mongoose')

const createOrder = async (req,res)=>{
    const order = new Order({
        ...req.body,
        owner : req.user._id
    })
    try{
        await order.save()
        res.status(201).send(order)
    }catch(e){
        res.status(400).send(e)
    }

}

const deleteOrder = async (req,res)=>{
    try{
        const order = await Order.findOneAndDelete({_id:req.params.id, owner : req.user._id})
        if(!order){
            return res.status(404).send()
        }
        res.status(200).send(order)
    } catch(e){
        res.status(500).send()
    }
}

const readOrder = async (req,res)=>{
    try{
        const order = await Order.find({owner:req.user._id})
        res.send(order)
    }catch(e){
        res.status(500).send()
    }
}

const readSpecificOrder = async (req,res)=>{
    const _id = req.params.id
    try{
        const order = await Order.findOne({_id, owner: req.user._id})
        if(!order){
            res.status(404).send()
        }
        res.send(order) 
    } catch(e){
        res.status(500).send()
    }
}

const editOrder = async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['productName','completed','quantity','price','Address']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({ error : 'Invalid updates!'})
    }

    try{
        const order = await Order.findOne({_id: req.params.id, owner: req.user._id})
        if(!order){
            return res.status(404).send()
        }

        updates.forEach((update)=> order[update] = req.body[update])
        await order.save()
       
        res.send(order)
    }catch(e){
        res.status(400).send(e)
    }
}

module.exports = {
    createOrder,
    deleteOrder,
    readOrder,
    readSpecificOrder,
    editOrder
}