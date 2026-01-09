import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const ErrorHandlerMiddleware = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: "error",
        message: "Internal server error",
    });
}

export default ErrorHandlerMiddleware;