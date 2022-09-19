const mongoose = require("mongoose");

// Tour Schema Design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tour Name is Required..!"],
      trim: true,
    },

    description: {
      type: String,
      minLength: [50, "Please Describe about the Tour"],
      required: [true, "Tour Description is Required..!"],
      trim: true,
    },

    image: {
      type: String,
      required: [true, "Tour Image is Required..!"],
    },

    price: {
      type: Number,
      required: [true, "Tour Price is Required..!"],
      trim: true,
    },

    destination: {
      type: String,
      required: [true, "Tour Destination is Required..!"],
      minLength: [3, "Enter a valid Destination..!"],
      trim: true,
    },

    travelDate: {
      type: Date,
      required: [true, "Must need a Travel Date..!"],
      match: [
        /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
        "Must be follow this pattern: YYYY-MM-DD",
      ],
    },

    views: {
      type: Number,
      enum: [0],
      default: 0,
    },
  },
  { timestamps: true }
);

// Tour Model Declaration
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
