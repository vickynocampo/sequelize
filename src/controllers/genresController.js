let db = require("../database/models/index");

let genresController = {
    list: function (req, res){
        db.Generos.findAll()
        .then(function(generos){
            res.render("genresList", { genres: generos})
        })
    },
    detail: function (req, res){
        db.Generos.findByPk(req.params.id)
        .then(function(genero){
            res.render("genresDetail", {genre: genero})
        })
    }
}

module.exports = genresController;