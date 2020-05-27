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