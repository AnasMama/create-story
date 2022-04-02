const { v4: uuidv4 } = require("uuid");

const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  static table = "game";

  async join(url, nickname) {
    const game = await this.connection.query(
      `select game.*, p.nickname as owner_nickname from ${this.table} join player p on game.owner_id = p.id where game.url = ? LIMIT 1`,
      [url]
    );

    // create player
    const player = await this.connection.query(
      `insert into player (nickname) values (?)`,
      [nickname]
    );

    await this.connection.query(
      `insert into game_player (game_id, player_id) values (?, ?)`,
      [game[0][0].id, player[0].insertId]
    );

    const players = await this.connection.query(
      `select p.* from player p join game_player gp on p.id = gp.player_id WHERE gp.game_id = ?`,
      [game[0][0].id]
    );
    // eslint-disable-next-line prefer-destructuring
    game[0][0].players = players[0];

    return game;
  }

  async find(url) {
    const game = await this.connection.query(
      `select game.*, p.nickname as owner_nickname from ${this.table} join player p on game.owner_id = p.id where game.url = ? LIMIT 1`,
      [url]
    );

    const players = await this.connection.query(
      `select p.* from player p join game_player gp on p.id = gp.player_id WHERE gp.game_id = ?`,
      [game[0][0].id]
    );
    // eslint-disable-next-line prefer-destructuring
    game[0][0].players = players[0];

    return game;
  }

  async insert(game) {
    const uuid = uuidv4();
    const url = uuid.split("-").pop();

    // create player
    const player = await this.connection.query(
      `insert into player (nickname) values (?)`,
      [game.nickname]
    );

    const result = await this.connection.query(
      `insert into ${GameManager.table} (owner_id, round, title, url) values (?, ?, ?, ?)`,
      [player[0].insertId, 0, "", url]
    );
    result[0].url = url;
    console.log(result[0]);
    return result;
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
