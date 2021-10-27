const pool = require("../db");
module.exports = {
  createKennel: async (req, res) => {
    try {
      const { kennelName } = req.body;
      console.log(kennelName);
      await pool.query("INSERT INTO kennel (name) VALUES($1)", [kennelName]);
      res.status(201).send("New kennel created");
    } catch (err) {
      console.log(err.message);
    }
  },
  getAllKennels: async (req, res) => {
    try {
      const allKennels = await pool.query("SELECT * FROM kennel");
      res.json(allKennels);
    } catch (error) {
      console.log(error);
    }
  },
  getKennelName: async (req, res) => {
    try {
      const { kennelId } = req.params;
      const getKennelName = await pool.query(
        "SELECT * FROM kennel WHERE kennel_id=$1",
        [kennelId]
      );
      res.json(getKennelName);
    } catch (error) {
      console.log(error);
    }
  },
};
