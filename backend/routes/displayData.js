// displayData.js

const express = require('express');
const router = express.Router();
const {  printToolsDataCollection  } = require('../db.js'); 

router.get('/displayData', async (req, res) => {
  try {
    const documents = await printToolsDataCollection();
    console.log(documents);
    res.send(documents);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending toolsData");
  }
});

module.exports = router;
