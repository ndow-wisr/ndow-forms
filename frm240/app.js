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
  species: String,
  x: Number,
  y: Number,
  location: String,
  huntUnit: String,
  mgmtArea: String,
  female: Number,
  male: Number,
  young: Number,
  ageClass: String,
  habitat: String,
  observer: String,
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
//     huntUnit: "291",
//     mgmtArea: "29",
//     female: 5,
//     male: 2,
//     young: 3,
//     ageClass: "neonate",
//     habitat: "rocky mountain cliffs",
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

// Index, GET - show all encounters
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
    species: req.body.species,
    x: req.body.x,
    y: req.body.y,
    location: req.body.location,
    huntUnit: req.body.huntUnit,
    mgmtArea: req.body.mgmtArea,
    female: req.body.female,
    male: req.body.male,
    young: req.body.young,
    ageClass: req.body.ageClass,
    habitat: req.body.habitat,
    observer: req.body.observer,
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
