const Tour = require("../models/Tour");

// Update A Tour
exports.updateTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const tour = await Tour.updateOne({ _id: id }, updatedData, {
      runValidators: true,
    });
    res
      .status(200)
      .send({ success: true, data: "Tour Data Updated Successfully" });
  } catch (error) {
    next(error);
  }
};

// Top Trending Tour
exports.trendingTour = async (req, res, next) => {
  try {
    const trendingTours = await Tour.find({}).sort({ views: -1 }).limit(3);
    res.status(200).send({ success: true, data: trendingTours });
  } catch (error) {
    next(error);
  }
};

// Top Cheapest Tour
exports.cheapestTour = async (req, res, next) => {
  try {
    const cheapestTours = await Tour.find({}).sort({ price: 1 }).limit(3);
    res.status(200).send({ success: true, data: cheapestTours });
  } catch (error) {
    next(error);
  }
};
