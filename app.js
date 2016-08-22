var express         = require('express'),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    methodOverride  = require("method-override"),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local'),
    User            = require('./models/user')
    seedDB          = require('./seed_db'),
    app             = express();

// REQUIRING ROUTES
var indexRoutes = require('./routes/index'),
    observationRoutes = require('./routes/observations'),
    checkinRoutes = require('./routes/checkins');

// APP CONFIG
mongoose.connect("mongodb://localhost/ndow-forms");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
seedDB();

// AUTHENTICATION PASSPORT
app.use(require("express-session")({
    secret: "Super secret testing secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


// ROUTES
app.use("/", indexRoutes);
app.use("/observations", observationRoutes);
app.use("/checkins", checkinRoutes);

// LISTEN, SERVER
app.listen(3000, function(){
  console.log('app listening on port 3000');
});
