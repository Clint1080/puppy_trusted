const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

//Routes

// Controllers
const kController = require("./controllers/kennelController");
const aController = require("./controllers/animalController");

// kennel
app.post("/kennel", kController.postKennel);
app.get("/kennel", kController.getKennels);

// animals
app.post("/animal", aController.postAnimal);

app.listen(3001, () => console.log("server is running on 3001"));
