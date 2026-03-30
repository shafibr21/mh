import { AuthService } from "./auth.service";
import { CatchAsync } from "../../utils/CatchAsync";

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await AuthService.loginUser(email, password);
  res.json({ success: true, data: result });
};

const getProfile = async (req, res) => {
  const user = req.user;
  res.json({ success: true, data: user });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  const result = await AuthService.registerUser(name, email, password);
  res.json({ success: true, data: result });
}

export const AuthController = {
  login: CatchAsync(login),
  getProfile: CatchAsync(getProfile),
  register: CatchAsync(register),
};
