const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = `mongodb+srv://rbellary:${process.env.MONGO_PASSWORD}@statusupdate.yqtkujc.mongodb.net/?retryWrites=true&w=majority`;

const { MONGO_DB_NAME } = require("../utils/constants");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
});

async function run() {
  try {
    await mongoClient.connect();
    // Send a ping to confirm a successful connection
    await mongoClient.db(MONGO_DB_NAME).command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await mongoClient.close();
  }
}
run().catch(console.dir);

module.exports = mongoClient;
