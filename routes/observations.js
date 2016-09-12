var express = require("express"),
    router = express.Router(),
    models = require('../models');

// index, get, list all observations
router.get('/', function(req, res){
    models.Observation.findAll({
        include: [
            {model: models.User},
            {model: models.Species}
        ]
    }).then(function(observations){
        res.render('observations/index', {observations: observations});
    });
});

// new
router.get('/new', isLoggedIn, function(req, res){
    res.render('observations/new');
});

// create
router.post('/', function(req, res){
    // get all fields, then add user id to obs for create
    var obs = req.body.observation
    obs.user_id = req.user.id
    obs.source = 'incidental observation app'
    console.log(obs);
    models.Observation.create(obs).then(function(){
        res.redirect('/observations');
    });
});

// show, get, view obs for :id
router.get('/:id', function(req, res){
    models.Observation.findById(req.params.id, {
        include: [
            {model: models.User},
            {model: models.Species}
        ]
    }).then(function(observation){
        res.render('observations/show', {observation: observation});
    });
});

// edit
router.get('/:id/edit', isLoggedIn, function(req, res){
    models.Observation.findById(req.params.id).then(function(observation){
        res.render('observations/edit', {observation: observation});
    });
});

// update
router.put('/:id', isLoggedIn, function(req, res){
    models.Observation.update(req.body.observation, {
        where: {id: req.params.id}
    }).then(function(){
        res.redirect('/observations');
    });
});

// destroy
router.delete('/:id', isLoggedIn, function(req, res){
    models.Observation.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(){
        res.redirect('/observations');
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
