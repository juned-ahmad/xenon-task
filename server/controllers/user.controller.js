import { Contact } from "../models/contact.model.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json("email & password is required");
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      res.status(400).json("User with this email already exists !!");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hashedPassword });
    const createdUser = await User.findById(user._id).select("-password");

    return res.status(200).json({
      message: "User has been created successfully",
      user: createdUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json("email & password is required");
    }

    const user = await User.findOne({ email });

    if (!email) {
      res.status(400).json("User does not exist!");
    } else {
      const validatePassword = await bcrypt.compare(password, user.password);
      if (!validatePassword) {
        res.status(400).json("Invalid User Credentials!");
      } else {
        const loggedInUser = await User.findById(user._id).select("-password");
        res.status(200).json({
          message: "User logged in successfully",
          user: loggedInUser,
        });
        req.session.user = loggedInUser._id;
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const LogoutUser = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed!!" });
      }
      res.clearCookie("connect.sid");
      return res.json({ message: "Logout successful" });
    });
  } catch (error) {}
};

const ContactUser = async (req, res) => {
  try {
    const { fullname, email, mobile, message } = req.body;

    if (!email || !mobile || !fullname || !message) {
      res.status(400).json("Fullname, email, mobile & message is required");
    }

    const contactForm = await Contact.create({
      fullname,
      email,
      mobile,
      message,
    });

    res.status(200).json({
      message: "Form has been submitted succesfully!",
      form: contactForm,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { registerUser, LoginUser, LogoutUser, ContactUser };
