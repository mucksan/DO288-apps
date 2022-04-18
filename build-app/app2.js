var express = require('express');
app = express();

app.get('/hello', function (req, res) {
  res.send('Hello!\n');
});

app.listen(8080, function () {
  console.log('Simple app for the Building Applications Lab!');
});

