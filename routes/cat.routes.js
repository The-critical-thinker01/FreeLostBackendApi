const router = require("express").Router();
const controller= require("../controllers/cat.controller");

router.post("/new", controller.categoryCreate);
router.get("/delete/:catId", controller.categoryDelete);
router.post("/edit/:catId", controller.categoryEdit);
router.get("/all", controller.categoryFindAll);
router.get("/name/:catName", controller.categoryFindByName);
router.get("/id/:catId", controller.categoryFindById);

module.exports = router;
