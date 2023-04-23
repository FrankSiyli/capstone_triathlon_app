import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

let cachedDb;

async function dbConnect() {
  // check the cached.
  if (cachedDb) {
    // load from cache
    return cachedDb;
  }

  // set the connection options
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // check the MongoDB URI
  if (!MONGODB_URI) {
    throw new Error("Define the MONGODB_URI environmental variable");
  }
  // check the MongoDB DB
  if (!MONGODB_DB) {
    throw new Error("Define the MONGODB_DB environmental variable");
  }

  // Connect to database
  const db = await mongoose.connect(MONGODB_URI, {
    ...options,
    dbName: MONGODB_DB,
  });

  // set cache
  cachedDb = db;

  return cachedDb;
}

export default dbConnect;
