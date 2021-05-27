const router = require("express").Router();
const { signin, signup } = require("../../controllers/user.js")

router.post("/login", signin);
router.post("/signup", signup);

 module.exports = router;

