var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'myang33',
  database : 'visafinder'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


app.get("/",function(req,res){
connection.query('SELECT * from Destination', function(err, rows, fields) {
  if (!err){
  	console.log('The solution is: ', rows);
  }
    
  else {
  	console.log('Error while performing Query.');
  }
    
  });
});

app.listen(3000);
