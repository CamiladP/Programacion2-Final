let db = require('../db/models')
let bcrypt= require("bcryptjs")
let moduloLogin = {
    chequearUsuario: function (email) {
        return db.usuarios.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return db.usuarios.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return db.usuarios.findOne({
            where:{
                email:email,
            },
        })
        .then(results=>{
            if (results && bcrypt.compareSync(pass,results.password)) {
                return results
            } else {
                return null
            }
        })
    }
}

module.exports = moduloLogin;