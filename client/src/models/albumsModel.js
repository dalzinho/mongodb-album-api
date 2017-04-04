var Album = require('./Album');

var AlbumsModel = function(){};

AlbumsModel.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },

  getAll: function(callback){
    var url = 'http://localhost:3000/api/albums';
    this.makeRequest(url, function(){
      if(this.status !== 200){
        return;
      }

      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      var albums = AlbumsModel.prototype.populate(results);
      callback(albums);

    })
  },

  populate: function(results){
    var albums = [];
    results.forEach(function(result){
      albums.push(result);
    });

    return albums;
  },

}

module.exports = AlbumsModel;