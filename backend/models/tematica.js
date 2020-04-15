'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tematica = sequelize.define('Tematica', {
    name: DataTypes.STRING
  }, {});
  Tematica.associate = function(models) {
    // associations can be defined here
    Tematica.belongsToMany(models.Product,{
    through:models.ProductTematica,
    onDelete: 'cascade' 
  })
};
  return Tematica;
};


