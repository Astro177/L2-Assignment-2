import { Request, Response} from "express";
import { UserServices } from "./users.service";

const createUsers=async(req:Request,res:Response)=>{
  try {
    const {user:userData}=req.body
    const result=await UserServices.createUsersIntoDB(userData);

    res.status(200).json({
        success:true,
        message:"User created successfully!",
        data:result

    })
  } catch (error) {
    console.log(error);
  }
}
const getAllUsers=async(req:Request,res:Response)=>{
  try {
    
    const result=await UserServices.getAllUsersFromDB();

    res.status(200).json({
        success:true,
        message:"Users fetched successfully!",
        data:result

    })
  } catch (error) {
    console.log(error);
  }
}

const getSingleUser=async(req:Request,res:Response)=>{
  try {
    const userId=req.params.userId;
    const result=await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
        success:true,
        message:"User fetched successfully!",
        data:result

    })
  } catch (error) {
    console.log(error);
  }
}

export const UserControllers={
    createUsers,
    getAllUsers,
    getSingleUser
}