const Task = require("../model/taskModels");

//Creating task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); //task->variable , Task ->is model imported from model/taskModel.js file
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//GET/read all task
const readTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET/read single task from database
const readTask = async (req, res) => {
  try {
    const { id } = req.params; // req.params-This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task found for id: ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Delete task from database
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task found for id: ${id}`);
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Update task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runvalidators: true,
    });
    if (!task) {
      return res.status(404).json(`No task found for id: ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Update a single field
const updatetask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runvalidators: true,
    });
    if (!task) {
      return res.status(404).json(`No task found for id: ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  readTasks,
  readTask,
  deleteTask,
  updateTask,
  updatetask,
};
