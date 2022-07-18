const {
  findAllAnnonces,
  annonceCreate,
  deleteAnnocePerId,
  annonceUpdate,
} = require("../queries/annonce.queries");
const path = require("path");
const multer = require("multer");
const { app } = require("../app");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/annonces"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

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

exports.annonceImage = [
  upload.single("annonce"),
  async (req, res, next) => {
    try {
      // console.log(req.file);
      // console.log(req.body);
      res.json({ path: "/images/annonces/" + req.file.filename });
    } catch (e) {
      res.json({ error: [e.message] });
      next(e);
    }
  },
];
