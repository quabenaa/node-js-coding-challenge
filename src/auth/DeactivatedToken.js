const mongoClient = require('../config/database');

const table = 'deactivated-tokens';
const db = 'mongo-execises';

const insertOne = async (userToken) => {
  await mongoClient.connect();
  const database = mongoClient.db(db);
  return await database.collection(table).insertOne(userToken);
};

const find = async (conditions) => {
  await mongoClient.connect();
  const database = mongoClient.db(db);
  return await database.collection(table).findOne(conditions);
};

module.exports = { insertOne, find };
