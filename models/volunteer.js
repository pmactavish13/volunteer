module.exports = function (sequelize, DataTypes) {
  var Volunteer = sequelize.define("Volunteer", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    opportunity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    member_frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    member_start_date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    member_start_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    member_end_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    member_in_or_out: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
  });

  // Associating participation in and event (volunteer) with opportunity and member
  Volunteer.associate = function (models) {

    Volunteer.belongsTo(models.Member, {
      foreignKey: {
        allowNull: false
      }
    });
    Volunteer.belongsTo(models.Opportunity, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Volunteer;
};