var express = require('express'),
    router = express.Router({mergeParams: true}),
    Observation = require('../models/observations'),
    Comment = require('../models/comments');

// Comments New
router.get('/new', function(req, res){
    // find observation by id
    Observation.findById(req.params.id, function(err, observation){
        if(err){
            console.log(err);
        } else {
            res.render('comments/new', {observation: observation});
        }
    });
});

router.post("/", function(req, res){
    // lookup observation
    Observation.findById(req.params.id, function(err, observation){
        if(err){
            console.log(err)
        } else {
            Comment.create({
                text: req.body.remark,
                action: req.body.qaqc,
                author: {
                    id: req.user._id,
                    username: req.user.username
                }
            }, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    observation.qaqc.push(comment);
                    observation.save();
                    res.redirect('/observations/' + observation._id);
                }
            });
        }
    });
});

module.exports = router;
