interface IUser {
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
  }

  export default IUser