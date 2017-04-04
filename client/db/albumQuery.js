var MongoClient = require('mongodb').MongoClient;

var AlbumQuery = function(){
  this.url = 'mongodb://localhost:27017/beatles_albums';
};

AlbumQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        console.log('connected to database!');
      }
      var collection = db.collection('beatlesalbums');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }





}

module.exports = AlbumQuery;