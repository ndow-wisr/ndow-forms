var mongoose = require("mongoose"),
    Observation = require("./models/observations"),
    Checkin = require("./models/checkins")

var data = [{
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
}, {
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
}, {
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
}]

var bhs = [{
    name: "Mike Cox",
    resCity: "Reno",
    tagNumber: 123456,
    species: "Rocky Mountain",
    unit: "101",
    killDate: "10/15/2016",
    daysHunted: 6,
    killLocation: "second boulder creek",
    killX: -115.1486,
    killY: 40.8939,
    comments: "in a group of 6",
    age: 6,
    sex: "male",
    plugNumber: "16-123",
    plugHorn: "Right",
    plugLocation: "2",
    bodyCondition: "Good",
    samples: "lung, liver, spleen",
    hornRightTotal: 50,
    hornLeftTotal: 51,
    differenceTotal: 1,
    bcScore: 100
}, {
    name: "Cody Schroeder",
    resCity: "Reno",
    tagNumber: 445544,
    species: "California",
    unit: "012",
    killDate: "10/25/2016",
    daysHunted: 2,
    killLocation: "Donnelly Peak",
    killX: -118.1486,
    killY: 40.8939,
    comments: "in a group of 3",
    age: 3,
    sex: "male",
    plugNumber: "16-334",
    plugHorn: "Right",
    plugLocation: "2",
    bodyCondition: "Good",
    samples: "lung, liver, spleen",
    hornRightTotal: 50,
    hornLeftTotal: 51,
    differenceTotal: 1,
    bcScore: 100
}, {
    name: "Pat Jackson",
    resCity: "Reno",
    tagNumber: 663466,
    species: "Desert",
    unit: "062",
    killDate: "10/25/2016",
    daysHunted: 2,
    killLocation: "Gold Butte",
    killX: -118.1486,
    killY: 36.8939,
    comments: "in a group of 3",
    age: 3,
    sex: "male",
    plugNumber: "16-334",
    plugHorn: "Right",
    plugLocation: "2",
    bodyCondition: "Good",
    samples: "lung, liver, spleen",
    hornRightTotal: 50,
    hornLeftTotal: 51,
    differenceTotal: 1,
    bcScore: 100
}]

function seedDb() {
    Observation.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        data.forEach(function(seed) {
            Observation.create(seed, function(err) {
                if (err) {
                    console.log(err)
                }
            });
        });
    });
    Checkin.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        bhs.forEach(function(seed) {
            Checkin.create(seed, function(err) {
                if (err) {
                    console.log(err)
                }
            });
        });
    });
}

module.exports = seedDb;
