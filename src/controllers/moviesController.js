let db = require("../database/models/index");

let moviesController = {
    list: function (req, res) {
        db.Peliculas.findAll()
            .then(function (peliculas) {
                res.render("moviesList", { movies: peliculas })
            })
    },
    detail: function (req, res) {
        db.Peliculas.findByPk(req.params.id)
            .then(function (pelicula) {
                res.render("moviesDetail", { movie: pelicula })
            })
    }
    // recomended: function (req, res) {
    // },
    // new: function (req, res) {
    // }
}

module.exports = moviesController;