import { Request, Response, NextFunction } from "express";

interface AsyncHandler {
  (fn: (req: Request, res: Response) => Promise<any>): (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}

const asyncHandler: AsyncHandler =
  (fn) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res)).catch(next);
  };

export default asyncHandler;
