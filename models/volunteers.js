/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('volunteers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'firstName'
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'lastName'
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'phone'
    },
    photoUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'photoURL'
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'password'
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'address'
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'city'
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'state'
    },
    zip: {
      type: DataTypes.STRING(5),
      allowNull: true,
      field: 'zip'
    }
  }, {
    tableName: 'volunteers'
  });
};
