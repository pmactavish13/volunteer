var express = require("express");

var db = require("../models");

module.exports = function (app) {
// add new data - new member
app.post("/new_events", function (req, res) {
    db.events.create({
        newEvents: req.body()
    }).then(function (dbEvents) {
        res.json(dbEvents)
    });
});
}

