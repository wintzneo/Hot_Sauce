// Requis
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// Connection à MongoDB
mongoose.connect('mongodb+srv://wintzneo:pm40334033@cluster0.clqmrrp.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Démarrage d'express
const app = express();

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Bienvenue sur HotTakes!' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

module.exports = app;