const {
  findAllAnnonces,
  annonceCreate,
  deleteAnnocePerId,
  annonceUpdate,
} = require("../queries/annonce.queries");

exports.getAllAnnonces = async (req, res, next) => {
  try {
    const object = await findAllAnnonces();
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.createAnnonce = async (req, res, next) => {
  try {
    const object = await annonceCreate(req.body);
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.deleteAnnonce = async (req, res, next) => {
  try {
    const object = await deleteAnnocePerId(req.params.id);
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.updateAnnonce = async (req, res, next) => {
  try {
    const object = await annonceUpdate(req.body, req.params.id);
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
