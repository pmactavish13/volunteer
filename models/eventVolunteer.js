/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventVolunteers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    eventId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'eventId'
    },
    volunteerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'volunteerId'
    }
  }, {
    tableName: 'eventVolunteers'
  });
};
