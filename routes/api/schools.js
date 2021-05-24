const router = require("express").Router();
const schoolController = require("../../controllers/schoolController");

router.route("/allschools").get(schoolController.findAll);

module.exports = router;
