const router = require("express").Router();
const {
  getAllTours,
  createTour,
  getSpecificTour,
} = require("../controllers/tours.controller");

router.route("/").get(getAllTours).post(createTour);

router.get("/:id", getSpecificTour);

module.exports = router;
