'use strict';

var express = require('express');
var app = express();

var Item = require('./models').Item;

var port = process.env.PORT || 3000;

app.get('/api/items', function(req, res) {
  Item.findAll()
    .then(function(items) {
      res.set('Content-Type', 'application/json');
      res.send(items);
    });
});

app.use('/dist', express.static('dist'));
app.use('/playground', express.static('playground'));

app.listen(port, function() {
  console.log('App listening on port', port);
});
