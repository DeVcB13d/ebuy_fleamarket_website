const express = require('express')

const router = express.Router()
const signUp = require('../models/userModel')
const {
    createUser,
    getUsers,
    getUser
} = require('../controlers/userControl')


// post a new user

router.post('/',createUser)

// Request handlers   
router.get('/', (req,res) => {
    res.json({mssg: 'getall wkts'})
})

router.get('/:id',getUser)

router.delete('/:id',(req,res) =>{
    res.json({mssg:'delete a new workout'})
})

router.patch('/:id',(req,res) =>{
    res.json({mssg:'Update a workout'})
})

module.exports = router