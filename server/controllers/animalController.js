const pool = require("../db");

module.exports = {
  postAnimal: async (req, res) => {
    try {
      const {
        animalName,
        kennelId,
        gender,
        microchip,
        birthDate,
        markings,
        birthWeight,
      } = req.body;

      await pool.query(
        "INSERT INTO animals (name, kennel_id, gender, microchip, birth_date, markings, birth_weight) VALUES($1, $2, $3, $4, $5, $6, $7)",
        [
          animalName,
          kennelId.kennelId,
          gender,
          microchip,
          birthDate,
          markings,
          birthWeight,
        ]
      );
    } catch (error) {
      console.log(error);
    }
  },
};
