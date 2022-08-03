module.exports = (sequelize, dataTypes) => {
    
    let alias = "Actores";
    let cols = {
            id: {type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
            first_name: {type: dataTypes.STRING(100)},
            last_name: {type: dataTypes.STRING(100)},
            rating: {type: dataTypes.INTEGER},
            favorite_movie_id: {type: dataTypes.INTEGER},
        };
     let config = {
        tableName : "actors",
        timestamps: false,
        // created_at : {type: dataTypes.DATE},
        // updated_at : {type: dataTypes.DATE},
        };
    const Actor = sequelize.define(alias, cols, config);

    return Actor;
}