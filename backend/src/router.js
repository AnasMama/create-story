const express = require("express");

const { PlayerController } = require("./controllers");

const router = express.Router();

router.get("/players", PlayerController.browse);
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.delete("/players/:id", PlayerController.delete);

module.exports = router;
