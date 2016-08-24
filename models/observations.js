var mongoose = require("mongoose");

var observationSchema = new mongoose.Schema({
    date: String,
    observer: String,
    species: String,
    female: Number,
    male: Number,
    adult: Number,
    young: Number,
    x: Number,
    y: Number,
    total: Number,
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
