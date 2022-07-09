const {
  addNewObject,
  getObjects,
  getObjectWithID,
  UpdateObject,
  deleteObject,
} = require("../controllers/object.controller");
const { userList } = require("../controllers/user.controller");

const routes = (app) => {
  app
    .route("/Objects")
    .get((req, res) => res.send("Demande Get"))

    .post((req, res) => res.send("Demande Post"));

  app
    .route("/Objects/:Objectid")
    .put((req, res) => res.send("Demande put"))

    .delete((req, res) => res.send("Demande delete"));
};

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

export default routes;
