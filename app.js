var express         = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require("method-override"),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local'),
    bcrypt          = require('bcrypt-nodejs'),
    models          = require('./models'),
    app             = express();

// REQUIRING ROUTES
var indexRoutes = require('./routes/index');
var observationRoutes = require('./routes/observations');
var speciesRoutes = require('./routes/species');
var encounterRoutes = require('./routes/encounters');
var projectRoutes = require('./routes/projects');

// APP CONFIG
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(require('cookie-parser')());
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDB();

// AUTHENTICATION PASSPORT
app.use(require('express-session')({
    secret: 'super secret secret key',
    resave: false,
    saveUninitialized: false
}));
passport.use(new LocalStrategy(function(username, pass, callback){
    models.User.findOne({
        where: {
            username: username
        }
    }).then(function(user, err){
        if(err){
            return callback(err)
        }
        if(!user){
            return callback(null, false)
        }
        if(!bcrypt.compareSync(pass, user.password)){
            return callback(null, false)
        }
        return callback(null, user)
    })
}));
passport.serializeUser(function(user, callback){
    callback(null, user.id)
});
passport.deserializeUser(function(id, callback){
    models.User.findById(id).then(function(user){
        callback(null, user)
    });
});
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// ROUTES
app.use("/", indexRoutes);
app.use("/observations", observationRoutes);
app.use("/species", speciesRoutes);
app.use('/encounters', encounterRoutes);
app.use('/projects', projectRoutes);
// app.use("/observations/:id/comments", commentRoutes);
// app.use("/checkins", checkinRoutes);

// LISTEN, SERVER
app.listen(3000, function(){
  console.log('app listening on port 3000');
});
