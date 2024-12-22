import { NextFunction, Request, Response } from "express";
import asyncHandler from "./asyncHandler";
import User from "../models/userModel";

export const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;

    token = req.cookie.jwt;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select("-password");
        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Not Authorized, token failed");
      }
    } else {
      res.status(401);
      throw new Error("Not Authorized, no token");
    }
  }
);

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as Admin");
  }
};
