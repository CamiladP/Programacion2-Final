var express = require('express');
var router = express.Router();
let controllerSerion = require("../controllers/controllerSerion")

/* GET home page. */
router.get('/', controllerSerion.index );

router.get('/prueba', controllerSerion.prueba);

router.get('/series', controllerSerion.detalle); 
router.post('/series', controllerSerion.guardarResenia);

router.get('/generos', controllerSerion.generos);

router.get('/resultadoAvanzado', controllerSerion.resultadoAvanzado);

router.get('/busquedaAvanzada', controllerSerion.busquedaAvanzada);

router.get('/registracion', controllerSerion.registracion);

router.post('/registracion', controllerSerion.guardarRegistracion);

router.get('/buscadorUsuarios', controllerSerion.buscadorUsuario);

router.get('/detallesUsuario/:id', controllerSerion.detallesUsuario);

router.post('/resultadosUsuarios', controllerSerion.resultadosUsuario);

router.get('/resenias/:id', controllerSerion.listadoResenias);

router.get('/resenias', controllerSerion.login);

router.post('/resenias', controllerSerion.confirmaLogin);

router.get('/eliminarResenia/:id', controllerSerion.formularioBorrarResena);
router.post('/eliminarResenia/:id', controllerSerion.eliminarResenia);


module.exports = router;
