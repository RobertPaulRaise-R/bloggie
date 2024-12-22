import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/config";

dotenv.config();
connectDB();

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:8000");
});
