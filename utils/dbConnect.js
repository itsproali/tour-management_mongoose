const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("Database Connected Successfully"));
};

module.exports = dbConnect;
