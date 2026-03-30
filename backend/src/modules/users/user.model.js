import { Schema, model, Document } from 'mongoose';
import { IUser } from './user.interfaces';

const userSchema = new Schema(
  {
    imgUrl: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationality: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    dateOfBirth: { type: Date, required: false },
    country : { type: String, required: false },
    address: { type: String, required: false }
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);