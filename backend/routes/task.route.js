import express from "express";
import {
	getTasks,
	addTask,
	updateTask,
	deleteTask,
} from "../controller/task.controller.js";

const router = express.Router();

// Routes
router.get("/", getTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
