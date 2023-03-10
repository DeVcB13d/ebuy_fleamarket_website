const User = require('../models/userModel')


// get all user data
const getUsers = async (req, res) => {
    // returns all docs
    const users = await User.find({}.sortStable({createdAt:-1}))
    res.status(200).json(users)
}

// get a single user data
const getUser = async(req,res) => {
    // contains single user id
    const {id} = req.params
    const user = await User.findById(id)
    if (!user){
        return res.status(404).json({error:'No such Workout'})
    }
    res.status(200).json(user)

}
// delete a user data

// update a user data

// create a new user
const createUser = async (req, res) => {
    console.log("Request Data")
    console.log(req.body)
    const {id, username, email, password} = req.body
    // add doc to db
    try{
        const user = await User.create({id, username, email, password})
        res.status(200).json(user)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// to login a user
const loginUser = async(req,res) => {
    console.log("Request Data")
    console.log(req.body)

    const {req_email, req_password} = req.body

    try{
        const user = await User.findOne({email : req_email})
        if (user) {
            // check for password match
            const result = req_password == user.password
            if (result){
                res.render("login successfull")
            }
            else{
                res.status(400).json({error: "password does not match"})
            }
        }
        else{
            res.status(400).json({error:"user does not exist"})
        }
    }
    catch(error){
        res.status(400).json({error})
    }
}
module.exports = {
    createUser,
    getUsers,
    getUser,
    loginUser
}