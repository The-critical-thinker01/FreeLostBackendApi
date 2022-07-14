const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  nomObjet: { type: String },
  Lieu: { type: String },
  Date: { type: String },
  Description: { type: String },
  Photo: { type: String, default: "/images/photo-non-disponible-1.png" },
  Categorie: { type: String },
  NomDoc: { type: String },
  Marque: { type: String },
  Modele: { type: String },
  UserNom: { type: String },
  UserPrenom: { type: String },
  Nationalite: { type: String },
  DateNaissance: { type: String },
  DatePerteObjet: { type: String },
  dateCreation: { type: String },
  idUtilisateur: { type: String },
  idModerateur: { type: String },
  statut: { type: String },
  valider: { type: String, default: "non" },
});

const Object = mongoose.model("Object", ObjectSchema);

module.exports = Object;
