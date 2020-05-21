var express = require('express');
var router = express.Router();
let controllerSerion = require("../controllers/controllerSerion")

/* GET home page. */
router.get('/', controllerSerion.index );

router.get('/prueba', controllerSerion.prueba)

module.exports = router;
