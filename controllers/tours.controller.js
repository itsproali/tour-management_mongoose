const Tour = require("../models/Tour");

// Get All Tours
exports.getAllTours = async (req, res, next) => {
  try {
    const { fields, sort } = req.query;
    const filteredFields = fields?.split(",")?.join(" ");
    console.log(filteredFields);
    const limit = Number(req.query.limit) || 5;
    const page = Number(req.query.page) || 0;
    const tours = await Tour.find({})
      .select(filteredFields)
      .sort(sort)
      .skip(page * limit)
      .limit(limit);
    res.status(200).send({ success: true, data: tours });
  } catch (error) {
    next(error);
  }
};

// Insert A New Tour
exports.createTour = async (req, res, next) => {
  try {
    const tours = await Tour.create(req.body);
    res
      .status(200)
      .send({ success: true, message: "Tour Created Successfully" });
  } catch (error) {
    next(error);
  }
};

// Get a specific Tour
exports.getSpecificTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findOneAndUpdate(
      { _id: id },
      { $inc: { views: 1 } }
    );
    res.status(200).send({ success: true, data: tour });
  } catch (error) {
    next(error);
  }
};
