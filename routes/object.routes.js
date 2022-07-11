const {
  addNewObject,
  getObjects,
  getObjectWithID,
  UpdateObject,
  deleteObject,
  userList,
} = require("../controllers/object.controller");

const router = require("express").Router();

router.get("/all",(req, res, next) => {
    next();
  },
  getObjects
);
router.post("/create", addNewObject);

// Objet avec ID
router.get("/find/:ObjectId", getObjectWithID);
// mise a jour
router.put("/update/:ObjectId", UpdateObject);
// suppression
router.delete("/clear/:ObjectId", deleteObject);

module.exports = router;
