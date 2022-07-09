const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const ObjectSchema = new Schema({
    nomObjet: { type: String, required: true, unique: true },
    photo: { type: String, required: true, unique: true },
    Categorie: { type: Number, required: true },
    CentreDeCollecte: { type: Number, require: true },
});

const Object = mongoose.model("Object", ObjectSchema);

module.exports = Object;