const router = require("express").Router();
const {
  userCreate,
  userUpdate,
  uploadImage,
  getAllUsers,
} = require("../controllers/user.controller");

router.post("/new", userCreate);
router.post("/update/avatar", uploadImage);
router.post("/update/:userId", userUpdate);
router.get("/all", getAllUsers);

module.exports = router;
