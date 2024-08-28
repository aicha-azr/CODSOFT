const express = require('express');
const app = express();

// Charger la connexion à la base de données
require('./Connection/connection');

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Utilisation des routes
const router = require('./Routes/routers');
app.use(router);

const authenticateJWT = require('./Middleware/VerifyToken');
const crypto = require('crypto');
// Point de vérification de l'API
app.get('/', authenticateJWT, (req, res) => {

    res.json('Hello world');
});

// Démarrage du serveur
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
