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
// console.log("USERS",users);
    const products = await Product.bulkCreate(
     prodSeedData
    );
  // console.log("PRODUCTS",products);
// Here, I want to create a cart for a specific user
        const cartArr = [];
  for (const { id } of users) {
    //this is a loop that iterates through all our users and gives us each id
    
      //step 1 
      //what : While looking at each  user (id) start a for loop that will run 5 times
      //Why - for each user we will create r5 carts with their user id and a random product id
      //how: With a for loop
      for (let step = 0; step < 5; step++) {
        //Step 2
    //what: Inside the for loop that runs 5 times I will create a cart with the user id
    //why: to generate a cart assosicated with that user
    // how: 
    const newCart = await Cart.create({
      user_id: id,
      //step three: 
      // what assign a random product id to the cart
      // why: so that each user has differnt products
      // how: ???
      
      product_id: products[Math.floor(Math.random() * products.length)].id
    });
      
     
    //step four:
    //add the new cart to the caratArr list
    //push method
    //to havea  collection of all the carts
    cartArr.push(newCart);
  }
  }


  const newUserArr = [];
  for(var i = 0; i < users.length; i++ ){
    newUserArr.push(users[i].get({ plain: true }));
  };
  console.log(newUserArr);

  const newProductsArr = [];
  for(var i = 0; i < users.length; i++ ){
    newProductsArr.push(products[i].get({ plain: true }));
  };
  console.log(newUserArr);
//   console.log(newCart);
  process.exit(0);
};

seedDatabase();
