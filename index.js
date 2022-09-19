const port = process.env.PORT || 5000;
const colors = require("colors");
const app = require("./app");

app.listen(port, () => {
  console.log(`Going to Tour on Port: ${port}`.blue.bold);
});
