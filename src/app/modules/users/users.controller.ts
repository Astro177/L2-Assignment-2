import { Request, Response } from "express";
import { UserServices } from "./users.service";
import { UserValidationSchema } from "./user.validation";

// post a user
const createUsers = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    const validatedData = UserValidationSchema.parse(user);

    const result = await UserServices.createUsersIntoDB(validatedData);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.issues,
    });
  }
};

// get all user
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.issues,
    });
  }
};

// get a single user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.issues,
    });
  }
};

export const UserControllers = {
  createUsers,
  getAllUsers,
  getSingleUser,
};
