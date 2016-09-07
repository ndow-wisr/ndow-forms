var mongoose = require("mongoose");

var checkinSchema = new mongoose.Schema({
    // hunter info
    name: String,
    resCity: String,
    tagNumber: Number,
    // hunt info
    species: String,
    unit: String,
    killDate: String,
    daysHunted: Number,
    killLocation: String,
    killX: Number,
    killY: Number,
    comments: String,
    // animal info
    age: Number,
    sex: String,
    plugNumber: String,
    plugHorn: String,
    plugLocation: String,
    bodyCondition: String,
    samples: String,
    hornRightTotal: Number,
    hornLeftTotal: Number,
    differenceTotal: Number,
    bcScore: Number
});

module.exports = mongoose.model('Checkin', checkinSchema);
