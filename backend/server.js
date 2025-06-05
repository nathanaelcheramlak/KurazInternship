import express from "express";
import cors from "cors";
import tasks from "./routes/task.route.js";
import connectDB from "./config/mongodb.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasks);

app.listen(5000, () => {
	connectDB();
	console.log("Server is running on port 5000");
});
