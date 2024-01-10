const express=require('express');
const { createUser } = require('../controllers/userController');
const router=express.Router();
router.route('/login').post(signUpUser);
router.route('/').post(createUser);
module.exports=router;