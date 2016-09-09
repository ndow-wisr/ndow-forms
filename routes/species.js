var express = require("express"),
    router = express.Router(),
    models = require('../models');

// INDEX (get) - show all Species
// TODO: add filters to species index
router.get('/', function(req, res){
    models.Species.findAll().then(function(species){
        res.json(species);
    });
});

// SHOW (get) - individual species page by :id
router.get('/:id', function(req, res){
    models.Species.findById(req.params.id).then(function(species){
        res.render('species/show', {species:species});
    });
});

module.exports = router;
