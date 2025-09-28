import bcrypt from "bcryptjs";
import { generateToken } from "../helpers/generateToken.js";
import { User } from "../models/userModel.js";

export const registerUserService = async ({ name, email, password, role }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) return null; // email exists

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashed, role: role || "user" });

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  };
};

export const authUserService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return null; // invalid login
  }

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  };
};
