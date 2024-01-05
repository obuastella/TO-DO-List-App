const { default: mongoose, mongo } = require("mongoose");

// const mongoose = require(mongoose);

// Creating schema
const TodoSchema = new mongoose.Schema({
  task: String,
});

const TodoModel = mongoose.model("todos", TodoSchema);

module.exports = TodoModel;
