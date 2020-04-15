'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductTematica = sequelize.define('ProductTematica', {
    ProductId: DataTypes.INTEGER,
    TematicaId: DataTypes.INTEGER
  }, {});
  ProductTematica.associate = function(models) {
    // associations can be defined here
  };
  return ProductTematica;
};


