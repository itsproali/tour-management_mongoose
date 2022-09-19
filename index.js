require("colors");
require("dotenv").config();
const dbConnect = require("./utils/dbConnect");
const port = process.env.PORT || 5000;

const app = require("./app");

// Connect to Database
dbConnect();

// Server
app.listen(port, () => {
  console.log(`Going to Tour on Port: ${port}`.blue.bold);
});

// Server Error Handler
process.on("unhandledRejection", () => {
    
})
