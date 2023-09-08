const express = require('express')
const {register, userList, userDetails} = require('../controller/user')
const router = express.Router();

  router.post('/register', register)
  router.get('/userList', userList)
  router.post('/userDetails', userDetails)
 
  
module.exports = router