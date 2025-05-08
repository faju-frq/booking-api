import express from "express";
import {
  bookActivity,
  getMyBookings,
} from "../controllers/booking.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/", authenticate, [
  body("activityId").isInt().withMessage("Valid activityId required"),bookActivity
]);


router.get('/',authenticate,getMyBookings);

export default router;