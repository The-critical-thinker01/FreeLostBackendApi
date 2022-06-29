const router = require("express").Router();
const {categoryCreate} = require("../controllers/cat.controller");

router.post("/new", categoryCreate);

module.exports = router;