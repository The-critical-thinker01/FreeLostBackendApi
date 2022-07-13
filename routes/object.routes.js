const router = require("express").Router();

const {
  addNewObject,
  getAllObjects,
  uploadImage,
} = require("../controllers/object.controller");

router.get("/all", getAllObjects);
router.post("/create", addNewObject);
router.post("/uploadImageObjet", uploadImage);
// router.get("/find/:ObjectId", findUserByid);
// // mise a jour
// router.put("/update/:ObjectId", UpdateObject);
// // suppression
// router.delete("/clear/:ObjectId", deleteObject);

module.exports = router;
