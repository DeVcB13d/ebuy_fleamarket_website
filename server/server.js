const express = require("express");
const userRoutes = require('./routes/signUp')
const loginRoutes = require('./routes/login')
const productRoutes = require('./routes/product')
const uploadRoutes = require('./routes/upload')
const mongoose = require('mongoose')

require('dotenv').config()

/* Creating an instance of the express application. */
const app = express()

const cors = require('cors');

const cloudinary = require('./cloudinary/cloudinary');


/* Logging the path and method of the request. */
app.use(cors({origin:'*'}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

/* Telling the app to use the routes defined in the userRoutes and loginRoutes files. */
app.use('/api/signUp',userRoutes)
app.use('/api/login',loginRoutes)
app.use('/api/product',productRoutes)
app.use('/api/upload',uploadRoutes)

/* Connecting to the database and then listening for requests. */
mongoose.connect(process.env.MONGO_URL)
    .then(() => {// listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port')
        })
        })
    .catch((error) => {
        console.log(error)
    })


