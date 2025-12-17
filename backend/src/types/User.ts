import { HydratedDocument, Model } from "mongoose";

// what kind of fields and types for each field are used.
export interface IUser {
  fullName: string;
  email: string;
  password: string;
}

// what kind of instance methods are used
export interface IUserMethods {
  comparePassword: (password: string) => Promise<boolean>;
}

// what type of User Model will be - IUser Schema, Empty i.e. {} query and IUserMethods instance methods
// Model<TSchema, TQueryHelpers, TMethods>
export type UserModel = Model<IUser, {}, IUserMethods>;

export type UserDocument = HydratedDocument<IUser, IUserMethods>;
