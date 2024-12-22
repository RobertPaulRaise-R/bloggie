import { Document, model, Schema } from "mongoose";

export interface ILike extends Document {
  post: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

const LikeSchema = new Schema<ILike>(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

LikeSchema.index({ post: 1 });

LikeSchema.index({ user: 1 });

const Like = model<ILike>("Like", LikeSchema);

export default Like;
