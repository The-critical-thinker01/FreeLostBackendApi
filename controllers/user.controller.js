const { createUser, editUserById } = require("../queries/user.queries");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/avatars"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

exports.userCreate = async (req, res, next) => {
  const body = req.body;
  try {
    const newUser = await createUser(body);
    res.json(newUser);
  } catch (e) {
    res.json({ error: [e.message] });
    next(e);
  }
};
exports.uploadImage = [
  upload.single("avatar"),
  async (req, res, next) => {
    try {
      // console.log(req.file);
      // console.log(req.body);
      res.json({ path: "/images/avatars/" + req.file.filename });
    } catch (e) {
      res.json({ error: [e.message] });
      next(e);
    }
  },
];

exports.userUpdate = async (req, res, next) => {
  const body = req.body;
  const id = req.params.userId;
  try {
    const userUpdate = await editUserById(body, id);
    res.json(userUpdate);
  } catch (e) {
    res.json({ error: [e.message] });
    next(e);
  }
};
