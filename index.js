require("colors");
require("dotenv").config();
const dbConnect = require("./utils/dbConnect");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;

const app = require("./app");

// Connect to Database
dbConnect();

// Handle Catch Error
app.use(errorHandler);

// Server
app.listen(port, () => {
  console.log(`Going to Tour on Port: ${port}`.blue.bold);
});

// Server Error Handler
// process.on("unhandledRejection", () => {});
