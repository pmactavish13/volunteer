var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    organization_name: {
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
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    eMail: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
    },
    event_photo_Url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING(5),
      allowNull: false,
  },
    frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    event_frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    start_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    end_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    inOrOut: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    volunteers_needed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    cooking: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    gardening: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    painting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    carpentry: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    plumbing: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    electrical: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    publicRelations: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    marketing: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fundRaising: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    programming: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    sales: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    teaching: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });

  // Associating member with event
 Event.associate = function (models) {
    Event.hasMany(models.Member)
  };
  return Event;
};
    
