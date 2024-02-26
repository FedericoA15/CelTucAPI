const mongoose = require('mongoose');
const uri = "mongodb+srv://CelTuc:I0Dq7IRe01MhUTuA@celtuc.nivph2x.mongodb.net/?retryWrites=true&w=majority&appName=CelTuc";


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