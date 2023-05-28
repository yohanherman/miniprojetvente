const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("acceuil");
});
router.get("/vendre", (req, res) => {
  res.render("vendre");
});
router.get("/display", (req, res) => {
  res.render("display");
});
module.exports = router;
