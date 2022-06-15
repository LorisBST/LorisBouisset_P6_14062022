const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({ // Utilisation de la méthode schéma de mongoose qui permet de créer un schéma de données pour notre BDD MongoDB
    userId: { type: String, required: true},
    name: { type: String, required: true},
    manufacturer: { type: String, required: true},
    mainPepper: { type: String, required: true},
    imageUrl: { type: String, required: true},
    heat: { type: String, required: true},
    likes : { type: String, required: true},
    dislikes: { type: String, required: true},
    usersLiked: { type: String, required: true},
    usersDisliked: { type: String, required: true}

});

module.exports = mongoose.model('Sauce', sauceSchema); // model exporte ce modèle en un modèle utilisable sur d'autres fichiers JS.
