import { z } from 'zod';

export  const userValidationSchema = z.object({
    userId: z.number().positive(),
    username: z.string().min(6,{message:"Please use a username that has at least six characters"}), 
    password: z.string().min(6,{message:"Please use a password that has at least six characters"}), 
    fullName: z.object({
      firstName: z.string().min(1).max(20, { message: "First name cannot be more than 20 characters" }),
      lastName: z.string().min(1).max(20, { message: "Last name cannot be more than 20 characters" }),
    }),
    age: z.number().int().positive(),
    email: z.string().email(),
    isActive: z.boolean(),
    hobbies: z.array(z.string()),
    address: z.object({
      street: z.string(),
      city: z.string(),
      country: z.string()

    }),
  })
