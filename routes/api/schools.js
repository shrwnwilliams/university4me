const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");

router.route("/all").get(schoolController.findAll);
router.route("/state/:state").get(schoolController.findByState);
router.route("/city/:city").get(schoolController.findByCity);
router.route("/:name").get(schoolController.findByName);

module.exports = router;
