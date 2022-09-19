const express = require("express");
const app = express();

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Tour Management Back Side..!");
});

module.exports = app;
