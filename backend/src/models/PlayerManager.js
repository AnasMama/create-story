const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  static table = "player";

  insert(player) {
    return this.connection.query(
      `insert into ${PlayerManager.table} (nickname) values (?)`,
      [player.nickname]
    );
  }

  update(player) {
    return this.connection.query(
      `update ${PlayerManager.table} set nickname = ? where id = ?`,
      [player.nickname, player.id]
    );
  }
}

module.exports = PlayerManager;
