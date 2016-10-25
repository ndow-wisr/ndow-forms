var express = require('express'),
    router = express.Router(),
    models = require('../models');

// index, get, list all projects
router.get('/', function(req, res) {
  models.Project.findAll({
    attributes: ['id', 'proj_name', 'proj_desc', 'proj_start']
  })
  .then(function(projects) {
    res.render('projects/index', {projects: projects})
  });
});

// new, get, show the page to enter new projects
router.get('/new', function(req, res) {
  res.render('projects/new');
});

// get projects for dropdown temporary location, need to build api
router.get('/list_projects', function(req, res) {
  models.Project.findAll({
    attributes: ['id', 'proj_name']
  })
    .then(function(projects) {
      res.status(200).json(projects);
    });
});

// create, post, send form data to the database
router.post('/', function(req, res){
  models.Project.create(req.body.proj).then(function(){
    res.redirect('projects/new');
  });
});

module.exports = router;
