// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
// static content 

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

// post route for adding a user
app.post('/result', function(req, res) {
	var data = [{
		name: req.body.name,
		location: req.body.location,
		language: req.body.language,
		comment: req.body.comment
	}]
 console.log("POSTDATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.render('result', {user : data});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})