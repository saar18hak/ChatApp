const createUsers = require('../factories/userFactory');
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const {hashPassword}=require('../services/hashingService')
const seedUsers = async () => {
    try{
        await mongoose.connection.dropDatabase();
        await createUsers(10, { password: await hashPassword('12345678') });
        await createUsers(1, { 
        firstName: process.env.FIRST_NAME, 
        lastName: process.env.LAST_NAME, 
        email: process.env.EMAIL, 
        password: await hashPassword(process.env.PASSWORD), 
        isAdmin:process.env.VALUE
    });
    console.log("Data is seeded")
    }catch(err){

            console.log(err)
    }
};

module.exports=seedUsers;
