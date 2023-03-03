// TO require a package
const express = require("express");
const userRoutes = require('./routes/signUp')
const mongoose = require('mongoose')
require('dotenv').config()
// creates express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

// route
app.use('/api/signUp',userRoutes)

// connect to db

mongoose.connect(process.env.MONGO_URL)
    .then(() => {// listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port')
        })
        })
    .catch((error) => {
        console.log(error)
    })

