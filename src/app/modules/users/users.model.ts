import { Schema, model, connect } from 'mongoose';
import IUser from './users.interface';

const usersSchema = new Schema<IUser>({
    userId:{type:Number,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    fullName:{
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
    },
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    isActive:{type:Boolean,required:true},
    hobbies:{type:[String],required:true},
    address:{
    street:{type:String,required:true},
    city:{type:String,required:true},
    country:{type:String,required:true},
    }
})


export const UserModel = model<IUser>("User",usersSchema)