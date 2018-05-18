var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      // allowNull: false,
      validate: {
        len: [1]
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    member_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    member_city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    member_state: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    member_zip: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    member_phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    member_photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
    },
    member_frequency_preference: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    member_inOrOut: {
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
  // Member.associate = function (models) {
  //   Member.belongsToMany(db.Opportunity, {through: 'MemberOpportunity'})
  // };
  return Member;
};