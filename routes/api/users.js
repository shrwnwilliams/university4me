const router = require("express").Router();
const { signin, signup, actUpdate, satUpdate, schoolsUpdate } = require("../../controllers/user.js");

router.post("/login", signin);
router.post("/signup", signup);

// Matches with "/api/user/:id"
// router.route("/:id").get(act.findById)

router.put("/:id/act", actUpdate);
router.put("/:id/sat", satUpdate);
router.put("/:id/schools", schoolsUpdate)

// router.post("/sat", sat);

 module.exports = router;

