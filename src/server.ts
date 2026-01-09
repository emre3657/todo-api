import "dotenv/config";
import "express-async-errors";

import { StatusCodes } from "http-status-codes";
import {prisma} from "./lib/prisma.js";

import express from "express"
const app = express();

// Middlewares
import ErrorHandlerMiddleware from "./middleware/error-handler.js";

app.get("/health/db", async (_req, res) => {
    await prisma.$queryRaw`SELECT 1`;
    res.status(StatusCodes.OK).json({status: "success", message: "DB connection is successful"});
})

app.use(ErrorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
})