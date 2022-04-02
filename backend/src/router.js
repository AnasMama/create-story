const express = require("express");

const {
  PlayerController,
  GameController,
  SentenceController,
} = require("./controllers");

const router = express.Router();
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.get("/games/:url", GameController.read);
router.post("/games", GameController.add);
router.post("/games/:url/:nickname", GameController.join);
router.get("/sentences/:game", SentenceController.read);
router.post("/sentences", SentenceController.add);

module.exports = router;
