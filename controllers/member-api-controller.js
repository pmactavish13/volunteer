module.exports = function (app, passport) {
    // add new data - new member
    // app.post("/new_members", function (req, res) {
    //     db.members.create({
    //         newMember: req.body()
    //     }).then(function (dbMembers) {
    //         res.json(dbMembers)
    //     });
    // });

    app.post('/new_members', passport.authenticate('local-signup', {
        successRedirect: '/events_sign_up',
        failureRedirect: '/new_members'
    }));
};