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
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
seedDB();

// ROUTES
app.use("/", indexRoutes);
app.use("/observations", observationRoutes);


// // BIGHORN ROUTES ==============================================================
// // New, GET - go to form to enter bighorn checking
// app.get('/bighorncheckin/new', function(req, res){
//   res.render('bighornCheckout');
// });

// LISTEN, SERVER
app.listen(3000, function(){
  console.log('app listening on port 3000');
});
