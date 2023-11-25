import { Schema, model } from "mongoose";
import { IUsers, UserModel } from "./users.interface";
import bcrypt from "bcrypt";
import config from "../../config";

// User Schema Structure
const userSchema = new Schema<IUsers>({
  userId: {
    type: Number,
    required: [true, "User ID is required"],
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
  },
  age: { type: Number, required: [true, "Age is required"], trim: true },
  email: { type: String, required: [true, "Email is required"], trim: true },
  isActive: {
    type: Boolean,
    required: [true, "isActive is required"],
    trim: true,
  },
  hobbies: {
    type: [String],
    required: [true, "Hobbies are required"],
    trim: true,
  },
  address: {
    street: {
      type: String,
      required: [true, "Street is required"],
      trim: true,
    },
    city: { type: String, required: [true, "City is required"], trim: true },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
  },
  orders: [
    {
      productName: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
      },
      price: {
        type: Number,
        required: [true, "Price is required"],
        trim: true,
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        trim: true,
      },
    },
  ],
});

//middleware for password hashing
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_sal_rounds)
  );
  next();
});

//Delete password field
userSchema.methods.toJSON = function () {
  const Obj = this.toObject();
  delete Obj.password;
  return Obj;
};

//Use static method
userSchema.statics.isUserExists = async function (userId: number | string) {
  const existingUser = await user.findOne({ userId });
  return existingUser;
};

//Create model
export const user = model<IUsers, UserModel>("user", userSchema);
