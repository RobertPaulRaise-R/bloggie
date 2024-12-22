import { Request, Response, NextFunction, RequestHandler } from "express";
import asyncHandler from "../middleware/asyncHandler";
import Blog from "../models/blogModel";

// @desc    Get a blog post by id
// @route   /api/v1/blog/:id
// @access  PUBLIC
const getBlogPost: RequestHandler = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const post = await Blog.findById(req.params.id);

      res.send(post);
    } catch (err) {
      console.error(err);
      res.json({ message: "Error fetching blog post" });
    }
  }
);

export { getBlogPost };
