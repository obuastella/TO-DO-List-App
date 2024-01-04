const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors()); // cors enables us to connect our frontend with the backend.
app.use(express.json()); // This means whenever we pass data it will be converted to the json format

app.listen(3001, () => {
  console.log("Server is Running");
});
