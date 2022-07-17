const router = require("express").Router();

const {
  addNewObject,
  getAllObjects,
  uploadImage,
  deleteObject,

  updateObject,
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
module.exports = router;
