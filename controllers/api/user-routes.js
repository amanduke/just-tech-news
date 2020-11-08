const sequelize = require('../config/connection');
const { User } = require('../models');

test('Check for user validation', async () => {
  const user = {
    username: 'amanduke',
    email: 'amanduke@gmail.com',
    password: 'password123'
  };
  const newUser = User.build(user);
  const validatedUser = await newUser.validate();
  console.log(validatedUser);
  return expect(validatedUser).toBeDefined();
});

test('Creates an instance of the User model', () => {
  const user = {
    username: 'amanduke',
    email: 'amanduke@gmail.com',
    password: 'password123'
  };
  const newUser = User.build(user);

  return expect(newUser).toBeInstanceOf(User);
});
