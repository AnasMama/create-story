const AbstractManager = require("./AbstractManager");

class SampleManager extends AbstractManager {
  static table = "sample";

  insert(sample) {
    return this.connection.query(
      `insert into ${SampleManager.table} (stuff) values (?)`,
      [sample.stuff]
    );
  }

  update(sample) {
    return this.connection.query(
      `update ${SampleManager.table} set stuff = ? where id = ?`,
      [sample.stuff, sample.id]
    );
  }
}

module.exports = SampleManager;
