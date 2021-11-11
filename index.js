const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bye there');
});

//ssh-keygen -t rsa -b 4096 -C "balilokesh20@gmail.com".
app.listen(8080, () => {
  console.log('Listening on port 8080');
});


