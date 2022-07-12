const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const ObjectSchema = new Schema({
    nomObjet: { type: String, required: true, unique: true },
    LieuDePerte: { type: String },
    Date: { type: Date },
    Description: { type: String },
    photo: { type: String },
    Categorie: { type: String, required: true },
    CentreDeCollecte: { type: String},
});

const Object = mongoose.model("Object", ObjectSchema);

module.exports = Object;