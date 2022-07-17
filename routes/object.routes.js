const router = require("express").Router();

const {
  addNewObject,
  getAllObjects,
  uploadImage,
  deleteObject,
  trouverValider,
  updateObject,
  trouverNonValider,
  objectPerdu,
} = require("../controllers/object.controller");

router.get("/all", getAllObjects);
router.post("/create", addNewObject);
router.post("/uploadImageObjet", uploadImage);
// router.get("/find/:ObjectId", findUserByid);
// // mise a jour
// router.put("/update/:ObjectId", UpdateObject);
// // suppression
router.delete("/clear/:ObjectId", deleteObject);
router.patch("/edit/:ObjectId", updateObject);
router.get("/trouverValider", trouverValider); //les object trouver et valider par un moderateur // vas etre afficher sur le home
router.get("/trouverNonValider", trouverNonValider); //afficher les object non valider parle moderateur
router.get("/objectPerdu", objectPerdu); //afficher les object perdu juste pr ladmin
module.exports = router;
