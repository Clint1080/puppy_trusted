const pool = require("../db");
module.exports = {
  postAnimal: async (req, res) => {
    try {
      const { kennelName } = req.body;
      await pool.query("INSERT INTO kennel (name) VALUES($1)", [kennelName]);
    } catch (err) {
      console.log(err.message);
    }
  },
};
