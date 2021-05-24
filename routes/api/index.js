const path = require("path");
const router = require("express").Router();
const schoolRoutes = require("./schools");

router.use("/school", schoolRoutes);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"))
// });

module.exports = router;