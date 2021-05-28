const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");
const auth = require("../../middleware/auth.js")

router.route("/all/:page").get(schoolController.findAll);
router.route("/state/:state/:page").get(schoolController.findByState);
router.route("/city/:city/:page").get(schoolController.findByCity);
router.route("/name/:name/:page").get(schoolController.findByName);
router.route("/id/:id").get(schoolController.findById);
router.route("/dis/:zip/:dis/:page").get(schoolController.findByDistance);

module.exports = router;
