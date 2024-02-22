/*const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/ordersGo';

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Re-throw for error handling
    }
}

async function fetchData(collectionName, query = {}) {
    try {
        const db = mongoose.connection.db;
        const collection = db.collection(collectionName);
        const data = await collection.find(query).toArray();
        return data;
    } catch (error) {
        console.error(`Error retrieving data from collection "${collectionName}":`, error);
        throw error; // Re-throw for error handling
    }
}

async function printToolsDataCollection() {
   const [toolItems] = await Promise.all([fetchData('toolsData')]);
    console.log('Documents in "toolsData" collection:', toolItems);
}

module.exports = {
    connectToDatabase,
    fetchData,
    printToolsDataCollection
};
*/
// db.js

// 

const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const connectdatabase=()=>{
//mongodb://localhost:27017/ordersGo
    mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('mongodb is connected');
}).catch((err)=>{
    console.log(err);
});
}

module.exports={connectdatabase};

