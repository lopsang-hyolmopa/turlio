import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

import { IUser, IUserMethods, UserModel } from "../types/User.js";

// Schema<DocumentFields, ModelType, InstanceMethods> - Empty Model Type here since it has not been created yet.
const userSchema = new Schema<IUser, {}, IUserMethods>(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

// hash password before saving on db (only if password has not been modified ie. created for first time)
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

// custom methods to compare hashed and provided password
userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Any time a User document is converted to JSON, password should disappear automatically.
userSchema.set("toJSON", {
  transform: function (doc, ret) {
    const { password, __v, ...safeUser } = ret;
    return safeUser;
  },
});

// mongoose.model<TSchema, TModel>
export const User = mongoose.model<IUser, UserModel>("User", userSchema);
