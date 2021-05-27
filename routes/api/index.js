const path = require("path");
const router = require("express").Router();
const schoolRoutes = require("./schools");
const userRoutes = require("./users")

// School Routes
router.use("/school", schoolRoutes);

//User Routes
router.use("/user", userRoutes);

module.exports = router;