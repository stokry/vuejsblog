var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist/index.html"));
var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);