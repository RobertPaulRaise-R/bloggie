import express from "express";
import { getFeed } from "../controllers/userfeedController";

const router = express.Router();

router.route("/api/v1/feed").get(getFeed);
