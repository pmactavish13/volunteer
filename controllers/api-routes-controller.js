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
    
    console.log(req.query);

    let searchFilter = req.query.skillsSearch || []
    
    if (typeof searchFilter === 'string')
      searchFilter = [searchFilter]

    const filter = searchFilter.reduce( (acc, keyname) => {
      if (['Inside', 'Outside'].includes(keyname))
        acc['opportunity_inOrOut'] =  acc['opportunity_inOrOut'] ? 'Both': keyname
      else
        acc[keyname] = true
      return acc;
    }, {})
    console.log(filter)
    db.Opportunity.findAll({
      where: filter
    }).then(function (DbOpporunities) {

      var handlebarsData = {
        formData: {
          newEmail: req.user.email,
          newPassword: req.user.password,
          lastName: req.user.last_name,
          firstName: req.user.first_name,
          phone: req.user.phone,
          photoUrl: req.user.photoUrl,
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

  app.get("/myEvents", isLoggedIn, function(req, res) {
    db.Opportunity.findAll({
      include: {
        model: db.Member,
        where: {
          id: req.user.id
        }
      }
    }).then( opportunities => {
      const handlebarsData = {
        opportunityData: {
          opportunities
        }
      }
      console.log(handlebarsData)
      res.render(path.join(__dirname, "../views/my_events.handlebars"), handlebarsData);
    })
    
  })

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
        res.status(200).send({ redirectTo: '/private' });
      }
    });
  });

  app.post('/api/register/:id', isLoggedIn, function (req, res) {
    newMemberOpportunity = {
      MemberId: req.user.id,
      OpportunityId: parseInt(req.params.id)
    };
    console.log(newMemberOpportunity);

    db.Member.findOne({ where: { id: req.user.id } }).then(function (member) {
      db.Opportunity.findAll({ where: { id: parseInt(req.params.id) } }).then(function (opportunity) {
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

  app.post('/api/findAllMy/', isLoggedIn, function (req, res) {
    console.log(req.body)
    req.body.opportunity_inOrOut = req.body.inOrOut
    delete req.body.inOrOut;
    db.Opportunity.findAll({ 
      where: req.body
    }).then(function (DbOpporunities) {
        var handlebarsData = {
          formData: {
            newEmail: req.user.email,
            newPassword: req.user.password,
            lastName: req.user.last_name,
            firstName: req.user.first_name,
            phone: req.user.phone,
            photoUrl: req.user.photoUrl,
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

}