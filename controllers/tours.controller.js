const Tour = require("../models/Tour");

// Get All Tours
exports.getAllTours = async (req, res) => {
  try {
    const { fields, sort } = req.query;
    const limit = Number(req.query.limit) || 5;
    const page = Number(req.query.page) || 0;
    const tours = await Tour.find({})
      .select(fields)
      .sort(sort)
      .skip(page * limit)
      .limit(limit);
    res.status(200).send({ success: true, data: tours });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

// Insert A New Tour
exports.createTour = async (req, res) => {
  try {
    const tours = await Tour.create(req.body);
    res
      .status(200)
      .send({ success: true, message: "Tour Created Successfully" });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

// Get a specific Tour
exports.getSpecificTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findOneAndUpdate(
      { _id: id },
      { $inc: { views: 1 } }
    );
    res.status(200).send({ success: true, data: tour });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};
