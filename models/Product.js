const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Product model
class Product extends Model {}

// create fields/columns for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Product_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Product_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Product_image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
);

module.exports = Product;
