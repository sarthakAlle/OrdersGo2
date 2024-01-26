// db.js

const { MongoClient } = require('mongodb');

async function printToolsDataCollection() {
  // Connection URI
  const uri = 'mongodb://localhost:27017/ordersGo'; // Change the URL as needed

  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  // Connect to the MongoDB server
  try {
    await client.connect();
    console.log('Connected to the database');

    // Access the "ordersGo" database
    const database = client.db('ordersGo');

    // Access the "foodData" collection
    const food_items_collection = database.collection('toolsData');
    const food_category_collection = database.collection('foodCategory');

    // Find all documents in the "foodData" collection
     var food_items = await food_items_collection.find({}).toArray();
    var food_category= await food_category_collection.find({}).toArray();
    // Print the documents
    console.log('Documents in the "foodData" collection:');
    console.log([food_items,food_category]);
return [food_items,food_category];
  } catch (error) {
    console.error('Error connecting to the database or retrieving documents:', error);
    throw error;
  } finally {
    // Close the connection
    await client.close();
    console.log('connection closed');
  }

}

// Export the function for use in other files
module.exports = {printToolsDataCollection };
