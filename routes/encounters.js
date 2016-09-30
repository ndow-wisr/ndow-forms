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
    // var dat = req.body;
    // console.log(JSON.stringify(dat, null, '\t'));

    var animal = req.body.animal;
    var encounter = req.body.encounter;
    var marks = req.body.markOne;
    var abundance = req.body.abundance;
    var location = req.body.loc;

    // TODO: add dynamically created content without hardcoding 'rows'
    // replace blank ("") date removed with null because "" doesn't default to null or the default value and Postgres can't accepts "" as a date input value
    if (marks.mark_removed == "") {
        marks.mark_removed = null;
    }

    // buidling the model
    encounter.Abundance = abundance;
    encounter.Location = location;
    animal.Encounters = [ encounter ];
    animal.Marks = [ marks ];

    // console.log(JSON.stringify(animal, null, '\t'));

    // res.redirect('/encounters/new');

    models.Animal.create(animal, {
        include: [
            {
                model: models.Encounter,
                include: [
                    {model: models.Abundance},
                    {model: models.Location}
                ]
            },
            { model: models.Mark }
        ]
    }).then(function(){
        // console.log(JSON.stringify(animal, null, '\t'));
        res.redirect('/encounters');
    });
});

module.exports = router;
