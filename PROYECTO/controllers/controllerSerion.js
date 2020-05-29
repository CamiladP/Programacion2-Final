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
        res.render("series", {idserie:idserie})
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

        const db = require("../db/models");
        db.Usuarios.findAll({
         // criterio por como se busca   where: []
         
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
            if (usuario==null) {
                errores.push ("te logiaste mal")
            } 
            // otros if para validar otra cosa
            if (errores.length>0){
                res.render("series",{errores:errores})
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