const Tools = require('../models/toolsDataModel');
const express = require('express');
const router = express.Router();

router.post('/toolsDataSave', async (req,res)=>{
const {categoryName , name, img ,price, options, description} =req.body;
try{
  const newTools = new Tools({
    categoryName,
    name,
    img,
    price,
    options,
    description
  });
 console.log(newTools);

  await newTools.save();

  res.json({message:'tools data saved'});
}catch(e){
console.log('error in saving tools',e.message);
}
});

module.exports=router;
