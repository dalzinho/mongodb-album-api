var Album = require('./Album');

var AlbumsModel = function(){};

AlbumsModel.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },

  
}
