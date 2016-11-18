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

  // parsing req.body and creating an animal object for inserting into database
  var animal = req.body.animal;
  var encounter = parseDynamicContent(req.body.enc);
  encounter.source = 'wildlife health form';
  encounter.user_id = req.user.id;
  var location = req.body.loc;
  if (encounter.marks == 'yes') {
    animal.Marks = parseDynamicContent(req.body.mark);
  }
  if (encounter.biometrics == 'yes') {
    encounter.Biometrics = parseDynamicContent(req.body.biom);
  }
  if (encounter.vitals == 'yes') {
    encounter.Vitals = parseDynamicContent(req.body.vitals);
  }
  if (encounter.injuries == 'yes') {
    encounter.Injuries = parseDynamicContent(req.body.injury);
  }
  if (encounter.medications == 'yes') {
    encounter.Medications = parseDynamicContent(req.body.meds);
  }
  if (encounter.samples == 'yes') {
    encounter.Samples = parseDynamicContent(req.body.samples);
  }
  encounter.Location = location;
  animal.Encounters = [ encounter ];
  console.log(JSON.stringify(animal, null, '\t'));

  // insert data into database
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
    // redirect to encounters index, or project show pages, depends on project_id
    if(encounter.project_id == null) {
      res.redirect('/encounters/new');
    } else {
      res.redirect('/projects/' + encounter.project_id);
    }
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
      { model: models.Project },
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
    encounter.id = req.params.id;
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
