// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var db = require("../models");

// Routes
// =============================================================

module.exports = function (app, passport) {

  // register signin route loads new_members.handlebars
  app.post('/api/signup',
    passport.authenticate('local-signup', {
      failWithError: true
    }),
    (req, res, next) => {
      res.status(200).send({
        redirectTo: '/private'
      });
    },
    (err, req, res, next) => {
      console.log(err);
      res.status(500).send(err);
    });

  app.put('/api/signup', isLoggedIn, function (req, res) {
    var data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      inOrOut: req.body.inOrOut,
      cooking: req.body.cooking,
      gardening: req.body.gardening,
      painting: req.body.painting,
      carpentry: req.body.carpentry,
      plumbing: req.body.plumbing,
      electrical: req.body.electrical,
      publicRelations: req.body.publicRelations,
      marketing: req.body.marketing,
      fundRaising: req.body.fundRaising,
      programming: req.body.programming,
      sales: req.body.sales,
      teaching: req.body.teaching,
    };
      db.Member.update(data, {
          where: {
            id: req.user.id
          },
          returning: true,
          plain: true
        })
        .then(function (result) {
          console.log(result);
        });
    });

  app.post(
    '/api/signin',
    passport.authenticate('local-signin', {
      failWithError: true
    }),
    (req, res, next) => {
      res.status(200).send({
        redirectTo: '/private'
      });
    },
    (err, req, res, next) => {
      console.log(err);
      res.status(500).send(err);
    });

  // route loads private.handlebars
  app.get("/private", isLoggedIn, function (req, res) {
    db.Opportunity.findAll({}).then(function (DbOpporunities) {

      var handlebarsData = {
        formData: {
          formName: "My Profile",
          formAction: "update",
          buttonName: "Update",
          deactivateButton: '<button id="deactivate" data-id="' + req.user.id + '" class="btn btn-primary btn-xl text-uppercase" value="deactivate">Deactivate</button>',
          usernameReadOnly: 'readonly',
          newEmail: req.user.email,
          emailFocus: req.user.email,
          newPassword: "•••••••••",
          passwordFocus: "•••••••••",
          lastName: req.user.last_name,
          lastNameFocus: req.user.last_name,
          firstName: req.user.first_name,
          firstNameFocus: req.user.first_name,
          phone: req.user.phone,
          phoneFocus: req.user.phone,
          selectInOrOut: req.user.inOrOut,
          cooking: req.user.cooking ? "checked" : "",
          gardening: req.user.gardening ? "checked" : "",
          painting: req.user.painting ? "checked" : "",
          carpentry: req.user.carpentry ? "checked" : "",
          plumbing: req.user.plumbing ? "checked" : "",
          electrical: req.user.electrical ? "checked" : "",
          publicRelations: req.user.publicRelations ? "checked" : "",
          marketing: req.user.marketing ? "checked" : "",
          fundRaising: req.user.fundRaising ? "checked" : "",
          programming: req.user.programming ? "checked" : "",
          sales: req.user.sales ? "checked" : "",
          teaching: req.user.teaching ? "checked" : "",
        },
        opportunityData: {
          opportunities: DbOpporunities,
        }
      };

      res.render(path.join(__dirname, "../views/private.handlebars"), handlebarsData);
      //res.json(DbOpporunities);
    });
  });

  // new_opportunities route loads new_opportunities.handlebars
  app.get("/new_opportunities", isLoggedIn, function (req, res) {
    res.render(path.join(__dirname, "../views/new_opportunities.handlebars"));
  });

  app.post('/api/new_opportunities', isLoggedIn, function (req, res) {
    db.Opportunity.create(req.body).then(function (dbOpportunity) {
      if (!dbOpportunity) {
        res.status(500).send("unable to create new event");
      }
      if (dbOpportunity) {
        res.status(200).send({
          redirectTo: '/private'
        });
      }
    });
  });

  app.post('/api/register/:id', isLoggedIn, function (req, res) {
    newMemberOpportunity = {
      MemberId: req.user.id,
      OpportunityId: parseInt(req.params.id)
    };

    db.Member.findOne({
      where: {
        id: req.user.id
      }
    }).then(function (member) {
      db.Opportunity.findAll({
        where: {
          id: parseInt(req.params.id)
        }
      }).then(function (opportunity) {
        member.addOpportunities(opportunity);
      });
    });
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