import express from "express";
import { getQuizQuestions } from "../controllers/quizController.js";

const router = express.Router();

router.get("/", getQuizQuestions);

export default router;