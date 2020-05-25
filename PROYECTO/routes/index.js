var express = require('express');
var router = express.Router();
let controllerSerion = require("../controllers/controllerSerion")

/* GET home page. */
router.get('/', controllerSerion.index );

router.get('/prueba', controllerSerion.prueba);

router.get('/detalle', controllerSerion.detalle); 

router.get('/generos', controllerSerion.generos);

router.get('/resultadoAvanzado', controllerSerion.resultadoAvanzado);

router.get('/busquedaAvanzada', controllerSerion.busquedaAvanzada);

router.get('/registracion', controllerSerion.registracion)

module.exports = router;
