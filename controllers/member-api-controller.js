var db = require("../models");

module.exports = function (app, passport) {

    app.post('/api/member', passport.authenticate('local-signup', {
        successRedirect: '/opportunities_sign_up',
        failureRedirect: '/new_members',
        failureFlash: true,
    }));

    app.post('/api/login', passport.authenticate('local-signin', {
        successRedirect: '/opportunities_sign_up',
        failureRedirect: '/login',
        failureFlash: true,
    }));

    // get all members
    // app.get("/api/member", isLoggedIn, function (req, res) {
    //     db.Member.findAll({
    //         attributes: {
    //             exclude: ['password']
    //         },
    //         include: [db.Opportunity]
    //     }).then(function (members) {
    //         res.json(members);
    //     });
    // });

    // get specific member
    app.get("/api/member/:id", isLoggedIn, function (req, res) {
        lookupId = !req.params.id ? req.user.id : req.params.id;
        db.Member.findOne({
            attributes: {
                exclude: ['password']
            },
            where: {
                id: lookupId
            },
            include: [db.Opportunity]
        }).then(function (member) {
            res.json(member);
        });
    });

    app.delete("/api/member/:id", isLoggedIn, function (req, res) {
        db.Member.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (member) {
            res.json(member);
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
};
