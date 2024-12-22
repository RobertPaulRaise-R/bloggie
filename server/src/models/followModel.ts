import { Document, model, Schema } from "mongoose";

export interface IFollow extends Document {
  follower: Schema.Types.ObjectId;
  following: Schema.Types.ObjectId;
}

const FollowSchema = new Schema<IFollow>({
  follower: { type: Schema.Types.ObjectId, ref: "User", required: true },
  following: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Follow = model<IFollow>("Follow", FollowSchema);

export default Follow;
