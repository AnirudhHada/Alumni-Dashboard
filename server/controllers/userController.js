const User = require('../models/userModal');

// Add a new user
const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'User added successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error adding user' });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(400).send({ message: 'Error getting users' });
  }
};

// Get user by scholar no (POST)
const getUserByScholarNo = async (req, res) => {
  try {
    const { scholarNo } = req.body;
    const user = await User.findOne({ scholarNo });
    if (!user) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send({ message: 'Error getting user' });
  }
};

// Edit user (POST)
const editUser = async (req, res) => {
  try {
    const { scholarNo, ...updates } = req.body;
    const user = await User.findOneAndUpdate({ scholarNo }, updates, { new: true });
    if (!user) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send({ message: 'Error editing user' });
  }
};

// Delete user by scholar no (POST)
const deleteUser = async (req, res) => {
  try {
    const { scholarNo } = req.body;
    await User.findOneAndDelete({ scholarNo });
    res.send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error deleting user' });
  }
};
// Export all functions
module.exports = {
  addUser,
  getAllUsers,
  getUserByScholarNo,
  editUser,
  deleteUser
};