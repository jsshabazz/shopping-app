const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Cart model
class Cart extends Model {}

// create fields/columns for Cart model
Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    
  //🔑 We want a Cart model to be the joining table (or through table, in Sequelize terms) between products and users, 
  //so we create foreign key columns for both. 
  //See the following code for an example:
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        //need to place on both the table and the relationship
        unique: false
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        //need to place on both the table and the relationship
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Cart'
  }
);

module.exports = Cart;
