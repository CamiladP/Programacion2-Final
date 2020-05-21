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
    }


}

module.exports = controllerSerion