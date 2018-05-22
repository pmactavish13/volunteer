// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var db = require("../models");

// Routes
// =============================================================

module.exports = function (app,passport) {
    
// register signin route loads new_members.handlebars
app.post('/api/signup',
    passport.authenticate('local-signup', {
      failWithError: true
    }),
    (req, res, next) => {
        res.status(200).send({redirectTo: '/private'});
    },
    (err, req, res, next) => {
        console.log(err);
        res.status(500).send(err);
    });

app.post(
    '/api/signin', 
    passport.authenticate('local-signin', {
        failWithError: true
    }),
    (req, res, next) => {
        res.status(200).send({redirectTo: '/private'});
    },
    (err, req, res, next) => {
        console.log(err);
        res.status(500).send(err);
    });

app.put(
    '/api/user',
    isLoggedIn,
    async (req, res) => {
        const id = req.user;
        const data = req.body;
        const member = await db.Member.findById(id);
        await member.update(data); 
        res.status(200).send();
    });

  // route loads private.handlebars
  app.get("/private", isLoggedIn, function (req, res) {
    db.Opportunity.findAll({}).then(function (DbOpporunities) {
      MyOpportunities = {
        opportunities: DbOpporunities,
      };
      res.render(path.join(__dirname, "../views/private.handlebars"), MyOpportunities);
      //res.json(DbOpporunities);
    });
  });

  // new_opportunities route loads new_opportunities.handlebars
  app.get("/new_opportunities", isLoggedIn, function (req, res) {
    res.render(path.join(__dirname, "../views/new_opportunities.handlebars"));
  });

  // opportunities sign up route loads opportunities_sign_up.handlebars - all jobs list
  app.get("/opportunities_sign_up",isLoggedIn, function (req, res,) {
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
    res.redirect('/');
 }

};
