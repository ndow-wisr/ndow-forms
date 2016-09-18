var express = require('express'),
    router = express.Router(),
    models = require('../models');

// var animal = {
//     field_id: '10232',
//     status: 'dead',
//     source: 'wildlife health app',
//     species_id: 754,
//     user_id: 1,
//     sex: 'male'
// }
//
// models.Animal.create(animal);

// var encounter = {
//     enc_date: '2016-09-15',
//     status: 'alive',
//     enc_method: 'basecamp - helicopter',
//     enc_reason: 'disease surveilance',
//     reencounter: false,
//     relocated: false,
//     biologist: 'Pat Cummings',
//     comments: 'blah, comment, blah',
//     folder_url: 'http://www.example.com',
//     qaqc_flag: false,
//     trusted: true,
//     loc_id: 1,
//     animal_id: 2,
//     rel_loc_id: 2
// }
// models.Encounter.create(encounter);

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
        ]
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
    var dat = req.body
    console.log(JSON.stringify(dat));
});

module.exports = router;
