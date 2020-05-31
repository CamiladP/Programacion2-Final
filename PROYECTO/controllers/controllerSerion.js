let db = require("../db/models");
let login = require("./login");
let bcrypt = require("bcryptjs");
let controllerSerion = {

    index: function(req,res){
        res.render("home")
    },

    prueba: function(req, res) {
        db.sequelize.query("SELECT * FROM usuarios")
        .then(function(response) {
            res.send(response)
        })
    },

    detalle: function(req, res){
        let idserie= req.query.idPeli
        res.render("series", {idserie:idserie, errores: false})
    },
    // guardarResenia: function(req,res){
       // let resenias= {
           // nombre:
       // }
   // },

    generos: function(req, res){
        res.render("generos")
    },

    busquedaAvanzada: function(req, res){
        res.render("busquedaAvanzada")
    },

    resultadoAvanzado: function(req, res){
        res.render("resultadoAvanzado")
    },

    registracion: function(req, res){
        res.render("registracion")
    },
    guardarRegistracion: function(req, res){
        let registro = { 
            nombre: req.body.nombre,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.contrasenia, 10),
            nacimiento: req.body.fecha,
        }
        db.usuarios.create(registro)
        .then(()=> {
            res.send("usuario creado")
        })
    },

    buscadorUsuario: function(req, res){
        res.render("buscadorUsuarios")


    },
    detallesUsuario: function(req, res){
        res.render("detallesUsuarios")
    },

   resultadosUsuario: function(req, res){
        res.render("resultadosUsuarios")
        let user = req.query.busquedaUsuario
        db.Usuarios.findAll({
            where:{

            } 
         // criterio por como se busca   where: [] con el operador like where 
         // es muy similiar a lo que tenemos que hacer para encontrar las resenias en el detalle
         
        })
        .then(resultados=>{console.log(resultados)})
    },


    resenias: function(req, res){
        res.render("resenias")
    },

    guardarResenia: function(req, res){
        login.validar(req.body.email, req.body.password)
        .then (function(usuario){
            let errores= []
            // validacion usuario
    
         
            if (usuario == null) {
                errores.push ("Tu registro no se ha realizado correctamente")
            } 
           else {
               // QUIEREN DECIR QUE EL USUARIO EXISTE Y LA PASS ES CORRECTA
               if (req.body.resenia== null) {
                   errores.push ("No se ha completado el campo de texto")
               } 
               if (req.body.puntaje== null) {
                   errores.push ("No se ha completado el campo de puntuacion")
                } 
            }
               if (errores.length>0){
                   //res.send(errores)
                   res.render("series",{errores:errores, idserie: req.query.idPeli})
               }
    
               else {
                   let resenia = { 
                       idserie: req.query.idPeli,
                       idusuario: usuario.id,
                       texto: req.body.resenia, 
                       fechacreacion: db.sequelize.literal("CURRENT_DATE"),
                       fechaactualizacion:db.sequelize.literal("CURRENT_DATE"),
                       puntaje: req.body.puntaje
                   }
                   db.resenias.create(resenia)
                   .then (function(){
                       res.send ("resenias creadas")
                   })
               }


            
        })
    }
}

module.exports = controllerSerion