import { Schema, model } from "mongoose";
import { IUser, UserMethods, UserModels } from "./users.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const usersSchema = new Schema<IUser, UserModels, UserMethods>({
  userId: {
    type: Number,
    required: [true, "User ID is Required"],
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "User Name is Required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    trim: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, "First Name is Required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is Required"],
      trim: true,
    },
  },
  age: { type: Number, required: [true, "Age is Required"], trim: true },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    required: [true, "Active Status is Required"],
    trim: true,
  },
  hobbies: {
    type: [String],
    required: [true, "Hobbies is Required"],
    trim: true,
  },
  address: {
    street: {
      type: String,
      required: [true, "Street is Required"],
      trim: true,
    },
    city: { type: String, required: [true, "City is Required"], trim: true },
    country: {
      type: String,
      required: [true, "Country is Required"],
      trim: true,
    },
    order: {
      productName: {
        type: String,
        required: [true, "Product Name is Required"],
        trim: true,
      },
      price: {
        type: Number,
        required: [true, "Price is Required"],
        trim: true,
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is Required"],
        trim: true,
      },
    },
  },
});

usersSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_sal_rounds)
  );
  next();
});

usersSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

usersSchema.methods.isUserExist = async function (id: number) {
  const existingUser = await UserModel.findOne({ id });
  return existingUser;
};

export const UserModel = model<IUser, UserModels>("User", usersSchema);
