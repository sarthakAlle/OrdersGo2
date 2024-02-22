const express = require('express');
const router = express.Router();
//const fetchToolsData = require('../controllers/fetchToolsData'); // Import the function
const toolsModel=require('../models/toolsDataModel');

router.get('/displayData', async (req, res) => {
  try {
    const documents = await  toolsModel.find();//fetchToolsData();
    console.log('fetched docs',documents);
    res.send(documents);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending toolsData");
  }
});

module.exports = router;
