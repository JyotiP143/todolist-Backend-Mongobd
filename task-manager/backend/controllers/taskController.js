const Task = require("../models/Task");

// GET all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// CREATE task
exports.createTask = async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.json(task);
};

// DELETE task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};