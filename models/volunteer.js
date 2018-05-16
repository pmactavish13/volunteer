var Sequelize = require('sequelize');

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
    member_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    member_city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    member_state: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    member_zip: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    member_frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        },
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
    member_in_or_our: {
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
  return Event;
};