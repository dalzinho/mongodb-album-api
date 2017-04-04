var express = require('express');
var app = express();
var albumRouter = express.Router();

var AlbumQuery = require('../client/db/albumQuery.js');
var query = new AlbumQuery();

albumRouter.get('/:id', function(req, res){
  res.json(albums[req.params.id]);
});

albumRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});


module.exports = albumRouter;