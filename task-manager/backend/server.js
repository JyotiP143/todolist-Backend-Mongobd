const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/api/tasks", taskRoutes);

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});