const { MongoClient } = require('mongodb');

const mongoClient = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoClient;
