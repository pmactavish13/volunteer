module.exports = function (sequelize, DataTypes) {
  var Volunteer = sequelize.define("Volunteer", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    event_name: {
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
    start_date: {
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

  // Associating participation in and event (volunteer) with event and member
  Volunteer.associate = function (models) {

    Volunteer.belongsTo(models.Member, {
      foreignKey: {
        allowNull: false
      }
    });
    Volunteer.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Volunteer;
};