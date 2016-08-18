var mongoose = require("mongoose"),
    Observation = require("./models/observations")

var data = [
    {
        date: "10/15/2016",
        observer: "Mitchell Gritts",
        species: "Peromyscus trueii",
        female: 1,
        male: 2,
        adult: 3,
        young: 2,
        total: 1,
        x: -119.6884,
        y: 39.6289,
        location: "Spanish Springs",
        comments: "3 PeTr in one trap, so cool."
    },
    {
        date: "10/16/2016",
        observer: "Cody McKee",
        species: "Perognathus parvus",
        female: 0,
        male: 2,
        adult: 2,
        young: 0,
        total: 2,
        x: -119.8566,
        y: 39.4737,
        location: "Coughlin Ranch",
        comments: "Captured on the same grid line, second pass."
    },
    {
        date: "10/16/2016",
        observer: "Mark Farman",
        species: "Neotoma lepida",
        female: 1,
        male: 0,
        adult: 1,
        young: 0,
        total: 1,
        x: -119.9497,
        y: 39.5334,
        location: "Sommersett",
        comments: "Captured on the same grid line, second pass."
    },
]

function seedDb(){
    Observation.remove({}, function(err){
        if(err){
            console.log(err);
        }
        data.forEach(function(seed){
            Observation.create(seed, function(err){
                if(err){
                    console.log(err)
                }
            });
        });
    });
}

module.exports = seedDb;
