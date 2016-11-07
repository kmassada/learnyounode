var fs = require('fs');
var path = require('path');
module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, data) {
      if (err) {
        return callback(err);
      }
      var res = [];
      for (var i = 0; i < data.length; i++) {
        if (path.extname(data[i])  == '.' + extension) {
          res.push(data[i]);
        }
      }
      return callback(null, res);
    });
};
