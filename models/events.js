/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    evenName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'evenName'
    },
    eventHostId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'eventHostID'
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'location'
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
    tableName: 'events'
  });
};
