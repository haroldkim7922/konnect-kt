const NightLifeController = require("../controllers/nightLife.controller");
const router = require("express").Router();

module.exports = router;

router.post("/", NightLifeController.postVenue);

router.get("/", NightLifeController.getAll);

router.put("/:id", NightLifeController.updateVenue);

router.delete("/:id", NightLifeController.deleteVenue);
