let db = require("../db/models");

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
        res.render("series")
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
            password: bcrypt.hashSync(req.body.contrasenia, 80),
            nacimiento: req.body.fecha,
        }
        db.Usuarios.create(registro)
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
    },
    resenias: function(req, res){
        res.render("resenias")
    },
}

module.exports = controllerSerion