/**
 * Created by Hyiero on 7/30/2016.
 */


// SET UP ====================================================
var express = require('express');
var morgan = require('morgan'); //Log requests to the terminal(express4 logging was moved to its own separate add-on
var bodyParser = require('body-parser'); //pull information from HTML Post (express4)
var methodOverride = require('method-override'); //Simulate Delete and Put (express4)
var db = require('./server/config/database'); // Loads up our database config
var app = express(); // Creates our application using express

// CONFIGURATION =============================================

// Connects to the database in our database.js config file
//db.connectToDB(); // Uncomment this when you put in a database url in the database.js

app.use(express.static(__dirname+ "/public")); //Set the static files location /public
app.use(morgan('dev')); //Will log every request to the console while in developer mode
app.use(bodyParser.urlencoded({'extended':'true'})); //Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //Parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); //Parse application/vnd.api+json
app.use(methodOverride());

// APIRoutes =================================


// Application ==============================
//This will load our single index.html file when we hit localhost:8080
app.get('*',function(req,res){
    res.sendFile(__dirname + '/public/index.html'); //load the single view file (angular will handle the rest of the routing)
});

//Listen on port 8080 ===========================================
app.listen(8080);
console.log("Application is now found at localhost:8080");