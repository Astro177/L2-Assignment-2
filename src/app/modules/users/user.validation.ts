import { z } from "zod";

const UserNameValidationSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  lastName: z.string({ required_error: "Last name is required" }),
});

const UserAddressValidationSchema = z.object({
  street: z.string({ required_error: "Street is required" }),
  city: z.string({ required_error: "City is required" }),
  country: z.string({ required_error: "Country is required" }),
});

const UserOrderValidationSchema = z.object({
  productName: z.string({ required_error: "Product name is required" }),
  price: z.number({ required_error: "Price is required" }),
  quantity: z.number({ required_error: "Quantity is required" }),
});

export const UserValidationSchema = z.object({
  userId: z.number({ required_error: "User ID is required" }),
  username: z
    .string({ required_error: "Username is required" })
    .max(10, { message: "username character must be 2 character" }),
  password: z.string({ required_error: "Password is required" }),
  fullName: UserNameValidationSchema,
  age: z.number({ required_error: "Age is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  isActive: z.boolean({ required_error: "isActive is required" }),
  hobbies: z.array(z.string({ required_error: "Hobbies are required" })),
  address: UserAddressValidationSchema,
  orders: z.array(UserOrderValidationSchema).optional(),
  isDeleted: z.boolean().default(false),
});
