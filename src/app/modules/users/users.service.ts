import { IUser } from "./users.interface";
import { UserModel } from "./users.model";

const createUsersIntoDB = async (userData: IUser) => {
  const user = new UserModel(userData);

  const result = await UserModel.create(userData);

  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 }
  );
  return result;
};

const getSingleUserFromDB = async (id: any) => {
  const result = await UserModel.findOne(
    { userId: id },
    { password: 0, isDeleted: 0 }
  );
  return result;
};

export const UserServices = {
  createUsersIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
