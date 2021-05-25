const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");

router.route("/all").get(schoolController.findAll);
router.route("/state/:state").get(schoolController.findByState);
router.route("/city/:city").get(schoolController.findByCity);
router.route("/name/:name").get(schoolController.findByName);
router.route("/id/:id").get(schoolController.findById);
router.route("/:zip/:dis").get(schoolController.findByDistance);

module.exports = router;
