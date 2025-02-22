const express = require("express");
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("This is the pages route");
});

module.exports = router;  // ✅ Make sure this line exists!
