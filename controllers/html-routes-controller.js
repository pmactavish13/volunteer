// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var db = require("../models");

// Routes before passport
// =============================================================
module.exports = function (app) {

  // route loads homeTest.handlebars
  app.get("/", function (req, res) {
    db.Opportunity.findAll({
      order: ["opportunity_name"]
    }).then(function (dbOpportunity) {
      res.render(path.join(__dirname, "../views/home.handlebars"), { opportunities: dbOpportunity });
    });
  });

  // register new_member route loads new_members.handlebars
  app.get("/new_members", function (req, res) {
    res.render(path.join(__dirname, "../views/new_members.handlebars"));
  });
}
