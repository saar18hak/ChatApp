const UserDatabaseRepository = require("../repositories/userDatabaseRepository");

const readUser = async (req, res) => {
  try {
    const users = await UserDatabaseRepository.getAllUsers();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const readUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserDatabaseRepository.getUserById(id);
    
    if (!user) {
      return res.status(404).send("User not found");
    }
    
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const readUserByEmail = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await UserDatabaseRepository.getUserByEmail(email);
    
    if (!user) {
      return res.status(404).send("User not found");
    }
    
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const existingUser = await UserDatabaseRepository.getUserByEmail(data.email);
    
    if (existingUser) {
      return res.status(400).send("User already exists");
    }
    
    const newUser = await UserDatabaseRepository.createUser(data);
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    
    const existingUser = await UserDatabaseRepository.getUserById(id);
    
    if (!existingUser) {
      return res.status(404).send("User not found");
    }
    
    const updatedUser = await UserDatabaseRepository.updateUser(id, data);
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const existingUser = await UserDatabaseRepository.getUserById(id);
    
    if (!existingUser) {
      return res.status(404).send("User not found");
    }
    
    await UserDatabaseRepository.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  readUser,
  readUserById,
  readUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
