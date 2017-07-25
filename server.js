/* MongoDB Zoo Site (18.2.4)
 * Back-end
 * ========================= */

// Dependencies
var mongoose = require('mongoose');
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var mongodb = require('mongodb');

var URI = 'mongodb://pmlaker:Pm2305@ds157702.mlab.com:57702/heroku_r45mjcns';
// var URI = 'mongodb://bigmongo:d33znutz@ds155160.mlab.com:55160/whygoalone2';
mongodb.MongoClient.connect(URI, function(err, db) {
  console.log("db connected");
  
  if(err) throw err;

// Initialize Express

var collection = db.collection('myCollection');
var collection2 = db.collection('allTests');


// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Database configuration
// Save the URL of our database as well as the name of our collection
// var databaseUrl = "mydb";
// var collections = ["myCollection"];


// var databaseUrl2 = "testMenu";
// var collections2 = ["allTests"];

// Use mongojs to hook the database to the db variable
// var db = mongojs(databaseUrl, collections);
// var db2 = mongojs(databaseUrl2, collections2);

// This makes sure that any errors are logged if mongodb runs into an issue
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });
app.get("/", function(req, res) {
  
   res.sendfile('public/home.html');
});

app.get("/find2/:id", function(req, res) {
    var test_id2 = req.params.id;





  db.collection("allTests").find({"TestName": {$regex:test_id2, $options: 'i'} }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
      console.log("From server");
      console.log(found);
      
    }
  });
  });





  app.get("/find/:id", function(req, res) {
    var test_id = req.params.id;

      db.collection("allTests").find({"Test": test_id }).toArray(function(err, docs) {
    console.log(docs);
    console.log("found docs")
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});




// app.get("/find/:id", function(req, res) {
//   var test_id = req.params.id;

//  db.collection2("allTests").find({"Test": test_id }, function(error, found) {
//     // Log any errors if the server encounters one
//     if (error) {
//       console.log(error);
//     }
//     // Otherwise, send the result of this query to the browser
//     else {
//       res.json(found);
//       console.log("From server");
//       console.log(found);
      
//     }
//   });
//   });

  app.get("/find/dept2/:id", function(req, res) {
    var test_id = req.params.id;

      db.collection("allTests").find({"Test": test_id }).toArray(function(err, docs) {
    console.log(docs);
    console.log("found docs")
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});




 // db.collection("myCollection").find({"TestSet": test_id }, function(error, found) {
 //    // Log any errors if the server encounters one
 //    if (error) {
 //      console.log(error);
 //    }
 //    // Otherwise, send the result of this query to the browser
 //    else {
 //      res.json(found);
 //      console.log("From server");
 //      console.log(found);
      
 //    }
 //  });
 //  });

//gage test:
app.get("/find/dept/:id", function(req, res) {
  var test_id = req.param('id');
  db.collection("myCollection").find({$or:[{"WebsiteCategory": test_id }, { "WebsiteCategory2": test_id }]}).toArray(function(err, docs) {
    console.log(docs);
    console.log("found docs")
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

// Set the app to listen on port 3000
app.listen(process.env.PORT || 3000);



});