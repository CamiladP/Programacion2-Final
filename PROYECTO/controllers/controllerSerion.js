let db = require("../db/models"); //agarra la base de datos
let login = require("./login"); // requiere el modulo de log in
let bcrypt = require("bcryptjs"); // comando para incriptar

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

    login: function(req,res){
        res.render("login")
    },

    confirmaLogin: function(req,res){
        login.validar(req.body.email, req.body.password)
        .then (resultado =>{
            if(resultado == undefined){
                res.redirect("/resenias")
            } else{
                console.log(resultado.id);
            res.redirect("/resenias/"+ resultado.id)        
            }
        })
    },

    listadoResenias: function(req,res){
        let idusuario = req.params.id
            db.resenias.findAll({
                where:{
                    idusuario:idusuario
                },
                include: {
                    model: db.usuarios,
                    as: 'usuario',
                }
            })
            .then(function(resenias){
                console.log(idusuario, resenias);
                
                res.render("resenias",{resenias:resenias})
            } )
    },

    detalle: function(req, res){
        let idserie= req.query.idPeli
        db.resenias.findAll({
            where: {
                idserie: idserie,
            },
            include: {
                model: db.usuarios,
                as: 'usuario',
            }
        })
            .then(function(resenias) {
                console.log(idserie, resenias);

                res.render("series", {idserie:idserie, errores: false, resenias: resenias})
            })
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

    // Para buscar usuarios
    buscadorUsuario: function(req, res){
        res.render("buscadorUsuarios")
    },

    // Para los resultados de los usuarios
    resultadosUsuario: function(req, res){
        res.render("resultadosUsuarios")
        let user = req.query.busquedaUsuario
        db.Usuarios.findAll({
            where:{

                [OP.or]:[
                    {name:{[OP.like]:"%"+ busqueda + "%"}},
                    {email:{[OP.like]:"%"+ busqueda + "%"}}
                ]
            } 
        // checkear esto
         // criterio por como se busca   where: [] con el operador like where 
         // es muy similiar a lo que tenemos que hacer para encontrar las resenias en el detalle
         
        })
        .then (function(resultado){
            res.render("resultados", {resultado:resultado})
        })
    },
     // Para los detalles de los usuarios
     detallesUsuario: function(req, res){
        res.render("detallesUsuarios")
    },

    resenias: function(req, res){
        res.render("resenias")
    },
    eliminarResenia: function(req, res) {
        let idserie= req.query.idPeli
        const idresenia = req.body.idresenia;
        db.resenias.destroy({
            where: {
                id: idresenia
            }
        }).then(function () {
            res.redirect('/series?idPeli=' + idserie);
        });
    },
    guardarResenia: function(req, res){
        login.validar(req.body.email, req.body.password)
        .then (function(usuario){
            let errores= []
            // validacion usuario
            console.log(req.body)
    
         
            if (!usuario) {
                errores.push ("Tu registro no se ha realizado correctamente")
            } 
            else {
                // QUIEREN DECIR QUE EL USUARIO EXISTE Y LA PASS ES CORRECTA
                if (!req.body.resenia) {
                    errores.push ("No se ha completado el campo de texto")
                } 
                if (!req.body.puntaje) {
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
                        res.redirect('/series?idPeli=' + req.query.idPeli);
                   })
               }


            
        })
    }
}

module.exports = controllerSerion