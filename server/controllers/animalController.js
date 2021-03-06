const pool = require("../db");

module.exports = {
  createAnimal: async (req, res) => {
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

      const newAnimal = await pool.query(
        "INSERT INTO animals (name, kennel_id, gender, microchip, birth_date, markings, birth_weight) VALUES($1, $2, $3, $4, $5, $6, $7)",
        [
          animalName,
          kennelId,
          gender,
          microchip,
          birthDate,
          markings,
          birthWeight,
        ]
      );
      res.status(201).json({ data: { animal: newAnimal } });
    } catch (error) {
      console.log(error);
    }
  },
  updateAnimal: (req, res) => {
    const { animalId } = req.params;
    const {
      editAnimalName,
      editGender,
      editMicrochip,
      editBirthDate,
      editMarkings,
      editBirthWeight,
    } = req.body;
    try {
      pool.query(
        "UPDATE animals SET name=$2, gender=$3, microchip=$4, birth_date=$5, markings=$6, birth_weight=$7 WHERE animal_id=$1 RETURNING *",
        [
          animalId,
          editAnimalName,
          editGender,
          editMicrochip,
          editBirthDate,
          editMarkings,
          editBirthWeight,
        ]
      );
      res.status(200);
    } catch (error) {
      console.log(error);
    }
  },
  deleteAnimal: (req, res) => {
    try {
      const { animalId } = req.params;
      pool.query(`DELETE FROM animals WHERE animal_id=$1`, [animalId]);
      res.status(204);
    } catch (error) {
      console.log(error);
    }
  },
  getAllAnimals: async (_req, res) => {
    try {
      const allAnimals = await pool.query(`SELECT * FROM animals`);
      res.json(allAnimals);
    } catch (error) {
      console.log(error);
    }
  },
  getAnimalsByKennelId: async (req, res) => {
    try {
      const { kennelId } = req.params;
      const allAnimals = await pool.query(
        `SELECT * FROM animals WHERE kennel_id=$1`,
        [kennelId]
      );
      res.status(200).json(allAnimals);
    } catch (error) {
      console.log(error);
    }
  },
};
