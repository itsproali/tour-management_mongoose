const mongoose = require("mongoose");

// Tour Schema Design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tour Name is Required..!"],
    },
    description: {
      type: String,
      minLength: [50, "Please Describe about the Tour"],
      required: [true, "Tour Description is Required..!"],
    },
    image: {
      type: String,
      required: [true, "Tour Image is Required..!"],
    },
    price: {
      type: Number,
      required: [true, "Tour Price is Required..!"],
    },
    destination: {
      type: String,
      required: [true, "Tour Destination is Required..!"],
      minLength: [3, "Enter a valid Destination..!"],
    },
    // travelDate: {
    //   type: Date,
    //   required: [true, "Must need a Travel Date..!"],
    // },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Tour Model Declaration
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
