module.exports = function (app, passport) {
    // add new data - new member
    // app.post("/api/new_members", function (req, res) {
    //     db.Member.create(req.body)
    //     .then(function (dbMember) {
    //         res.json(dbMember)
    //     });
    // });


    app.post('/api/new_members', passport.authenticate('local-signup', {
        successRedirect: '/events_sign_up',
        failureRedirect: '/new_members'
    }));
};
