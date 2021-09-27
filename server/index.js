const cron = require('node-cron');
const express = require('express');

app = express();

app.listen(8043);

cron.schedule('* * * * *', function() {
  console.log('running a task every minute');
});
