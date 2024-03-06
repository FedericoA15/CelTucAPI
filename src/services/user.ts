import UserModel from "../database/schemas/user";
import { User } from "../typings/interfaces";

const getUser = async (filter = {}) => {
  return await UserModel.findOne(filter);
};

const postUser = async (body: User, hashedPassword: string) => {
  const newUser = new UserModel({ ...body, password: hashedPassword });
  return await newUser.save();
}

export { getUser, postUser };
