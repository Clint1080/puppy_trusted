const pool = require("../db");
module.exports = {
  postKennel: async (req, res) => {
    try {
      const { kennelName } = req.body;
      await pool.query("INSERT INTO kennel (name) VALUES($1)", [kennelName]);
    } catch (err) {
      console.log(err.message);
    }
  },
};
