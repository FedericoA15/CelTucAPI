import UserModel from "../database/schemas/user";

const getUser = async (filter = {}) => {
  return await UserModel.findOne(filter);
};

export { getUser };
