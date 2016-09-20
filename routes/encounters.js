var express = require('express'),
    router = express.Router(),
    models = require('../models');

// models.Animal.create({
//     source: 'wildife health app',
//     species_id: 1,
//     user_id: 1,
//     sex: 'female',
//     field_id: 20000,
//     Encounters: [
//         {
//             status: 'alive',
//             enc_date: '2016-10-10',
//             enc_method: 'capture',
//             enc_reason: 'disease',
//             biologist: 'mitchell gritts'
//         }
//     ]
// }, {
//     include: [{
//         model: models.Encounter
//     }]
// });

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
    console.log(req.body.animal.species_id);
    var animal = req.body.animal;
    animal.Encounters = req.body.encounter;

    models.Animal.create(animal, {
        include: [{
            model: models.Encounter
        }]
    }).then(function(){
        res.redirect('/encounters');
    });

    // models.Animal.create({
    //     source: 'wildlife health',
    //     species_id: req.body.animal[species_id],
    //     user_id: 1,
    //     sex: req.body.sex,
    //     field_id: req.body.field_id,
    //     Encounters: [ req.body.encounter ]
    // }, {
    //     include: [{
    //         model: models.Encounter
    //     }]
    // }).then(function(){
    //     res.redirect('/encounters');
    // });
});

module.exports = router;
