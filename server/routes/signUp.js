const express = require('express')

const router = express.Router()
const {
    loginUser
} = require('../controlers/userControl')


router.post('/',loginUser)


module.exports = router