var express = require('express');
var router = express.Router();

let controller = require ("../controllers/controller");

router.get("/detalle", controller.detalle)

router.get("/home", controller.home)

router.get("/login", controller.login)


module.exports = router;