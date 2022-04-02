const models = require("../models");

class GameController {
  static read = (req, res) => {
    models.game
      .find(req.params.url)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static join = (req, res) => {
    const { io } = req;
    models.game
      .join(req.params.url, req.params.nickname)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          io.to(`wuat`).emit(`game-${req.params.url}`, rows[0]);

          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const game = req.body;

    // TODO validations (length, format...)

    models.game
      .insert(game)
      .then(([result]) => {
        res.status(201).send({ ...result, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.game
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = GameController;
