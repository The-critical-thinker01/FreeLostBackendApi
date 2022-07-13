const router = require("express").Router();
const {
  userCreate,
  userUpdate,
  uploadImage,
  getAllUsers,
  userDelete,
  userChangetype,
} = require("../controllers/user.controller");

router.post("/new", userCreate);
router.post("/update/avatar", uploadImage);
router.post("/update/:userId", userUpdate);
router.get("/all", getAllUsers);
router.delete("/delete/:userId", userDelete);
router.patch("/changeType/:userId", userChangetype); // permettre de changer un utilisaateur simple en moderateur , simple ou admin
module.exports = router;
