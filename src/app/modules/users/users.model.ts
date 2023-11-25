import { Schema, model, connect } from 'mongoose';
import IUser from './users.interface';

const usersSchema = new Schema<IUser>({
    userId:{type:Number,required:true,unique:true,trim:true},
    username:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true,trim:true},
    fullName:{
        firstName:{type:String,required:true,trim:true},
        lastName:{type:String,required:true,trim:true},
    },
    age:{type:Number,required:true,trim:true},
    email:{type:String,required:true,unique:true,trim:true},
    isActive:{type:Boolean,required:true,trim:true},
    hobbies:{type:[String],required:true},
    address:{
    street:{type:String,required:true,trim:true},
    city:{type:String,required:true,trim:true},
    country:{type:String,required:true,trim:true},
    }
})


export const UserModel = model<IUser>("User",usersSchema)