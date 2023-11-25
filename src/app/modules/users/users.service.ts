import { IUsers } from "./users.interface";
import { user } from "./users.model";

//Create a user to database
const createUserFromBD = async (userData: IUsers) => {
  const result = await user.create(userData);
  return result;
};

//Get all user
const getAllUserFromDB = async () => {
  const result = user
    .find()
    .select(
      "userId username fullName age email isActive address hobbies orders"
    );
  return result;
};

//Get single user
const getSingleUserFromDB = async (userId: number | string) => {
  const userExists = await user.isUserExists(userId);
  if (!userExists) {
    throw new Error("User not found");
  }
  const result = user.findOne({ userId });
  return result;
};

//Update single user
const updateUserFromDB = async (userId: number | string, userData: IUsers) => {
  const userExists = await user.isUserExists(userId);
  if (!userExists) {
    throw new Error("User not found");
  }
  const result = user.findOneAndUpdate(
    { userId },
    {
      $set: userData,
    },
    { new: true, runValidators: true }
  );
  return result;
};

//Delete single user
const DeleteUserFromDB = async (userId: number | string) => {
  const userExists = await user.isUserExists(userId);
  if (!userExists) {
    throw new Error("User not found");
  }
  const result = user.findOneAndDelete({ userId });
  return result;
};

//Insert Order to user data
const insertOrderToUserFromDB = async (
  userId: number | string,
  orderData: {
    productName: string;
    price: number;
    quantity: number;
  }
) => {
  const userExists = await user.isUserExists(userId);
  if (!userExists) {
    throw new Error("User not found");
  }
  const { productName, price, quantity } = orderData;
  const result = user.findOneAndUpdate(
    { userId, orders: { $exists: true } },
    { $push: { orders: { productName, price, quantity } } },
    { upsert: true, new: true }
  );
  return result;
};

//Get user all orders
const getAllOrderToUserFromDB = async (userId: number | string) => {
  const userExists = await user.isUserExists(userId);
  if (!userExists) {
    throw new Error("User not found ");
  }
  const result = user.findOne({ userId }).select("orders");
  return result;
};

//User orders total price
const calculateAllOrderFromDB = async (userId: number | string) => {
  const userExists = await user.isUserExists(userId);
  if (!userExists) {
    throw new Error("User not found ");
  }
  const result = await user.findOne({ userId }).select("orders");

  const totalPrice = (result?.orders || []).reduce(
    (total: number, order: { price?: number }) => {
      return total + (order.price || 0);
    },
    0
  );
  return totalPrice;
};

//Service function export
export const userServicesData = {
  createUserFromBD,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  DeleteUserFromDB,
  insertOrderToUserFromDB,
  getAllOrderToUserFromDB,
  calculateAllOrderFromDB,
};
