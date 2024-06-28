// controllers/userController.js
import User from "../models/User.js";

// Create a new user with form data
export const createUser = async (req, res) => {
  const { username, email, password, github, linkedin, contactNo, userImage } =
    req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({
      username,
      email,
      password,
      github,
      linkedin,
      contactNo,
      userImage,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Authenticate user
export const getUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json(user);
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get user form data
export const getUserFormData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update user form data
export const updateUserFormData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { github, linkedin, contactNo, userImage } = req.body;
    user.github = github || user.github;
    user.linkedin = linkedin || user.linkedin;
    user.contactNo = contactNo || user.contactNo;
    user.userImage = userImage || user.userImage;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete user form data
export const deleteUserFormData = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User form data deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
