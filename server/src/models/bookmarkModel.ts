import { Document, model, Schema } from "mongoose";

export interface IBookmark extends Document {
  post: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

const BookmarkSchema = new Schema<IBookmark>(
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

BookmarkSchema.index({ post: 1 });

BookmarkSchema.index({ user: 1 });

const Bookmark = model<IBookmark>("Bookmark", BookmarkSchema);

export default Bookmark;
