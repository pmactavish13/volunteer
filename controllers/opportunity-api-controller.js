
//var express = require("express");
var db = require("../models");

module.exports = function (app) {
    // add new data - new member
    app.post("/api/new_opportunities", function (req, res) {
        db.opportunities.create({
            newOpportunities: req.body()
        }).then(function (dbOpportunities) {
            res.json(dbOpportunities)
        });
    });
}

//    app.post('/login', passport.authenticate('local-signin', {
//     successRedirect: '/opportunities_sign_up',
//     failureRedirect: '/login'
// }));

// add new data - new member
// app.post("/api/new_members", function (req, res) {
//     db.Member.create(req.body)
//         .then(function (dbMember) {
//             res.json(dbMember)
//         });
// });


// app.post("/api/new_opportunities", function (req, res) {
//     db.opportunities.create({
//         newOpportunities: req.body()
//     }).then(function (dbOpportunities) {
//         res.json(dbOpportunities)
//     });
// });


// app.post('/api/new_members', passport.authenticate('local-signup', {
//     successRedirect: '/opportunities_sign_up',
//     failureRedirect: '/new_members'
// }));

// app.post('/login', passport.authenticate('local-signin', {
//     successRedirect: '/events_sign_up',
//     failureRedirect: '/login'
// }));

// }
// module.exports = function (app, passport) {
//     // add new data - new member
//     // app.post("/api/new_members", function (req, res) {
//     //     db.Member.create(req.body)
//     //     .then(function (dbMember) {
//     //         res.json(dbMember)
//     //     });
//     // });






