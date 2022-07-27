const {
  createUser,
  editUserById,
  allUsers,
  deleteUser,
  editUserType,
  findUserPerId,
} = require("../queries/user.queries");
const {
  findMyObjects,
  findMyObjectsValidate,
} = require("../queries/object.queries");
const cpUpload = require("../config/cloudinary.config");

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
  cpUpload,
  async (req, res, next) => {
    try {
      // console.log(req.file);
      // console.log(req.body);
      res.json({ path: req.files.avatar[0].path });
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

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await allUsers();
    res.status(200).json({
      users,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    next(err);
  }
};

exports.userDelete = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const userDelete = await deleteUser(id);
    res.json(userDelete);
  } catch (e) {
    res.json({ error: [e.message] });
    next(e);
  }
};

exports.userChangetype = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const userChangetype = await editUserType(req.body, id);
    res.json(userChangetype);
  } catch (e) {
    res.json({ error: [e.message] });
    next(e);
  }
};
exports.mesObjectPublier = async (req, res, next) => {
  try {
    const object = await findMyObjects(req.params.userId);
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
exports.mesObjectvalider = async (req, res, next) => {
  try {
    const object = await findMyObjectsValidate(req.params.userId);
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
exports.findUserById = async (req, res, next) => {
  try {
    const object = await findUserPerId(req.params.userId);
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
