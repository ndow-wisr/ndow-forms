var express = require('express'),
    router = express.Router(),
    models = require('../models');

// INDEX - Get: list all hw-conflicts

// SHOW - Get: show one hw-conflict by id

// NEW - Get: page to enter new hw-conflict
router.get('/new', function(req, res) {
  res.render('hw-conflicts/new');
});

module.exports = router;
