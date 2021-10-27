const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// Custom routers
const kennelRouter = require("./routes/kennelRoutes");
const animalRouter = require("./routes/animalRoutes");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
// Kennels
app.use("/kennels", kennelRouter);

// animals
app.use("/animals", animalRouter);
// app.post("/animal", aController.postAnimal);
// app.post("/animals", aController.getAnimals);

app.listen(3001, () => console.log("server is running on 3001"));
