const express = require('express')
const User = require('../models/user')
const Product  = require('../models/product')
const auth = require('../middleware/auth')
const router = new express.Router()

const mongoose = require('mongoose')

const createUser = async (req,res)=>{
    const user = new User(req.body)
    try{
         await user.save()
         const token = await user.generateAuthToken()
        
        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)        
    }
}

const loginUser = async (req,res)=>{
    
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken() 
        res.send({user,token})

    }catch(e){
        res.status(400).send()
    }
}

const userProfile = async (req,res)=>{
    res.send(req.user)
}

const userLogout = async (req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        console.log('before save')
        await req.user.save()

        res.send()

    }catch(e){
        res.status(500).send()
    }
}

const logoutAllDevices = async (req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
}

const deleteProfile = async (req,res)=>{
    try{
        await req.user.remove()
        res.status(200).send(req.user)
    } catch(e){
        res.status(500).send()
    }
}

const editProfile = async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age','gender','mobileNo','Address']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({ error : 'Invalid updates!'})
    }

    try{
        updates.forEach((update)=> req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    }catch(e){
        res.status(400).send(e)
    }
}

const addCart = async (req,res) => {
    const _id = mongoose.Types.ObjectId(req.body.input.id)
    const quantity = req.body.input.quantity
    await Product.findById({_id},(error,product)=>{

        if(error){
            return res.status(404).send('error occured!')
        }
        if(!product){
            return res.status(404).send('Product is not in DB!')
        }
        if(quantity>product.quantity){
            return res.status(404).send('Quantities are not available')
        }

        req.user.cart.push({
            productName : product.productName,
            quantity : quantity,
            price : product.price,
            total : (product.price * quantity)
        })

    })
    try{
        await req.user.save()
        res.status(200).send(req.user.cart)
    }catch(e){
        res.status(400).send()
    }
}

module.exports = {
    createUser,
    loginUser,
    userProfile,
    userLogout,
    logoutAllDevices,
    deleteProfile,
    editProfile,
    addCart
}