var express = require("express"),
    router = express.Router(),
    Observation = require("../models/observations");

// index
router.get('/', function(req, res){
    Observation.find({}, function(err, allObservations){
        if(err){
            console.log(err)
        } else {
            res.render('observations/index', {observations: allObservations})
        }
    });
});

// new
router.get('/new', isLoggedIn, function(req, res){
    res.render('observations/new');
});

// create
router.post('/', function(req, res){
    var obs = req.body.observation
    obs.obsby = {
        id: req.user._id,
        username: req.user.username
    }
    console.log(obs);
    // var newObs = {
    //     req.body.observation,
    //     // date: req.body.date,
    //     // species: req.body.species,
    //     // female: req.body.female,
    //     // male: req.body.male,
    //     // adult: req.body.adult,
    //     // young: req.body.young,
    //     // x: req.body.x,
    //     // y: req.body.y,
    //     // total: req.body.total,
    //     // location: req.body.location,
    //     // comments: req.body.comments,
    //     obsby: {
    //         id: req.user._id,
    //         username: req.user.username
    //     }
    // }

    Observation.create(obs, function(err, newObs){
        if(err){
            console.log(err);
        } else {
            res.redirect('/observations');
        }
    });
});

// show
router.get('/:id', function(req, res){
    Observation.findById(req.params.id, function(err, foundObs){
        if(err){
            res.redirect('/observations');
        } else {
            res.render('observations/show', {observation: foundObs});
        }
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
