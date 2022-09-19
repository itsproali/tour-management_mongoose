const router = require("express").Router();
const {createTour} = require("../controllers/tour.controller")

router.route("/").post(createTour)

module.exports = router;