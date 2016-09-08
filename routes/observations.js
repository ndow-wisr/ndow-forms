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
    // get all fields, then add user id to obs for create
    var obs = req.body.observation
    obs.user_id = req.user.id

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
    // Observation.findByIdAndRemove(req.params.id, function(err){
    //     if(err){
    //         res.redirect('/observations');
    //     } else {
    //         res.redirect('/observations');
    //     }
    // });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
