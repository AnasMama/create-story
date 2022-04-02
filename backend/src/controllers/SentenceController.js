const models = require("../models");

class SentenceController {
  static browse = (req, res) => {
    models.sentence
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.sentence
      .findAllSentences(req.params.game)
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

  static add = (req, res) => {
    const sentence = req.body;

    // TODO validations (length, format...)

    models.sentence
      .insert(sentence)
      .then(([result]) => {
        res.status(201).send({ ...sentence, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = SentenceController;
