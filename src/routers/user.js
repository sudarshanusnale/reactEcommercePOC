
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()


const {createUser, loginUser, userProfile, userLogout, logoutAllDevices, deleteProfile, editProfile,addCart} = require('../controller/user')

router.post('/api/users', createUser)
router.post('/api/users/login', loginUser)
router.get('/api/users/me', auth,userProfile)
router.post('/api/users/logout',auth,userLogout)
router.post('/api/users/logoutAll',auth,logoutAllDevices)
router.delete('/api/users/me',auth,deleteProfile)
router.patch('/api/users/me', auth, editProfile)
router.post('/api/addToCart',auth,addCart)

module.exports = router  