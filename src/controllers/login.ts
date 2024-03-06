import jwt from 'jsonwebtoken';
import { comparePassword } from '../utils/password';
import { getUser } from '../services/user';
import { Request, Response } from 'express';

const secretKey: any = process.env.SECRET_KEY;

/**
 * Login user
 * @param req - objeto de solicitud
 * @param res - objeto de respuesta
 */
const login = async (req: Request, res: Response) => {
  try {
    const user = await getUser({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Email or password invalid" });
    }

    const isValidPassword = await comparePassword(
      req.body.password,
      user.password
    );

    if (!isValidPassword) {
      return res.status(400).json({ message: "Email or password invalid" });
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    res.cookie('authToken', token, { httpOnly: true, secure: true });

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving documents" });
  }
};

export { login };
