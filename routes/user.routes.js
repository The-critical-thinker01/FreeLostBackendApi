const router = require("express").Router();
const {
  userCreate,
  userUpdate,
  uploadImage,
  getAllUsers,
  userDelete,
  userChangetype,
  mesObjectPublier,
  mesObjectvalider,
  findUserById,
} = require("../controllers/user.controller");

router.post("/new", userCreate);
router.post("/update/avatar", uploadImage);
router.post("/update/:userId", userUpdate);
router.get("/all", getAllUsers);
router.delete("/delete/:userId", userDelete);
router.patch("/changeType/:userId", userChangetype); // permettre de changer un utilisaateur simple en moderateur , simple ou admin
router.get("/object/:userId", mesObjectPublier); //pour voir toutes les publications d'une personne
router.get("/moderateurObject/:userId", mesObjectvalider); //pour voir les object valider par un moderateur
router.get("/:userId", findUserById); //rechercher un utilisateur par son id
module.exports = router;
