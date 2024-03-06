import { Request, Response } from "express";
import { hashPassword } from "../utils/password";
import { postUser } from "../services/user";


/**
 * Creates a new user in the database
 * @param req - The request object
 * @param res - The response object
 */
const createUser = async (req: Request, res: Response) => {
  try {
    const hashedPassword: string = await hashPassword(req.body.password);
    const newUser = postUser(req.body, hashedPassword)
    res.status(200).json({
      newUser,
    });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving documents" });
  }
};

export { createUser };


