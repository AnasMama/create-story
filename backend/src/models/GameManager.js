const { v4: uuidv4 } = require("uuid");

const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  static table = "game";

  async find(id) {
    // TODO get player list

    const game = await this.connection.query(
      `select game.*, p.nickname as owner_nickname from ${this.table} join player p on game.owner_id = p.id where game.id = ? LIMIT 1`,
      [id]
    );

    const players = await this.connection.query(
      `select p.* from player p join game_player gp on p.id = gp.player_id WHERE gp.game_id = ?`,
      [game[0][0].id]
    );
    // eslint-disable-next-line prefer-destructuring
    game[0][0].players = players[0];
    console.log(players);

    return game;
  }

  insert(game) {
    const uuid = uuidv4();
    console.error([game.owner_id, 0, game.title, uuid.split("-").pop()]);
    return this.connection.query(
      `insert into ${GameManager.table} (owner_id, round, title, url) values (?, ?, ?, ?)`,
      [game.owner_id, 0, game.title, uuid.split("-").pop()]
    );
  }

  update(game) {
    // TODO get last round add increment
    return this.connection.query(
      `update ${GameManager.table} set round = ? where id = ?`,
      [game.round, game.id]
    );
  }
}

module.exports = GameManager;
