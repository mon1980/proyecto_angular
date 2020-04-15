'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    TematicaId: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    image_path: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
     // associations can be defined here
    Product.belongsToMany(models.Tematica, {
      through: models.ProductTematica
    });
    Product.belongsToMany(models.Order, {
      through: models.OrderProduct
    })
  };
  return Product;
};





