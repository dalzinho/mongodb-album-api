var AlbumsModel = require('../models/albumsModel')

var UI = function(){
  var albums = new AlbumsModel();
  albums.getAll(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(albums){
    var container = document.getElementById('albums');
    albums.forEach(function(album){
      var li = document.createElement('li');
      UI.prototype.appendText(li, album.title, 'Title: ');
      UI.prototype.appendText(li, album.released, 'Released: ');

      container.appendChild(li);

    })
  }
}

module.exports = UI;