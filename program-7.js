var http = require('http');
http.get(process.argv[2], function(res) {
  res.on('data', function(data) {
    out = data.toString().split('\n');
    out.forEach(function(line) {
      console.log(line);
    });
  });
});
