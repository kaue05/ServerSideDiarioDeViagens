var express = require('express');
var router = express.Router();

const { getHome } = require("../controllers/homeController")

/* GET home page. */
router.get('/', getHome);

module.exports = router;
