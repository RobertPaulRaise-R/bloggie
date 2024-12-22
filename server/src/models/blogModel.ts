import { Document, model, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  author: Schema.Types.ObjectId; // Reference to the user (author)
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  commentCount: number;
  bookmarkCount: number;
  tags: string[];
  isPublished: boolean;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    bookmarkCount: {
      type: Number,
      default: 0,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

const Blog = model<IBlog>("Blog", BlogSchema);

export default Blog;
