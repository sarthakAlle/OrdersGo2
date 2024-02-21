const MongoClient = require('mongodb').MongoClient;

async function fetchToolsData() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017/ordersGo");
    const db = client.db();
    const toolsCollection = db.collection('tools');
    const tools = await toolsCollection.find().toArray();
   
    console.log('fetchToolsData se fetch ho ra h ',tools); // Log the fetched data

    // Do something with the fetched data

    client.close(); // Close the connection to the database
  } catch (error) {
    // handle errors
  }
}



module.exports = fetchToolsData;
