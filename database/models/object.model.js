const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const ObjectSchema = new Schema({
    nomObjet: { type: String },
    Lieu: { type: String },
    Date: { type: Date },
    Description: { type: String },
    photo: { type: String },
    Categorie: { type: String},
    nomDoc: { type: Date },
    Marque: { type: String },
    Modele: { type: String },
    nom: { type: Date },
    prenom: { type: String },
    nationalite: { type: String },
    dateNaiss: { type: Date},



});

const Object = mongoose.model("Object", ObjectSchema);

module.exports = Object;