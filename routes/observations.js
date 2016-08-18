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
router.get('/new', function(req, res){
    res.render('observations/new');
});

// create
router.post('/', function(req, res){
    Observation.create(req.body.observation, function(err, newObs){
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
router.get('/:id/edit', function(req, res){
    Observation.findById(req.params.id, function(err, foundObs){
        if(err){
            console.log(err);
        } else {
            res.render('observations/edit', {observation: foundObs});
        }
    });
});

// update
router.put('/:id', function(req, res){
    Observation.findByIdAndUpdate(req.params.id, req.body.observation, function(err, updObs){
        if(err){
            res.redirect('/observations');
        } else {
            res.redirect('/observations/' + req.params.id);
        }
    });
});

// destroy
router.delete('/:id', function(req, res){
    Observation.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/observations');
        } else {
            res.redirect('/observations');
        }
    });
});

module.exports = router;
