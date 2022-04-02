const AbstractManager = require("./AbstractManager");

class SentenceManager extends AbstractManager {
  static table = "sentence";

  insert(sentence) {
    return this.connection.query(
      `insert into ${SentenceManager.table} (game_id, content) values (?, ?)`,
      [sentence.game_id, sentence.content]
    );
  }

  find(sentence) {
    return this.connection.query(
      `select * from ${SentenceManager.table} set content = ? where game_id = ?`,
      [sentence.content, sentence.game_id]
    );
  }
}

module.exports = SentenceManager;
