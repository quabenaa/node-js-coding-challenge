const app = require('./src/app');
const { mongoClient } = require('./src/config/database');

app.listen(app.get('port'), async () => {
  console.log('Application server listening on port ' + app.get('port'));
});

Object.getOwnPropertyNames(['SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGTERM']).forEach((eventType) => {
  process.on(eventType, async () => {
    app.close();
  });
});
