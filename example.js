var express = require('express');
var connect = require('connect');

var app = express();

// Some common express configuration
var sessionSecret = 'session-sooper-sicritez-12346abzi'
app.use(connect.cookieParser(sessionSecret));
app.use(connect.session({ secret: sessionSecret }));
app.use(express.methodOverride());
app.use(app.router);


app.get('/test', function (req, res) {

  // test code here

})

app.listen(3000);
console.log('Server running at port 3000');