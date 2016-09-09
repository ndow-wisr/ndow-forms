var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    bcrypt = require('bcrypt-nodejs'),
    models = require('../models');

// show landing page
router.get('/', function(req, res){
    res.render('index');
});

// signup page
router.get('/register', function(req, res){
    res.render('register');
});

// signin page
router.get('/login', function(req, res){
    res.render('login');
});

// LOGIN POST REQUEST
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/'
}));

// SIGN UP POST REQUEST
router.post('/register', function(req, res, next){
    models.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function(user){
        if(!user){
            models.User.create({
                first_name: req.body.first,
                last_name: req.body.last,
                email: req.body.email,
                username: req.body.username,
                division: req.body.division,
                password: bcrypt.hashSync(req.body.password)
            }).then(function(user){
                passport.authenticate('local', {
                    failureRedirect: '/register',
                    successRedirect: '/'
                })(req, res, next)
            })
        } else {
            res.send('user exists')
        }
    });
});

// SIGNOUT
router.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('/');
});

// LIST ALL SPECIES FOR SEARCH
router.get('/list-species', function(req, res){
    models.Species.findAll({
        attributes: ['id', 'common_name', 'species_name']
    })
        .then(function(species){
            res.json(species);
        });
});

isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
}

module.exports = router;
