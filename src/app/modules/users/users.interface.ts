import { Model } from "mongoose"


export interface IUser {
    userId: number,
    username: string,
    password: string,
    fullName: {
        firstName: string,
        lastName: string
    },
    age: number,
    email: string,
    isActive: boolean,
    hobbies: Array<string>,
    address: {
        street: string,
        city: string,
        country: string
    }
    order?:{
        productName: string
        price: number
        quantity: number
      }
    isDeleted:boolean
  }
export type UserMethods= {
    isUserExist(id:number):Promise<IUser|null>
}

export type UserModels=Model<IUser,Record<string,never>,UserMethods>


