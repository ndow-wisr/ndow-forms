var express = require('express'),
    router = express.Router(),
    models = require('../models');

// index, get, list all encounters
router.get('/', function(req, res){
    // res.send('http:/.../encounters');
    models.Animal.findAll({
        include: [
            {model: models.User,
             attributes: ['username', 'first_name', 'last_name', 'id']},
            {model: models.Species,
             attributes: ['species_name', 'common_name', 'id']},
             {model: models.Encounter}
        ],
        order: [ [ 'created_at', 'DESC' ] ]
    })
    .then(function(animals){
        res.status(200).json(animals);
    });
});

// new, get, get page to add new observation
router.get('/new', function(req, res){
    res.render('encounters/new');
});

// create, post, create a new encounter
router.post('/', function(req, res){
    var dat = req.body;
    console.log(JSON.stringify(dat, null, '\t'));

    var animal = req.body.animal;
    var markNull;
    // TODO: add dynamically created content without hardcoding 'rows'
    if (req.body.markOne.mark_removed == "") {
        markNull = null;
    } else {
        markNull = req.body.markOne.mark_removed;
    };

    animal.Encounters = [ req.body.encounter,
                          Abundance: req.body.abundance ];
    animal.Marks = [
        {
            mark_type: req.body.markOne.mark_type,
            mark_id: req.body.markOne.mark_id,
            mark_color: req.body.markOne.mark_color,
            mark_location: req.body.markOne.mark_location,
            date_given: req.body.markOne.date_given,
            mark_removed: markNull
        }
    ];
    animal.Encounters.Abundance = req.body.abundance;

    console.log(JSON.stringify(animal, null, '\t'));

    res.redirect('/encounters');

    // models.Animal.create(animal, {
    //     include: [
    //         { model: models.Encounter },
    //         { model: models.Mark }
    //     ]
    // }).then(function(){
    //     console.log(JSON.stringify(animal, null, '\t'));
    //     res.redirect('/encounters');
    // });
});

module.exports = router;
