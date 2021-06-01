const sequelize = require('../config/connection');
const { Product, User, Cart  } = require('../models');

const prodSeedData = require('./prodSeedData.json');
const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of User) {
    const newCart = await Cart.create({
      user_id: id,
    });
  }

  for (const product of prodSeedData) {
    const newProduct = await Product.create({
      ...product,
      // Attach a random reader ID to each book
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
