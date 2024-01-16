import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validate from "../Middlewares/validate.js";

const user_router = express.Router();

//!CREATE USER
user_router.post("/signup", validate, async (req, res) => {
  //*Check if user has already existed
  const { username, password } = req.body;

  const userPresent = await User.findOne({ username });

  if (userPresent) {
    return res.status(400).json({ message: "User already existed" });
  }

  const hashedPwsd = await bcrypt.hash(password, 10);

  const newUser = new User({ username, password: hashedPwsd });
  await newUser.save();

  res.status(200).json({ message: "user registered Successfully" });
});

//! LOGIN USER
user_router.post("/login", validate, async (req, res) => {
  const SRCT_SIGN = "@codeWords$4800H";
  const { username, password } = req.body;

  const userPresent = await User.findOne({ username });

  if (!userPresent) {
    return res.status(400).json({ message: "User Not Found" });
  }

  //*Validate the password
  const isPasswordValid = await bcrypt.compare(password, userPresent.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Username or password is wrong" });
  }

  //*Create Token for varification
  const token = jwt.sign({ id: userPresent._id }, SRCT_SIGN);
  res.json({ token, userID: userPresent._id, username });
});

export default user_router;
