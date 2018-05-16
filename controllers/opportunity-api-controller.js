var express = require("express");

var db = require("../models");

module.exports = function (app) {
// add new data - new member
app.post("/new_opportunities", function (req, res) {
    db.opportunities.create({
        newOpportunities: req.body()
    }).then(function (dbOpportunities) {
        res.json(dbOpportunities)
    });
});
}