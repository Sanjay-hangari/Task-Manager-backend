const dotenv = require("dotenv").config(); // to give access to use .env file
const express = require("express"); //importing express
const mongoose = require("mongoose"); //importing monoose
const cors = require("cors");
const Task = require("./model/taskModels"); //ipmorting task from mongodb model
const taskRouter = require("./routes/taskRouter");

const app = express();
const PORT = process.env.PORT || 5000;

// Connecting mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`); // Creating server
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Creating middleware
app.use(express.json()); //middleware function for json files
app.use(express.urlencoded({ extended: false })); //middleware function for form objects
app.use(cors());
app.use(taskRouter);
