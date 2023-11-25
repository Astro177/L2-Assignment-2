import { Request, Response} from "express";
import { UserServices } from "./users.service";
import { userValidationSchema } from "./user.validation";

// post a user 
const createUsers=async(req:Request,res:Response)=>{
  try {

    const {user:userData}=req.body

    const zodValidatedData= userValidationSchema.parse(userData)
     
    const result=await UserServices.createUsersIntoDB(zodValidatedData);

    res.status(200).json({
        success:true,
        message:"User created successfully!",
        data:result

    })
  } catch (error:any) {
    res.status(500).json({
        success:false,
        message:"Something went wrong!",
        error:error.issues

    })
  }
}

// get all user 
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

// get a single user
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