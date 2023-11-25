import IUser from "./users.interface";
import { UserModel } from "./users.model";

const createUsersIntoDB=async(user:IUser)=>{
  const result=  await UserModel.create(user)

  return result
}

const getAllUsersFromDB = async()=>{
    const result=await UserModel.find()
    return result
}

const getSingleUserFromDB = async(id:any)=>{
    const result=await UserModel.findOne({id:id})
    return result
}

export const UserServices={
    createUsersIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB
}