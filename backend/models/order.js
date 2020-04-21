'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    deliveryDate: DataTypes.DATE,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User);
    Order.belongsToMany(models.Product,{
      through:models.OrderProduct
    })
  };
  return Order;
};


