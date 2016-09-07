var mongoose = require("mongoose");

var observationSchema = new mongoose.Schema({
    date: String,
    observer: String,
    species: String,
    female: Number,
    male: Number,
    sexunk: Number,
    adult: Number,
    young: Number,
    ageunk: Number,
    youngclass: String,
    total: Number,
    x: Number,
    y: Number,
    location: String,
    comments: String,
    obsby: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    qaqc: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model('Observation', observationSchema);
