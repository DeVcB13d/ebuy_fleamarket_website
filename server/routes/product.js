/* The below code is creating a router for the user. */

const express = require('express')

const router = express.Router()
const {
    createUser,
    getUser,
    getUsers
} = require('../controllers/userSignInControl')


router.post('/',createProduct)
router.get('/',getProduct)
router.get('/all',getProducts)

module.exports = router