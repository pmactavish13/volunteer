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
      var handlebarsData = {
        formData: {
          newEmail: "jDoe@email.com",
          newPassword: "",
          lastName: "Doe",
          firstName: "Jane",
          phone: "555-555-1234",
          photoUrl: "http://picture.com",
          selectInOrOut: "",
          cooking: "",
          gardening: "",
          painting: "",
          carpentry: "",
          plumbing: "",
          electrical: "",
          publicRelations: "",
          marketing: "",
          fundRaising: "",
          programming: "",
          sales: "",
          teaching: "",
        },
        opportunityData: {
          opportunities: dbOpportunity,
        }
      };

      res.render(path.join(__dirname, "../views/home.handlebars"), handlebarsData);
    });
  });

//   // register new_member route loads new_members.handlebars
//   app.get("/new_members", function (req, res) {
//     res.render(path.join(__dirname, "../views/new_members.handlebars"), formValues);
//   });
};