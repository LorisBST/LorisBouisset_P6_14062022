const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({ // Utilisation de la méthode schéma de mongoose qui permet de créer un schéma de données pour notre BDD MongoDB
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String },
    heat: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },
});

module.exports = mongoose.model('Sauce', sauceSchema); // model exporte ce modèle en un modèle utilisable sur d'autres fichiers JS.
