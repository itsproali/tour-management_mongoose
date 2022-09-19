const Tour = require("../models/Tour");

// Insert A New Tour
exports.createTour = async (req, res) => {
    try {
      const tours = Tour.create(req.body);
      res.status(200).send({ success: true, data: tours });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };