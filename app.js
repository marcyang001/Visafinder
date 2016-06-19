// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.enable('trust proxy');
var mysql = require('mysql');
// create application/json parser 
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })


function getClientAddress(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;

}


app.get('/',function (request, response) {
	
	console.log('request from' + getClientAddress(request) + " " + request.url);
	response.sendFile( __dirname + '/html/index.html')

});



app.get('/endpoint', urlencodedParser, function(req, res){
  

  var connection = mysql.createConnection({
    host: "107.178.220.226",
    user: "root",
    password: "myang33",
    database: "visafinder"
  });

  /*
  MYSQL_HOST: 107.178.220.226
  MYSQL_USER: root
  MYSQL_PASSWORD: myang33
  MYSQL_DATABASE: visafinder

  */
  console.log(req.query);

  var query = "SELECT RequireDocs.Cost * "+req.query.duration+" as cost, RequireDocs.Requred_Doc as requiredocs \
        FROM RequireDocs \
        JOIN Destination ON Destination.dID = RequireDocs.DestId \
        JOIN Passport ON Passport.pID = RequireDocs.PassId \
        WHERE Destination.Country = \""+ req.query.destination +"\" AND Passport.Country = \""+req.query.passport + "\""


  connection.query(query, function(err, rows, fields) {
    if (!err){
      //console.log('The solution is: ', rows);
      res.send(rows);

    }
      
    else {
      console.log(err);
    }
    
  });

});


/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    console.log('other files : ' + req.params);
    res.sendFile( __dirname +"/html/"+ req.params[0]); 
});




if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(process.env.PORT || 8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
  // [END server]
}

module.exports = app;
