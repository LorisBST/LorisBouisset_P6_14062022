const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors") // permet d'autoriser les origines croisées
const app = express(); // Crée une application express
const path = require('path'); // le module fournit des utilitaires pour travailler avec le chemin du fichier et du répertoire
require('dotenv').config()

const mongodbErrorHandler = require('mongoose-mongodb-errors')
mongoose.plugin(mongodbErrorHandler);


const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');


mongoose.connect(process.env.SECRET_DTB,
    { useNewUrlParser: true,
            useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use(cors())
app.use(express.json()); // récupère les objets JSON
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);



module.exports = app; // exports permet d'utiliser notre fonction sur d'autres fichiers












// // Création d'un compte
// app.post("/api/auth/signup", (req, res) =>{
//     const email = req.body.email
//     const password = req.body.password
//     const user = new User({email: email, password: password})
//     user.save()
//         .then(() => {
//         res.send({message: "Votre compte a bien été créé"})
//         console.log("Utilisateur enregistré", res)
//     })
//         .catch(err => console.log("Utilisateur pas enregistré", err))
// })