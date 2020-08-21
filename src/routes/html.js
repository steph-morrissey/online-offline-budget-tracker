const router = require("express").Router();
const path = require("path");

const indexPath = (req, res) => {
  const filePath = path.join(__dirname, "../public/index.html");
  res.sendFile(filePath);
};

router.get("/", indexPath);

module.exports = router;
