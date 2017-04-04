var express = require('express');
var router = express.Router();
var path = require('path');


router.use('/api/albums', require('./albumCtrlr'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build'));
});

router.get('/about', function(req, res){
  res.json({data: "All about us!"});
});

module.exports = router;