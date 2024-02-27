const mongoose = require('mongoose');
const uri = process.env.MONGOURI;


/**
 * Connects to the MongoDB database using the provided connection string.
 * @param {string} uri - The MongoDB connection string.
 */
export async function run() {
  try {
    await mongoose.connect(uri);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  } 
}

// run().catch(console.dir);