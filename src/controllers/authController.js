const UserDatabaseRepository = require("../repositories/userDatabaseRepository");
const { comparePassword } = require("../services/hashingService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserDatabaseRepository.getUserByEmail(email);

    if (!existingUser) {
      return res.status(404).send("User not found");
    }

    const match = await comparePassword(password, existingUser.password);

    if (!match) {
      return res.status(400).send("Invalid credentials");
    }

    req.session.user = {
      id: existingUser._id,
      email: existingUser.email,
    };

    res.send(existingUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const signup = async (req, res) => {
  try {
    const data = req.body;
    const existingUser = await UserDatabaseRepository.getUserByEmail(
      data.email
    );

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const newUser = await UserDatabaseRepository.createUser(data);

    req.session.user = {
      id: newUser._id,
      email: newUser.email,
    };

    res.send(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
};

const changepassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const existingUser = await UserDatabaseRepository.getUserByEmail(email);

    if (!existingUser) {
      return res.status(404).send("User not found");
    }

    const match = await comparePassword(oldPassword, existingUser.password);

    if (!match) {
      return res.status(400).send("Invalid credentials");
    }

    existingUser.password = newPassword;
    await UserDatabaseRepository.updateUser(existingUser._id, existingUser);

    res.send("Password changed successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Could not log out");
    }
    res.send("Logged out successfully");
  });
};

module.exports = { login, signup, changepassword, logout };
