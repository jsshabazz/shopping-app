const User = require('./User');
const Product = require('./Product');
const Cart = require('./Cart');



// user.belongsToMany(pets, {
//   // Define the third table needed to store the foreign keys
//   //https://sequelize.org/master/manual/assocs.html#-code-foo-belongstomany-bar----through--baz-----code-
//   // 🔑 We associate Products and Users to one another through Carts, as follows:
//   through: {
//     model: user_pets,
//     //field referenced in the association must have a unique constraint placed on it. 
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   //call this whatever you link - related to how the data will be returned (which key)
//   as: 'my_little_darling'
// });

User.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  //https://sequelize.org/master/manual/assocs.html#-code-foo-belongstomany-bar----through--baz-----code-
  // 🔑 We associate Products and Users to one another through Carts, as follows:
  through: {
    model: Cart,
    //field referenced in the association must have a unique constraint placed on it. 
    unique: false
  },
  // Define an alias for when data is retrieved
  //call this whatever you link - related to how the data will be returned (which key)
  as: 'planned_Carts'
});

Product.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Cart,
    //field referenced in the association must have a unique constraint placed on it. 
    unique: false
  },
  // Define an alias for when data is retrieved
  //call this whatever you link - related to how the data will be returned (which key)
  as: 'Product_Users'
});

module.exports = { User, Product, Cart };
