import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../users/user.model";
import AppError from "../../errorHelper/AppError";

const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new AppError(401, "Invalid credentials");

  if (!user.password) throw new AppError(401, "Invalid credentials");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new AppError(401, "Invalid credentials");

  const jwtAccessSecret =
    process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET;
  if (!jwtAccessSecret) {
    throw new AppError(
      500,
      "JWT_ACCESS_SECRET (or JWT_SECRET) environment variable is not set"
    );
  }

  const accessToken = jwt.sign(
    { userId: user._id },
    jwtAccessSecret,
    { expiresIn: "7d" }
  );

  const { password: _, ...safeUser } = user.toObject();

  return { user: safeUser, accessToken };
};

const registerUser = async (name, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError(400, "Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({ name, email, password: hashedPassword })
  const { password: _, ...safeUser } = user.toObject()
  return safeUser
  };

export const AuthService = {
  loginUser,
  registerUser,
};
