const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port =process.env.PORT||5000;
const db = require('./db');
const dotenv = require('dotenv');

// Call the exported function
db.connectdatabase();
//console.log(process.env.MONGO_URI);

dotenv.config({path:'./config.env'}); // This loads the variables from the .env file
// Now you can access your environment variables like this:
//console.log(process.env.MONGO_URI);

const corsConfig={
  origin:"*",
  credential:true
};
// Use cors middleware to handle CORS headers
app.use(cors(corsConfig));
app.options("",cors(corsConfig));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('jai shree ram');
});

app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/loginUser'));
app.use('/api', require('./routes/displayData'));
app.use('/api', require('./controllers/toolControllers'));
app.use(express.static(path.join(__dirname,"")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
