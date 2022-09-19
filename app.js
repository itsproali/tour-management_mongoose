const express = require("express");
const cors = require("cors");
const app = express();
const toursRoute = require("./routes/tours.route");
const tourRoute = require("./routes/tour.route");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/tours", toursRoute);
app.use("/tour", tourRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Tour Management Back Side..!");
});

// Not Found Route
app.get("*", (req, res) => {
  res.send(404).send({ message: "Route Not Found" });
});

// Error Handler

module.exports = app;
