const { faker } = require('@faker-js/faker');
const User = require('../models/userModel');
const { hashPassword } = require('../services/hashingService');

const createUsers = async (numberOfUsers = 1, overrides = {}) => {
    const users = [];

    for (let i = 0; i < numberOfUsers; i++) {
        const password = faker.internet.password();
        const userData = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: await hashPassword(password),
            isAdmin: false,
            ...overrides
        };

        users.push(new User(userData));
    }

    await User.insertMany(users);
};

module.exports = createUsers;
