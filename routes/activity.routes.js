import express from "express";
import { listActivities } from "../controllers/activity.controller.js";

const router = express.Router();

router.get("/",listActivities);

export default router;