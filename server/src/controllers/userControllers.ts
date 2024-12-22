import { Request, Response, NextFunction, RequestHandler } from "express";
import asyncHandler from "../middleware/asyncHandler";
import User from "../models/userModel";
import Blog from "../models/blogModel";
import Like from "../models/likeModel";
import Bookmark from "../models/bookmarkModel";

// @desc    POST Register or create a user
// @route   /api/v1/users
// @access  PUBLIC
const createUser: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      await User.create(req.body);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error creating user" });
    }
  }
);

// @desc    Get user profile
// @route   /api/v1/users/:id
// @access  PUBLIC
const getUserProfile: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const profile = await User.findById(req.body);
      const blogs = await Blog.find({ author: { $in: req.body } });
      const likes = await Like.find({ user: { $in: req.body } });
      const bookmarks = await Bookmark.find({ user: { $in: req.body } });
      res.json({ profile, blogs, likes, bookmarks });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching user profile" });
    }
  }
);

export { createUser };
