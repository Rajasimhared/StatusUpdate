const mongoClient = require("../helpers/mongoClient");
const { MONGO_DB_NAME, MONGO_COLLECTION_NAME } = require("../utils/constants");

const addUpdate = async (data) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db(MONGO_DB_NAME);
    const collection = db.collection(MONGO_COLLECTION_NAME);
    const result = await collection.insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    await mongoClient.close();
  } catch (error) {
    console.log("addUpdate", error);
  }
};

const getUpdates = async (userId) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db(MONGO_DB_NAME);
    const collection = db.collection(MONGO_COLLECTION_NAME);
    const result = await collection.find({ userId }).toArray();
    await mongoClient.close();
    //   console.log(result);
    return result;
  } catch (error) {
    console.log("getUpdates", error);
  }
};

const getActiveUsers = async () => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db(MONGO_DB_NAME);
    const collection = db.collection(MONGO_COLLECTION_NAME);
    const result = await collection.distinct("userId");
    await mongoClient.close();
    //   console.log(result);
    return result;
  } catch (error) {
    console.log("getUpdates", error);
  }
};

module.exports = { addUpdate, getUpdates, getActiveUsers };
