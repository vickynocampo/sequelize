module.exports = (sequelize, dataTypes) => {
    
    let alias = "Generos";
    let cols = {
            id: {type: dataTypes.INTEGER, autoIncrement: true, primaryKey: true},
            name: {type: dataTypes.STRING(100)},
            ranking: {type: dataTypes.INTEGER},
            active: {type: dataTypes.INTEGER},
        };
     let config = {
        tableName : "genres",
        timestamps: false,
        // created_at : {type: dataTypes.DATE},
        // updated_at : {type: dataTypes.DATE},
        };
    const Genero = sequelize.define(alias, cols, config);

    return Genero;
}