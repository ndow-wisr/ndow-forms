var express = require("express"),
    router = express.Router(),
    models = require('../models');

// index, get, list all observations
router.get('/', function(req, res){
    models.Observation.findAll({
        include: [{
            model: models.User
        }]
    }).then(function(observations){
        // res.json(observations)
        res.render('observations/index', {observations: observations});
    });
});

// new
router.get('/new', isLoggedIn, function(req, res){
    res.render('observations/new');
});

// create
router.post('/', function(req, res){
    var obs = req.body.observation
    obs.user_id = req.user.id
    console.log(obs);

    models.Observation.create(obs).then(function(){
        res.redirect('/observations');
    });
});

// show
router.get('/:id', function(req, res){
    models.Observation.findById(req.params.id, {
        include: [{
            model: models.User
        }]
    }).then(function(observation){
        console.log(observation);
        res.render('observations/show', {observation: observation});
    });
});

// edit
router.get('/:id/edit', isLoggedIn, function(req, res){
    Observation.findById(req.params.id, function(err, foundObs){
        if(err){
            console.log(err);
        } else {
            res.render('observations/edit', {observation: foundObs});
        }
    });
});

// update
router.put('/:id', isLoggedIn, function(req, res){
    Observation.findByIdAndUpdate(req.params.id, req.body.observation, function(err, updObs){
        if(err){
            res.redirect('/observations');
        } else {
            res.redirect('/observations/' + req.params.id);
        }
    });
});

// destroy
router.delete('/:id', isLoggedIn, function(req, res){
    Observation.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/observations');
        } else {
            res.redirect('/observations');
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
