const mongoClient = require("./mongoClient");
const {
  MONGO_DB_NAME,
  MONGO_COLLECTION_NAME,
} = require("../../utils/constants");

const addUpdate = async (data) => {
  await mongoClient.connect();
  const db = mongoClient.db(MONGO_DB_NAME);
  const collection = db.collection(MONGO_COLLECTION_NAME);
  const result = await collection.insertOne(data);
  console.log(`A document was inserted with the _id: ${result.insertedId}`);
  await mongoClient.close();
};

const getUpdates = async (userId) => {
  await mongoClient.connect();
  const db = mongoClient.db(MONGO_DB_NAME);
  const collection = db.collection(MONGO_COLLECTION_NAME);
  const result = await collection.find({ userId }).toArray();
  await mongoClient.close();
  //   console.log(result);
  return result;
};

module.exports = { addUpdate, getUpdates };
