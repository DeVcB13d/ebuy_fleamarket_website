/* The below code is creating a router for the user. */

const express = require('express')

const router = express.Router()
const {
    createProduct,
    getProducts,
    getSingleProduct
} = require('../controllers/productCreationControl')


router.post('/',createProduct)
router.get('/',getProducts)
router.get('/:id',getSingleProduct)

module.exports = router