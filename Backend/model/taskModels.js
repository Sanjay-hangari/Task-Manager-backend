const mongoose = require("mongoose"); //import the mongoose module

// Creating a schema

const taskSchema = mongoose.Schema(
  //taskSchema is a name of the schema
  {
    name: {
      type: String,
      requied: [true, "Please add the task"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, //This property, when set to true, automatically adds two fields to the schema: createdAt and updatedAt.
    //Including timestamps: true in your schema definition simplifies the process of tracking creation and modification times for your documents.
  }
);

// creating model
const Task = mongoose.model("Task", taskSchema); //Task is the name of the model

module.exports = Task; // by exporting we can use it in another part of the code
