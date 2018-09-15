const router = require("express").Router();

const venueRoutes = require("./nightLife.routes");

module.exports = router;

router.use("/venue", venueRoutes);
