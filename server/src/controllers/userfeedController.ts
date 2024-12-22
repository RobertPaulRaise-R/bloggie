import { NextFunction, Request, RequestHandler, Response } from "express";

import asyncHandler from "../middleware/asyncHandler";
import User from "../models/userModel";
import Follow from "../models/followModel";
import Blog from "../models/blogModel";

// @desc    Get user feed
// @route   GET /api/v1/feed
// @access  Private

const getFeed: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const userId = req.body!._id;

      const page = parseInt(req.query.page as string, 10) || 1;
      const limit = parseInt(req.query.limit as string, 10) || 10;

      const following = await Follow.find({ follower: userId }).select(
        "following"
      );
      const followingIds = following.map((follow) => follow.following);

      const user = await User.findById(userId).select("followedTags");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const followedTags = user.followedTags;

      const feed = await Blog.find({
        $or: [{ author: { $in: followingIds }, tags: { $in: followedTags } }],
      })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("author", "name")
        .exec();

      const totalBlogs = await Blog.countDocuments({
        $or: [{ author: { $in: followingIds }, tags: { $in: followedTags } }],
      });

      res.status(200).json({
        feed,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(totalBlogs / limit),
        },
      });
    } catch (err) {
      console.error("Error Fetching User feed", err);
      res.status(500).json({ message: "Failer to fetch user feed!!!" });
    }
  }
);

export { getFeed };
