const express = require("express");

const kennelController = require("../controllers/kennelController");

const router = express.Router();
// Routes
// All Kennels
router
  .route("/")
  .get(kennelController.getAllKennels)
  .post(kennelController.createKennel);

// Kennel by Name
router.route("/:kennelId").get(kennelController.getKennelName);
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);
module.exports = router;
