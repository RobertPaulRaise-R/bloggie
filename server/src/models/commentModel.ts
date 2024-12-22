import { Document, model, Schema } from "mongoose";

export interface IComment extends Document {
  userId: Schema.Types.ObjectId;
  blogId: Schema.Types.ObjectId;
  comment: string;
  parentComment: Schema.Types.ObjectId | null;
  likes: number;
}

const CommentSchema = new Schema<IComment>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    comment: {
      type: String,
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

CommentSchema.index({ post: 1 }); // Optimize queries for comments by post
CommentSchema.index({ parentComment: 1 }); // Optimize queries for replies

const Comment = model<IComment>("comment", CommentSchema);

export default Comment;
