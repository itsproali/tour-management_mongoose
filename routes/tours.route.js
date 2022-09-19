const router = require("express").Router();
const {
  getAllTours,
  createTour,
  getSpecificTour,
} = require("../controllers/tours.controller");

router
  .route("/")

  /**
   * @api {get} Get All Tour
   * @apiDescription Get All Tour with queries. These data are organized for pagination. By default it doesn't need any query for first page data. To load second or later page data, use page query. Ex: page 5 data = /tours/page=4. Specific Fields can selected according to need with "fields" query. Tour can be sort with "sort" query.
   *
   * @apiQuery  Optional. Ex: /tours/fields=name,image,price&page=2&skip=10&sort=price
   *
   * @apiSuccess {Object} {success: true, data: [allTour]}
   *
   * @apiError (BadRequest 400)
   */
  .get(getAllTours)

  /**
   * @api {post} Insert a New Tour
   * @apiDescription Insert a new Tour. Collect data from api body and create new Tour.
   * 
   * @apiBody   {Object} Required Properties = {name: String, description: minimum 50 character String, image: String, price: Number, destination: String, category: Single/Couple/Group}
   *
   * @apiSuccess {Object} {success: true, message: successMessage}
   *
   * @apiError (BadRequest 400)
   */
  .post(createTour);

/**
 * @api {get} Get a specific Tour
 * @apiDescription Get a specific Tour details. When get details it increment the views by 1.
 * 
 * @apiSuccess {Object} {success: true, data: [Tour]}
 *
 * @apiError (BadRequest 400)
 */
router.get("/:id", getSpecificTour);

module.exports = router;
