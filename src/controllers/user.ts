import { Request, Response } from "express";
import { hashPassword } from "../utils/password";
import UserModel from "../database/schemas/user";


/**
 * Creates a new user in the database
 * @param req - The request object
 * @param res - The response object
 */
const postUser = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await hashPassword(req.body.password); 
    const newUser = new UserModel({...req.body, password: hashedPassword }); 
    await newUser.save();
    res.status(200).json({
      newUser,
    });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving documents" });
  }
};

export { postUser };


