'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    votes: DataTypes.INTEGER
  }, {});
  Candidate.associate = function(models) {
    // associations can be defined here
  };
  return Candidate;
};