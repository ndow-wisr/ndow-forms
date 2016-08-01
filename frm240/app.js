var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

// APP CONFIG
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// DATABASE CONFIG
mongoose.connect("mongodb://localhost/occurences");

var encounterSchema = new mongoose.Schema({
  date: String,
  observer: String,
  species: String,
  female: Number,
  male: Number,
  adult: Number,
  young: Number,
  x: Number,
  y: Number,
  total: Number,
  location: String,
  comments: String
})

var Encounter = mongoose.model('Encounter', encounterSchema);

// test create database entry
// Encounter.create(
//   {
//     date: "7/28/2016",
//     species: "mountain goat",
//     x: -119.1234,
//     y: 35.1234,
//     location: "somewhere in America",
//     female: 5,
//     male: 2,
//     young: 3,
//     adult: 4,
//     total: 7,
//     observer: "Mitchell Gritts",
//     comments: "Jumping around the base of cliffs."
//   },
//   function(err, encounter){
//     if(err){
//       console.log(err);
//     } else {
//       console.log('NEW ENCOUNTER ADDED TO DATABASE');
//     }
//   });

// ROUTES

// home route '/'
app.get('/', function(req, res){
  res.render('index');
});

// Index, GET - show all encounters, only for frm240
app.get('/encounters', function(req, res){
  Encounter.find({}, function(err, allEncounters){
    if(err){
      console.log(err);
    } else {
      res.render("encounters", {encounters:allEncounters});
    }
  });
});

// New, GET - go to form to enter new encounters
app.get('/encounters/new', function(req, res){
  res.render('frm240');
});

// Create, POST - create new encounter, then redirect to /encounters
app.post('/encounters', function(req, res){
  // get data from form
  var newEncounter =
  {
    date: req.body.date,
    observer: req.body.observer,
    species: req.body.species,
    female: req.body.female,
    male: req.body.male,
    adult: req.body.adult,
    young: req.body.young,
    total: req.body.total,
    x: req.body.x,
    y: req.body.y,
    location: req.body.location,
    comments: req.body.comments
  };

  // create (add) new encounter to the database
  Encounter.create(newEncounter, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      // redirect
      res.redirect('/encounters');
    }
  });
});

// LISTEN, SERVER
app.listen(3000, function(){
  console.log('app listening on port 3000');
});
