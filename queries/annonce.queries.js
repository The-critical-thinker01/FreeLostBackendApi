const Annonce = require("../database/models/annonce.model");

exports.findAllAnnonces = async () => {
  return Annonce.find().exec();
};

exports.annonceCreate = async (annonce) => {
  try {
    const newAnnonce = new Annonce(annonce);
    return newAnnonce.save();
  } catch (e) {
    throw e;
  }
};

exports.deleteAnnocePerId = async (id) => {
  try {
    const annonceDelete = await Annonce.findByIdAndDelete(id);
    return annonceDelete;
  } catch (e) {
    throw e;
  }
};

exports.annonceUpdate = async (body, id) => {
  try {
    const annonce = await Annonce.findByIdAndUpdate(id, body, {
      new: true,
    });
    return annonce;
  } catch (e) {
    throw e;
  }
};
