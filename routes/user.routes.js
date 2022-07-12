const router = require("express").Router();
const {
  userCreate,
  userUpdate,
  uploadImage,
} = require("../controllers/user.controller");

router.post("/new", userCreate);
router.post("/update/avatar", uploadImage);
router.post("/update/:userId", userUpdate);

module.exports = router;
