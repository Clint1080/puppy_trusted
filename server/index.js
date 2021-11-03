const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const pool = require("./db");
const PORT = process.env.PORT || 3001;

// process.env.PORT
// process.env.NODE_ENV => production or undefined

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // serve static content
  app.use("/", express.static(path.join(__dirname, "build")));
}

// Custom routers
const kennelRouter = require("./routes/kennelRoutes");
const animalRouter = require("./routes/animalRoutes");

// Routes
// Kennels
app.use("/kennels", kennelRouter);

// animals
app.use("/animals", animalRouter);
// app.post("/animal", aController.postAnimal);
// app.post("/animals", aController.getAnimals);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
