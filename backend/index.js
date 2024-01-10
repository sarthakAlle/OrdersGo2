const express = require('express');
const path =require("path");
const app = express();
const port = 5000;

const connectToMongo = require('./db');
connectToMongo();/*
const htmlFilePath = path.join(__dirname, 'raju.html');*/
app.use(express.json());
app.get('/', (req, res) => {
  res.send("jai shree ram");
})

app.use('/api',require('./routes/createUser'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})