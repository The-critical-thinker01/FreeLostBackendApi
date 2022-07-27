const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  nomObjet: { type: String },
  Lieu: { type: String },
  Date: { type: String },
  Description: { type: String },
  Photo: {
    type: String,
    default:
      "https://res.cloudinary.com/dhv6exyaj/image/upload/v1658939240/freeLost/photo-non-disponible-1_ugwql2.png",
  },
  Categorie: { type: String },
  TypeDoc: { type: String },
  Marque: { type: String },
  Modele: { type: String },
  UserNom: { type: String },
  UserPrenom: { type: String },
  UserPhone: { type: String },
  Nationalite: { type: String },
  DateNaissance: { type: String },
  DatePerteObjet: { type: String },
  dateCreationObject: { type: String },
  idUtilisateur: { type: String },
  idModerateur: { type: String },
  statut: { type: String }, //trouver ou perdu
  valider: { type: String, default: "non" },
});

const Object = mongoose.model("Object", ObjectSchema);

module.exports = Object;
