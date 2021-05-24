const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");

router.route("/all").get(schoolController.findAll);

module.exports = router;
