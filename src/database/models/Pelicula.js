module.exports = (sequelize, dataTypes) => {
    
    let alias = "Peliculas";
    let cols = {
            id: {type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
            title: {type: dataTypes.STRING(500)},
            rating: {type: dataTypes.INTEGER},
            awards: {type: dataTypes.INTEGER},
            release_date: {type: dataTypes.DATE},
            length: {type: dataTypes.INTEGER},
            genre_id: {type: dataTypes.INTEGER}
        };
     let config = {
        tableName : "movies",
        timestamps: false,
        // created_at : {type: dataTypes.DATE},
        // updated_at : {type: dataTypes.DATE},
        };
    const Pelicula = sequelize.define(alias, cols, config);

    return Pelicula;
}