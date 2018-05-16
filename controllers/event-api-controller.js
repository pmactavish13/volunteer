var express = require("express");

var db = require("../models");

// add new data - new member
app.post("/new_member", function (req, res) {
    db.members.create({
        newMember: req.body()
    }).then(function (dbMembers) {
        res.json(dbMembers)
    });
});

