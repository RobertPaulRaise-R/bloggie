import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  blocked: Schema.Types.ObjectId[];
  followedTags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    blocked: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    followedTags: [
      {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

const User = model<IUser>("User", UserSchema);

export default User;
