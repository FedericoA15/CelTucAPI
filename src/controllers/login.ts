import { Request, Response } from "express";
import { getUser } from "../services/user";
import { sign } from "jsonwebtoken";
import { comparePassword } from "../utils/password";

let secretKey: any = process.env.SECRET_KEY;

/**
 * Login user
 * @param req - request object
 * @param res - response object
 */
const login = async (req: Request, res: Response) => {
  try {
    const user = await getUser({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isValidPassword = await comparePassword(
      req.body.password,
      user.password
    );

    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const payload = { id: user._id };
    const token = sign(payload, secretKey, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving documents" });
  }
};

export { login };
