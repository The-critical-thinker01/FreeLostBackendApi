const Object = require("../database/models/object.model");

exports.allObject = async () => {
  return Object.find().exec();
};
exports.createObject = async (object) => {
  try {
    const newObject = new Object(object);
    return newObject.save();
  } catch (e) {
    throw e;
  }
};
exports.deleteObjectById = async (id) => {
  try {
    const objectDelete = await Object.findByIdAndDelete(id);
    return objectDelete;
  } catch (e) {
    throw e;
  }
};
exports.objectUpdate = async (id, body) => {
  try {
    const object = await Object.findByIdAndUpdate(id, body, {
      new: true,
    });
    return object;
  } catch (e) {
    throw e;
  }
};
exports.getObjectBycategory = async (category) => {
  try {
    const object = await Object.find({ Categorie: category });
    return object;
  } catch (e) {
    throw e;
  }
};
exports.findTrouverValider = async () => {
  try {
    const object = await Object.find({ valider: "oui", statut: "trouver" });
    return object;
  } catch (e) {
    throw e;
  }
};
exports.findTrouverNonValider = async () => {
  try {
    const object = await Object.find({ valider: "non", statut: "trouver" });
    return object;
  } catch (e) {
    throw e;
  }
};
exports.findObjectPerdu = async () => {
  try {
    const object = await Object.find({ statut: "perdu" });
    return object;
  } catch (e) {
    throw e;
  }
};

exports.findMyObjects = async (idUser) => {
  try {
    const object = await Object.find({ idUtilisateur: idUser });
    return object;
  } catch (e) {
    throw e;
  }
};
exports.findMyObjectsValidate = async (idUser) => {
  try {
    const object = await Object.find({ idModerateur: idUser });
    return object;
  } catch (e) {
    throw e;
  }
};
exports.findAllValiderObject = async () => {
  try {
    const object = await Object.find({ valider: "oui" });
    return object;
  } catch (e) {
    throw e;
  }
};
