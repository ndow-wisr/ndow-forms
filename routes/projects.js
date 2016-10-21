var express = require('express'),
    router = express.Router(),
    models = require('../models');

// index, get, list all projects

// new, get, show the page to enter new projects
router.get('/new', function(req, res) {
  res.render('projects/new');
});

// create, post, send form data to the database
router.post('/', function(req, res){
  models.Project.create(req.body.proj).then(function(){
    res.redirect('projects/new');
  });
});

module.exports = router;
