var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user');

// show landing page
router.get('/', function(req, res) {
    res.render('index');
});

// show user register form
router.get('/register', function(req, res){
    res.render('register');
});

// handle registration logic
router.post('/register', function(req, res){
    var newUser = new User({
        username: req.body.username,
        first: req.body.first,
        last: req.body.last,
        division: req.body.division,
        permissions: 'admin'
    });
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log('err')
            return res.redirect('register');
        }
        passport.authenticate('local')(req, res, function(){
            res.redirect('/');
        });
    });
});

// show login page
router.get('/login', function(req, res){
    res.send('register page');
});

// handle login logic
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/'
}), function(req, res){
});

// logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect("/")
})

module.exports = router;
