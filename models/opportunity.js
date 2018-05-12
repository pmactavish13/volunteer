module.exports = function (sequelize, DataTypes) {
  var Opportunity = sequelize.define("Opportunity", {
    opportunity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Opportunity
};