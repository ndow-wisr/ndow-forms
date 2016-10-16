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
    console.log(JSON.stringify(req.body, null, '\t'));

    // var animal = req.body.animal;
    // var encounter = req.body.enc;
    // var location = req.body.loc;
    // var marks = parseDynamicContent(req.body.mark);
    // var biometric = parseDynamicContent(req.body.biom);
    //
    // // if (encounter.marks == 'yes') {
    // //     var marks = req.body.mark;
    // //     Object.keys(marks).forEach(function(key) {
    // //         if (marks[key] == '') {
    // //             delete marks[key];
    // //         }
    // //     });
    // //     animal.Marks = [ marks ];
    // // };
    //
    // encounter.Location = location;
    // encounter.Biometrics = biometric;
    // animal.Encounters = [ encounter ];
    // animal.Marks = marks;
    // console.log(JSON.stringify(animal, null, '\t'));
    //
    // models.Animal.create(animal, {
    //     include: [
    //         { model: models.Mark },
    //         {
    //             model: models.Encounter,
    //             include: [
    //                 { model: models.Location },
    //                 { model: models.Biometric }
    //             ]
    //         }
    //     ]
    // }).then(function(){
        res.redirect('/encounters/new');
    // });

    // var animal = req.body.animal;
    // var encounter = req.body.encounter;
    // var marks = req.body.markOne;
    // var abundance = req.body.abundance;
    // var location = req.body.loc;

    // TODO: add dynamically created content without hardcoding 'rows'
    // replace blank ("") date removed with null because "" doesn't default to null or the default value and Postgres can't accepts "" as a date input value

    // buidling the model
    // encounter.Abundance = abundance;
    // encounter.Location = location;
    // animal.Encounters = [ encounter ];
    // animal.Marks = [ marks ];


    // models.Animal.create(animal, {
    //     include: [
    //         {
    //             model: models.Encounter,
    //             include: [
    //                 {model: models.Abundance},
    //                 {model: models.Location}
    //             ]
    //         },
    //         { model: models.Mark }
    //     ]
    // }).then(function(){
    //     // console.log(JSON.stringify(animal, null, '\t'));
    //     res.redirect('/encounters');
    // });
});

function parseDynamicContent(rq) {
    var n = 0;
    var dat = [];
    while (n < rq[Object.keys(rq)[0]].length) {
        var m = 0;
        var obj = {};
        while (m < Object.keys(rq).length) {
            var val = rq[Object.keys(rq)[m]][n];
            if (val == '') {
                val = null
            }
            obj[Object.keys(rq)[m]] = val
            m++;
        }
        dat.push(obj)
        n++;
    }
    return dat;
}

module.exports = router;
