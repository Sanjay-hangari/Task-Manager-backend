const express = require("express");
const Task = require("../model/taskModels");
const {
  createTask,
  readTasks,
  readTask,
  deleteTask,
  updateTask,
  updatetask,
} = require("../controllers/taskController");
const router = express.Router();

//store data in database(mongodb)
router.post("/api/task", createTask); //post-> POST method, to send data

// GET/read all data from database
router.get("/api/task", readTasks);

//GET/read singlr task or data from database
router.get("/api/task/:id", readTask);

//Delete task
router.delete("/api/task/:id", deleteTask);

//update task
router.put("/api/task/:id", updateTask);

//update single task
router.patch("/api/task/:id", updatetask);

module.exports = router;
