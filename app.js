var express         = require('express'),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    methodOverride  = require("method-override"),
    seedDB          = require('./seed_db'),
    app             = express();

// REQUIRING ROUTES
var indexRoutes = require('./routes/index'),
    observationRoutes = require('./routes/observations');

// APP CONFIG
mongoose.connect("mongodb://localhost/occurences");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
seedDB();

// ROUTES
app.use("/", indexRoutes);
app.use("/observations", observationRoutes);


//
// // Update, PUT - update record, then redirect to the updated record
// app.put('/observations/:id', function(req, res){
//   Encounter.findByIdAndUpdate(req.params.id, req.body.encounter, function(err, udpateEncounter){
//     if(err){
//       res.redirect('/observations');
//     } else {
//       res.redirect('/observations/' + req.params.id);
//     }
//   });
// });
//
// // Destroy, DELETE - delete record then redirect
// app.delete('/observations/:id', function(req, res){
//   Encounter.findByIdAndRemove(req.params.id, function(err){
//     if(err){
//       res.redirect('/observations');
//     } else {
//       res.redirect('/observations');
//     }
//   });
// });
//
// // BIGHORN ROUTES ==============================================================
// // New, GET - go to form to enter bighorn checking
// app.get('/bighorncheckin/new', function(req, res){
//   res.render('bighornCheckout');
// });

// LISTEN, SERVER
app.listen(3000, function(){
  console.log('app listening on port 3000');
});
