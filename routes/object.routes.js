const router = require("express").Router();

const {
  addNewObject,
  getAllObjects,
  uploadImage,
  deleteObject,
  deleteAllObject,
  validerPublication,
} = require("../controllers/object.controller");

router.get("/all", getAllObjects);
router.post("/create", addNewObject);
router.post("/uploadImageObjet", uploadImage);
// router.get("/find/:ObjectId", findUserByid);
// // mise a jour
// router.put("/update/:ObjectId", UpdateObject);
// // suppression
router.delete("/clear/:ObjectId", deleteObject);
router.patch("/edit/:idObject", validerPublication);
module.exports = router;
