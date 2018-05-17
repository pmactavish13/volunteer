var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  var Opportunity = sequelize.define("Opportunity", {
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
    opportunity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    organization_phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    organization_eMail: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
    },
    opportunity_photo_Url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    organization_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organization_city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    organization_state: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    organization_zip: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    organization_frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    opportunity_date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    opportunity_frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    opportunity_start_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    opportunity_end_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    opportunity_inOrOut: {
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

  // Associating member with opportunity
  // Opportunity.associate = function (models) {
  //   Opportunity.belongsToMany(models.Member)
  // };
  return Opportunity;
};

