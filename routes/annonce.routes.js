const router = require("express").Router();
const {
  getAllAnnonces,
  createAnnonce,
  deleteAnnonce,
  updateAnnonce,
} = require("../controllers/annonce.controller");

router.get("/all", getAllAnnonces);
router.post("/create", createAnnonce);
router.delete("/delete/:id", deleteAnnonce);
router.put("/update/:id", updateAnnonce);

module.exports = router;
