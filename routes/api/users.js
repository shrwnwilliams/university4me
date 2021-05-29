const router = require("express").Router();
const { signin, signup, actUpdate, sat } = require("../../controllers/user.js");

router.post("/login", signin);
router.post("/signup", signup);

// Matches with "/api/user/:id"
// router.route("/:id").get(act.findById)

router.put("/:id/act", actUpdate);
// router.post("/sat", sat);

 module.exports = router;

