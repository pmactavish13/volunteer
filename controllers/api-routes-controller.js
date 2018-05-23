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

  // app.put(
  //   '/api/user',
  //   isLoggedIn,
  //   async (req, res) => {
  //     const id = req.user;
  //     const data = req.body;
  //     const member = await db.Member.findById(id);
  //     await member.update(data);
  //     res.status(200).send();
  //   });

  // route loads private.handlebars
  app.get("/private", isLoggedIn, function (req, res) {
    console.log(req.user);
    db.Opportunity.findAll({}).then(function (DbOpporunities) {

      var handlebarsData = {
        formData: {
          newEmail: req.user.email,
          newPassword: req.user.password,
          lastName: req.user.last_name,
          firstName: req.user.first_name,
          phone: req.user.phone,
          photoUrl: req.user.photoUrl,
          selectInOrOut: req.user.inOrOut ,
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
    console.log(req.body);
    db.Opportunity.create(req.body).then(function (dbOpportunity) {
      if (!dbOpportunity) {
        res.status(500).send("unable to create new event");
      }
      if (dbOpportunity) {
        res.status(200).send({redirectTo: '/private'});
      }
    });
  });

  app.post('/api/register/:id', isLoggedIn, function (req, res) {
    newMemberOpportunity = {
      MemberId: req.user.id,
      OpportunityId: parseInt(req.params.id)
    };
    console.log(newMemberOpportunity);

    db.Member.findOne({ where: {id: req.user.id} }).then(function(member) {
      db.Opportunity.findAll({where: {id: parseInt(req.params.id)}}).then(function(opportunity){
        member.addOpportunities(opportunity);
      });
    });
    // db.MemberOpportunity.create(newMemberOpportunity).then(function (dbOpportunity) {
    //   if (!dbOpportunity) {
    //     res.status(500).send("unable to create new registration");
    //   }
    //   if (dbOpportunity) {
    //     res.status(200).send({redirectTo: '/private'});
    //   }
    // });
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