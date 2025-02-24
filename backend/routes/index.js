const express = require("express");
const router = express.Router();

const cardRoute = require("./card");

router.use("/card", cardRoute);

module.exports = router;