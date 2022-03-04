const mongoClient = require('../config/database');

const table = 'users';

const insertOne = async (user) => {
  await mongoClient.connect();
  const database = mongoClient.db('mongo-execises');
  return await database.collection(table).insertOne(user);
};

const find = async (conditions) => {
  await mongoClient.connect();
  const database = mongoClient.db('mongo-execises');
  return await database.collection(table).findOne(conditions);
};

module.exports = { insertOne, find };
