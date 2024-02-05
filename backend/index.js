const express = require('express');
const cors=require('cors')
const path =require("path");
const app = express();
const port = 5000;
const { printToolsDataCollection } = require('./db');

// Call the exported function
printToolsDataCollection();
app.use(cors());
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type , Accept"
  );
  next();
})
app.use(express.json());
app.get('/', (req, res) => {
  res.send("jai shree ram");
})

app.use('/api',require('./routes/createUser'));
app.use('/api',require('./routes/loginUser'));
app.use('/api',require('./routes/displayData'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
