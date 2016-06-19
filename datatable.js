var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '107.178.220.226',
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

	var query = "SELECT * \
				FROM RequireDocs \
				JOIN Destination ON Destionation.dID = RequireDocs.DestId \
				JOIN Passport ON Passport.pID = RequireDocs.PassId \
				WHERE Destination.Country = "+ req.query.destination +" AND Passport.Country = "+req.query.passport

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

