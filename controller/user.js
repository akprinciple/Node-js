const user = require('../model/user') 
 async function register(req,res) {
    try {
        const {name, email, password} = req.body
        const info = await user.create({name, email, password})

        res.json(info)
        
    } catch (error) {
        console.log(error);
        res.json(error)
    }

 }
 async function userList(req,res) {
    try {
        const doc = await user.find();
        res.json(doc)
    } catch (error) {
        console.log(error);
    }
      
 }
 async function userDetails(req,res){
    console.log(req.body);
    try {
        const {id} = req.body
        const doc = await user.findById(id).exec();
        res.json(doc)
    } catch (error) {
        console.log(error);
        
    }
 }

 module.exports = {register, userList, userDetails}