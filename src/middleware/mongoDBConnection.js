const mongoClient = require('../config/database');

async function mongoDBConnection(req, res, next) {
  await mongoClient.connect()
  req.db = {}
  req.db = mongoClient.db('mongo-execises')
  next()
}

module.exports = mongoDBConnection;