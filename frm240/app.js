var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// APP CONFIG
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// TESTING VAR
var encounters = [
  {date: "7/1/2016",
  species: "chipmunk",
  x: -119.3050,
  y: 35.3050,
  location: "Lamoille Canyon",
  huntUnit: "102",
  mgmtArea: "10",
  female: 2,
  male: 3,
  young: 0,
  ageClass: "adult",
  habitat: "pine forest",
  observer: "mitch gritts",
  comments: "hoarding nuts"
},
{date: "7/2/2016",
species: "mountain goat",
x: -119.3020,
y: 35.3020,
location: "Lamoille Canyon",
huntUnit: "102",
mgmtArea: "10",
female: 5,
male: 2,
young: 2,
ageClass: "adult",
habitat: "pine forest",
observer: "mitch gritts",
comments: "grazing"
}
]

// ROUTES

// Index, GET - list all encounters
app.get('/encounters', function(req, res){
  res.render("encounters", {encounters:encounters});
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
  encounters.push(newEncounter);
  res.redirect('/encounters')
});



// LISTEN, SERVER
app.listen(3000, function(){
  console.log('app listening on port 3000');
});
