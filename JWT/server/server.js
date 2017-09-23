'use strict'

const app = require('./app.js');

var port = process.env.PORT | 3005;
var server = app.listen(port,function(){
    console.log(`Listening on : ${server.address().port}`);
});
