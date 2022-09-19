const router = require("express").Router();
const {
  updateTour,
  trendingTour,
  cheapestTour,
} = require("../controllers/tour.controller");

/**
 * @api {patch} update a Tour details
 * @apiDescription update Tour Details
 *
 * @apiParam  Tour id (24 digit) EX: 63287025ba218b4646cb4fde
 *
 * @apiSuccess {Object} {success: true, message: SuccessMessage}
 *
 * @apiError (BadRequest 400)
 */
router.patch("/:id", updateTour);

/**
 * @api {get} Get trending Tour
 * @apiDescription Get Top 3 trending Tour
 *
 * @apiSuccess {Object} {success: true, data: [trending Tours]}
 *
 * @apiError (BadRequest 400)
 */
router.get("/trending", trendingTour);

/**
 * @api {get} Get cheapest Tour
 * @apiDescription Get Top 3 cheap price Tour
 *
 * @apiSuccess {Object} {success: true, data: [cheapest Tours]}
 *
 * @apiError (BadRequest 400)
 */
router.get("/cheapest", cheapestTour);

module.exports = router;
