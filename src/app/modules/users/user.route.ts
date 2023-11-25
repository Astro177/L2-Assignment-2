import express from "express";
import { userControllerData } from "./users.controller";
const router = express.Router();

//Create user
router.post("/", userControllerData.createUserData);

//Get all user data
router.get("/", userControllerData.getAllUserData);

//Get single user
router.get("/:userId", userControllerData.getSingleUserData);

//Update user router
router.put("/:userId", userControllerData.updateUserData);

//Delete user
router.delete("/:userId", userControllerData.deleteUserData);

//Insert order user collection
router.put("/:userId/orders", userControllerData.insertOrderCollection);

//Get user order Data
router.get("/:userId/orders", userControllerData.getUserOrderData);

//User order price calculate
router.get(
  "/:userId/orders/total-price",
  userControllerData.CalculateAllUserOrder
);
//Export routes
export const userRoutes = router;
