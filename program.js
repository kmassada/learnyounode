var bl = require('bl');
var concat = require('concat-stream');

var http = require('http');
http.get(process.argv[2], function(res) {
  res.pipe(bl(function(err, data) {
    out = data.toString();
    console.log(out.length);
    console.log(out);
  }));
});
