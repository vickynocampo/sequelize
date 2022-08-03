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
    },
    new: function (req, res) {
        db.Peliculas.findAll({order : [['release_date', 'DESC']], limit: 5})
        .then(function (peliculas) {
            res.render("moviesList", { movies: peliculas })
        })
    },
    recomended : (req, res) => {db.Peliculas.findAll({where:{rating: {[db.Sequelize.Op.gte] : 8}}, order: [['rating', 'DESC']]})
            .then(movies => {
                res.render('recommendedMovies', {movies});
            });
    }
}

module.exports = moviesController;