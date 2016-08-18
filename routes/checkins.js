var express = require("express"),
    router = express.Router(),
    Checkin = require("../models/checkins");

// index
router.get('/', function(req, res){
    Checkin.find({}, function(err, checkins){
        if(err){
            console.log(err)
        } else {
            res.render('checkins/index', {checkins: checkins});
        }
    });
});

module.exports = router;
