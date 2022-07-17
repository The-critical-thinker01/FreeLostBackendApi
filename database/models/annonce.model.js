const mongoose = require("mongoose");
const schema = mongoose.Schema;
const annonceSchema = schema({
  titre: { type: String },
  description: { type: String },
  date: { type: String },
  telphone: { type: String },
  email: { type: String },
  image: { type: String },
});

const Annonce = mongoose.model("annonce", annonceSchema);
module.exports = Annonce;
