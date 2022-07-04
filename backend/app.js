// Requis
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")

// Routes
const userRoutes = require("./routes/user");

//Création d'application express
const app = express();

//Connection à la base de donnée MongoDB
mongoose.connect('mongodb+srv://wintzneo:pm40334033@cluster0.clqmrrp.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Header pour contourner erreurs de CORS
/*app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});*/

app.use(cors())

//Rendre la requete exploitable
app.use(bodyParser.json());

//Routes attendues
app.use("/api/auth", userRoutes);

module.exports = app;