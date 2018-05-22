// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // route loads homeTest.handlebars
  app.get("/", function (req, res) {
    db.Opportunity.findAll({
      order: ["opportunity_name"]
    }).then(function (dbOpportunity) {
      res.render(path.join(__dirname, "../views/home.handlebars"), {
        opportunities: dbOpportunity
      });
    });
  });

  // register new_member route loads new_members.handlebars
  app.get("/new_members", function (req, res) {
    res.render(path.join(__dirname, "../views/new_members.handlebars"));
  });

  // route leads to login page
  app.get('/login', function (req, res) {
    res.render(path.join(__dirname, "../views/home"));
  });

  // route loads private.handlebars
  app.get("/private", isLoggedIn, function (req, res) {
    db.Member.findAll({
      attributes: {
        exclude: ['password']
      },
      where: {
        id: req.user.id
      },
      include: [db.Opportunity]
    }).then(function (member) {
      MyOpportunities = {
        opportunities: member.Opportunities,
      };
      // res.render(path.join(__dirname, "../views/private.handlebars"), MyOpportunities);
      res.json(member.Opportunities);
    });
  });

  // new_opportunities route loads new_opportunities.handlebars
  app.get("/new_opportunities", function (req, res) {
    res.render(path.join(__dirname, "../views/new_opportunities.handlebars"));
  });

  // opportunities sign up route loads opportunities_sign_up.handlebars - all jobs list
  app.get("/opportunities_sign_up", isLoggedIn, function (req, res) {
    res.render(path.join(__dirname, "../views/opportunities_sign_up.handlebars"));
  });

  // logout, redirect to home page
  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/login');
  }

};