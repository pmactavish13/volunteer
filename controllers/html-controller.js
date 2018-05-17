// *********************************************************************************
// html-controller.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.


  // index route loads homeTest.handlebars
  app.get("/", function (req, res) {
    res.render(path.join(__dirname, "../views/homeTest.handlebars"));
  });


  // index route loads home.handlebars
  // app.get("/", function (req, res) {
  //     res.render(path.join(__dirname, "../views/home.handlebars"));
  // });

  // index route loads homeTest.handlebars
  app.get("/", function (req, res) {
    db.Volunteer.findAll({
      include: [db.Opportunity, db.Member],
      order: ["opportunity_name"]
    }).then(function (dbVolunteer) {
      res.render(path.join(__dirname, "../views/homeTest.handlebars"), {
        volunteers: dbVolunteer
      });
    });
  })

  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

  app.get('/login', function (req, res) {
    res.render(path.join(__dirname, "../views/login.handlebars"));
  });

  // new_member route loads new_members.handlebars
  app.get("/new_members", function (req, res) {
    res.render(path.join(__dirname, "../views/new_members.handlebars"));
  });

  // new_opportunities route loads new_opportunities.handlebars
  app.get("/new_opportunities", function (req, res) {
    res.render(path.join(__dirname, "../views/new_opportunities.handlebars"));
  });

  // opportunities sign up route loads opportunities_sign_up.handlebars - all jobs list
  app.get("/opportunities_sign_up", isLoggedIn, function (req, res) {
    res.render(path.join(__dirname, "../views/opportunities_sign_up.handlebars"));
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/login');
  }

};