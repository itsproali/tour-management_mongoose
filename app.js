const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const app = express();
const toursRoute = require("./routes/tours.route");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/tours", toursRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Tour Management Back Side..!");
});

// Error Handler
// app.use(errorHandler);

module.exports = app;
