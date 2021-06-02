// To connect to the config/connection folder
const sequelize = require('../config/connection');
// To connect to the models folder
const { Product, User, Cart  } = require('../models');

// To make the json flies available for use in JS
const prodSeedData = require('./prodSeedData.json');
const userSeedData = require('./userSeedData.json');

// Here I want to return a promise to invoke an asynchronouse responce
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
console.log(users);
    const products = await Product.bulkCreate(
     prodSeedData
    );
  console.log(products);
// Here, I want to create a cart for a specific user
        const cartArr = [];
  for (const { id } of users) {
    const newCart = await Cart.create({
      //Solve - how do you create mutiple carts for the same user that gets assigned 5 random products each
      user_id: id,
      product_id: products[0].id
    });
    cartArr.push(newCart);
  }
//write a funtion that takes in an array of numbers and returns a new array with each number doubled

// I first would create my array of numbers from 0 through 9.
// Once the array is written I create a new array that doubles each new number in the array.
// [0,1,2,3,4,5,6,7,8,9]
// [0,2,4,6,8,10,12,14,18]
// muiltple 0*0, 2*2, 3*3, 4*4, 5*5, 6*6, 7*7, 8*8, 9*9
// step one creat an empty array
//step two - iterated through the inbput array - 
// steop three - while examining each number nultiply by 2
//step three - push product to new array
//set four - once fo loop concludes return new array

// var output = 0;
//     for(var i =0; i <= number; i++){
//         output = output = number
//     }
//     return output 
// }

  const newUserArr = [];
  for(var i = 0; i < users.length; i++ {
    newUserArr.push(users[i].get({ plain: true }));
  };
  console.log(newUserArr);

  const newProductsArr = [];
  for(var i = 0; i < users.length; i++ {
    newProductsArr.push(products[i].get({ plain: true }));
  };
  console.log(newUserArr);
//   console.log(newCart);
  process.exit(0);
};

seedDatabase();
