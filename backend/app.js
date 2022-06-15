const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors")
const app = express();
// const path = require('path');

// const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://userProject:azerty12@cluster0.rj7h6rs.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
            useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json()); // récupère les objets JSON



// app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use('/api/stuff', stuffRoutes);
app.use(cors)
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