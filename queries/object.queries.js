const Object = require('../database/models/object.model');

exports.listObjects = () => {
    return Object.find().exec();
}

exports.createObject = async(Object) => {
    try{
        const newObject = new Object({
            nomObjet: Object.nomObjet,
            lieu: Object.lieu,
            Date: Object.Date,
            photo: Object.photo,
            Description: Object.Description,
            Categorie: Object.Categorie,
            nomDoc: Object.nomDoc,
            Marque: Object.Marque,
            Modele: Object.Modele,
            nom: Object.nom, prenom: Object.prenom,
            nationalite: Object.nationalite,
            dateNaiss: Object.dateNaiss

        });
        return newObject.save();
  } catch(e){
      throw e;
}
}