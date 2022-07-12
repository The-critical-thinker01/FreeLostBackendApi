const Object = require('../database/models/object.model');

exports.listObjects = () => {
    return Object.find().exec();
}

exports.createObject = async(Object) => {
    try{
        const newObject = new Object({
            nomObjet: Object.nomObjet,
            photo: Object.photo,
            Categorie: Object.Categorie,
            CentreDeCollecte: Object.CentreDeCollecte
        });
        return newObject.save();
  } catch(e){
      throw e;

}
}