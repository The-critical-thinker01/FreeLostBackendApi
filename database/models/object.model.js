const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
    nom_obj: { type: String, required: true, unique: true },
    photo_obj: { type: String, required: true, unique: true },
    categorie: { type: String, required: true },
    centre_collecte: { type: String }
});


const Object = mongoose.model("object", objectSchema);

module.exports = Object;