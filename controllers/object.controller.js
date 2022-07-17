const {
  createObject,
  allObject,
  deleteObjectById,
  objectUpdate,
} = require("../queries/object.queries");
const path = require("path");
const multer = require("multer");
const { app } = require("../app");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/objects"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

exports.getAllObjects = async (req, res, next) => {
  try {
    const objects = await allObject();
    res.status(200).json({
      objects,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    next(err);
  }
};
exports.addNewObject = async (req, res, next) => {
  const body = req.body;
  try {
    const newObject = await createObject(body);
    res.json(newObject);
    app.emit("addObject", newObject);
  } catch (e) {
    res.json({ error: [e.message] });
    next(e);
  }
};

exports.uploadImage = [
  upload.single("object"),
  async (req, res, next) => {
    try {
      // console.log(req.file);
      // console.log(req.body);
      res.json({ path: "/images/objects/" + req.file.filename });
    } catch (e) {
      res.json({ error: [e.message] });
      next(e);
    }
  },
];

// exports.UpdateObject = async (req, res) => {
//   Object.findOneAndUpdate(
//     { _id: req.params.ObjectId },
//     req.body,
//     { new: true },
//     (err, Object) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json(Object);
//     }
//   );
// };

exports.deleteObject = async (req, res, next) => {
  try {
    const object = await deleteObjectById(req.params.ObjectId);
    res.json(object);
  } catch (e) {
    res.json({ error: [e.message] });
    next(e);
  }
};
exports.updateObject = async (req, res, next) => {
  const idObject = req.params.ObjectId;
  const body = req.body;
  try {
    const object = await objectUpdate(idObject, body);
    res.status(200).json({
      object,
    });
  } catch (e) {
    next(e);
  }
};
