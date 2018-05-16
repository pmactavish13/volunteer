var db = require("../models");

module.exports = function (app) {
// add new data - new member
app.post("/new_members", function (req, res) {
    db.members.create({
        newMember: req.body()
    }).then(function (dbMembers) {
        res.json(dbMembers)
    });
});
}