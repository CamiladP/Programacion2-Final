module.exports = (sequelize, dataTypes) => {

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        iderie: {type: dataTypes.INTEGER},
        idusuario: {type: dataTypes.INTEGER, foreignKey: true},
        texto: {type: dataTypes.STRING},
        fechacreacion: {type: dataTypes.DATE},
        fechaactualizacion: {type: dataTypes.DATE},
        puntaje: {type: dataTypes.INTEGER},
    };

    let config = {
        tableName: "resenias",
        timestamps: false,
    };

    const resenias = sequelize.define("resenias", cols, config);
    return resenias;

};