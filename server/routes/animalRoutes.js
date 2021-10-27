const express = require("express");

const animalController = require("../controllers/animalController");

const router = express.Router();

router
  .route("/")
  .get(animalController.getAllAnimals)
  .post(animalController.createAnimal);

router.route("/:kennelId").get(animalController.getAnimalsByKennelId);
//   .patch(animalController.updateUser)
//   .delete(animalController.deleteUser);
module.exports = router;
