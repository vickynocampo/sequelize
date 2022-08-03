let db = require("../database/models/index");

let actorsController = {
    list: function (req, res){
        db.Actores.findAll()
        .then(function(actores){
            res.render("actorsList", { actors: actores})
        })
    },
    detail: function (req, res) {
        db.Actores.findByPk(req.params.id)
            .then(function (actor) {
                res.render("actorDetail", { actor: actor })
            })
    }
}

module.exports = actorsController;