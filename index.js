const app = require('./app');
const mongoClient = require('./src/config/database');

app.listen(app.get('port'), async () => 
{
    console.log('Application server listening on port ' + app.get('port'))
    await mongoClient.connect()
    console.log('Connected to Mongo database')
    app.set('db', mongoClient.db('mongo-execises'))
});

Object.getOwnPropertyNames(['SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGTERM'])
  .forEach((eventType) => {
    process.on(eventType, async () => {
      console.log('Closing database connection')
      await mongoClient.close()
      app.close()
    })
  })