import express  from "express";
import { UserControllers } from "./users.controller";

const router=express.Router();

router.post("/users",UserControllers.createUsers)

router.get("/users",UserControllers.getAllUsers)

router.get("/users/:userId",UserControllers.getSingleUser)


export const UserRoutes=router