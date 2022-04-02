const express = require("express");

const { PlayerController, GameController } = require("./controllers");

const router = express.Router();
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.get("/games/:url", GameController.read);
router.post("/games", GameController.add);
router.post("/games/:url/:nickname", GameController.join);

module.exports = router;
