import { registerUserService, authUserService } from "../services/userServices.js";
import { ValidationError } from "../middlewares/errorMiddleware.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    throw new ValidationError("Name, email, and password are required");
  }

  const userData = await registerUserService({ name, email, password, role });
  if (!userData) throw new ValidationError("Email already exists");

  res.status(201).json({ success: true, user: userData });
});

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await authUserService({ email, password });
  if (!user) throw new ValidationError("Invalid email or password");

  res.status(200).json({ success: true, user });
});
