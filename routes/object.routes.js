const {
  addNewObject,
  getObjects,
  getObjectWithID,
  UpdateObject,
  deleteObject,
  userList,
} = require("../controllers/object.controller");

const router = require("express").Router();

router.get(
  "/Objects",
  (req, res, next) => {
    next();
  },
  getObjects
);
router.post("/Object", addNewObject);

// Objet avec ID
router.get("/Object/:ObjectId", getObjectWithID);
// mise a jour
router.put("/Object/:ObjectId", UpdateObject);
// suppression
router.delete("/Object/:ObjectId", deleteObject);

module.exports = router;
