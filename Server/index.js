const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");

const app = express();
app.use(cors()); // cors enables us to connect our frontend with the backend.
app.use(express.json()); // This means whenever we pass data it will be converted to the json format

// connect with our database
mongoose.connect("mongodb://127.0.0.1:27017/test ");

// create the route for our server
app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("Server is Running");
});
