class UserRepository {
    constructor() {
      if (this.constructor === UserRepository) {
        throw new Error("Cannot instantiate an abstract class.");
      }
    }
  
    async createUser(user) {
      throw new Error("Method 'createUser' must be implemented.");
    }
  
    async getUserById(id) {
      throw new Error("Method 'getUserById' must be implemented.");
    }

    async getUserByEmail(email){
      throw new Error("Method getUserByEmail must be implemented");
    }
  
    async updateUser(id, user) {
      throw new Error("Method 'updateUser' must be implemented.");
    }
  
    async deleteUser(id) {
      throw new Error("Method 'deleteUser' must be implemented.");
    }
  
    async getAllUsers() {
      throw new Error("Method 'getAllUsers' must be implemented.");
    }
  }
  
  module.exports = UserRepository;
  