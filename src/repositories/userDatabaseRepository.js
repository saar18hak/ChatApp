const UserRepository=require('./userRepository')
const User=require('../models/userModel')

class UserDatabaseRepository extends UserRepository{
    async createUser(user){
        const newUser=new User(user);
        return await newUser.save();
    }
    async getUserById(id){
        return await User.findById(id);
    }
    async getUserByEmail(email){
        return await User.findOne({email:email});
    }
    async updateUser(id ,user){
        return await User.findByIdAndUpdate(id, user,{new:true});
    }
    async deleteUser(id){
        return await User.findByIdAndDelete(id);
    }
    async getAllUsers(){
        return await User.find();
    } 
}

module.exports=new UserDatabaseRepository();