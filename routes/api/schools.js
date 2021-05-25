const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");

router.route("/all/:page").get(schoolController.findAll);
router.route("/state/:state/:page").get(schoolController.findByState);
router.route("/city/:city/:page").get(schoolController.findByCity);
router.route("/name/:page/:name").get(schoolController.findByName);
router.route("/id/:id").get(schoolController.findById);
router.route(":page/:zip/:dis").get(schoolController.findByDistance);

module.exports = router;
