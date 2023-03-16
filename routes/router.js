const express = require("express");
const { principalPage, homePage } = require("../controllers/page");

const router = express.Router();

router.get("/", principalPage)
router.get("/home", homePage);

module.exports = router;