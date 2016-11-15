var express = require('express'),
    router = express.Router(),
    models = require('../models');

// index, get, list all encounters
router.get('/', function(req, res){
    models.Encounter.findAll({
      attributes: ['enc_date', 'status', 'id'],
      include: [
        {model: models.Animal,
         attributes: ['field_id'],
         include: [
           {model: models.Species,
            attributes: ['id', 'common_name']}
         ]}
      ]
    })
    .then(function(encounters){
      // res.status(200).json(encounters);
      res.render('encounters/index', {encounters: encounters});
    });
});

// new, get, get page to add new observation
router.get('/new', function(req, res){
    res.render('encounters/new');
});

// create, post, create a new encounter
router.post('/', function(req, res){
  console.log(JSON.stringify(req.body, null, '\t'));

  var animal = req.body.animal;
  var encounter = parseDynamicContent(req.body.enc);
  encounter.source = 'wildlife health form';
  encounter.user_id = req.user.id;
  var location = req.body.loc;

  if (encounter.marks == 'yes') {
    var marks = parseDynamicContent(req.body.mark);
    animal.Marks = marks;
  }
  if (encounter.biometrics == 'yes') {
    var biometric = parseDynamicContent(req.body.biom);
    encounter.Biometrics = biometric;
  }
  if (encounter.vitals == 'yes') {
    var vitals = parseDynamicContent(req.body.vitals);
    encounter.Vitals = vitals;
  }
  if (encounter.injury == 'yes') {
    var injury = parseDynamicContent(req.body.injury);
    encounter.Injuries = injury;
  }
  if (encounter.medications == 'yes') {
    var meds = parseDynamicContent(req.body.meds);
    encounter.Medications = meds;
  }
  if (encounter.samples == 'yes') {
    var samples = parseDynamicContent(req.body.samples);
    encounter.Samples = samples;
  }

  encounter.Location = location;
  animal.Encounters = [ encounter ];
  animal.Marks = marks;
  console.log(JSON.stringify(animal, null, '\t'));

  models.Animal.create(animal, {
    include: [
      { model: models.Mark },
      {
        model: models.Encounter,
          include: [
            { model: models.Location },
            { model: models.Biometric },
            { model: models.Vital },
            { model: models.Injury },
            { model: models.Medication },
            { model: models.Sample }
          ]
      }
    ]
  }).then(function(){
    console.log('New Encounter Added!');
    res.redirect('/encounters/new');
  });
});

// show individual encounters, the find model is Encounter instead of animal. I can use Animal and show every encounter as tabs?
// IDEA: Use Animal.findAll(), each encounter is a tab?
router.get('/:id', function(req, res) {
  models.Encounter.findById(req.params.id, {
    attributes: {exclude: 'location_id'},
    include: [
      { model: models.Biometric },
      { model: models.Vital },
      { model: models.Injury },
      { model: models.Medication },
      { model: models.Sample },
      { model: models.Location },
      {
        model: models.Animal,
        include: [{
          model: models.Species,
          attributes: ['id', 'common_name']
        }, {
          model: models.Mark
        }]}
    ]
  })
  .then(function(encounter) {
    // res.status(200).send(JSON.stringify(encounter));
    res.render('encounters/show', {encounter:encounter})
  });
});

function parseDynamicContent(rq) {
    var n = 0;
    var dat = [];
    if (typeof rq[Object.keys(rq)[0]] !== 'object') {
        for (var i = 0; i < Object.keys(rq).length; i++) {
            if (rq[Object.keys(rq)[i]] == '') {
                rq[Object.keys(rq)[i]] = null;
            }
        }
        return rq;
    } else {
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
}

module.exports = router;
