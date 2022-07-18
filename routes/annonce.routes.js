const router = require("express").Router();
const {
  getAllAnnonces,
  createAnnonce,
  deleteAnnonce,
  updateAnnonce,
  annonceImage,
} = require("../controllers/annonce.controller");

router.get("/all", getAllAnnonces);
router.post("/create", createAnnonce);
router.delete("/delete/:id", deleteAnnonce);
router.put("/update/:id", updateAnnonce);
router.post("/image", annonceImage);

module.exports = router;
