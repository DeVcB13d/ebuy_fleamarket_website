/* The below code is creating a router for the user. */

const express = require('express')

const router = express.Router()
const {
    uploadImage,
    getAssetInfo,
    createImageTag
} = require('../controllers/productImageUpload')


router.post('/',uploadImage)
router.get('/',getAssetInfo)
router.get('/:id',createImageTag)

module.exports = router

