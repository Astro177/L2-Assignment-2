import { IUser } from "./users.interface";
import { UserModel } from "./users.model";

const createUsersIntoDB = async (userData: IUser) => {
  const user = new UserModel(userData);

  // if(!user.isUserExist){
  //     throw new Error({
  //         "success": false,
  //         "message": "User not found",
  //         "error": {
  //             "code": 404,
  //             "description": "User not found!"
  //         }
  //     })
  // }

  const result = await UserModel.create(userData);

  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (id: any) => {
  const result = await UserModel.findOne({ id: id });
  return result;
};

export const UserServices = {
  createUsersIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
