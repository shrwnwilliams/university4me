const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");

router.route("/all").get(schoolController.findAll);
// router.route("/state/:state").get(schoolController.findByState)

module.exports = router;
