import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { body } from "express-validator";

const router = express.Router();

//register route
router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("phone").notEmpty(),
    body("password").isLength({ min: 8 }),
  ],
  register
);

//login route
router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  login
);

export default router;
