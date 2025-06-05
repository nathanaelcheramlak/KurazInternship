import Tasks from "../models/task.model.js";

export const getTasks = async (req, res) => {
	try {
		const tasks = await Tasks.find();
		return res.status(200).json(tasks);
	} catch (error) {}
};

export const addTask = async (req, res) => {
	try {
		const { title } = req.body;
		if (!title) {
			return res.status(400).json({ message: "Title is required" });
		}

		if (title.length < 3) {
			return res
				.status(400)
				.json({ message: "Title must be at least 3 characters long" });
		}

		const newTask = new Tasks({ title });
		await newTask.save();
		return res.status(201).json(newTask);
	} catch (error) {
		return res.status(500).json({ message: "Error adding task" });
	}
};

export const updateTask = async (req, res) => {
	try {
		const { id } = req.params;
		const { completed } = req.body;

		const task = await Tasks.findByIdAndUpdate(id, { completed });

		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}

		return res.status(200).json(task);
	} catch (error) {
		return res.status(500).json({ message: "Error updating task" });
	}
};

export const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Tasks.findByIdAndDelete(id);

		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}

		return res.status(200).json({ message: "Task deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Error deleting task" });
	}
};
