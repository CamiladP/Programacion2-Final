module.exports = (sequelize, dataTypes) => {

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idserie: {type: dataTypes.INTEGER},
        idusuario: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        texto: {type: dataTypes.STRING},
        fechacreacion: {type: dataTypes.DATE},
        fechaactualizacion: {type: dataTypes.DATE},
        puntaje: {type: dataTypes.INTEGER},
    };

    let config = {
        tableName: "reseniasusuario",
        timestamps: false,
    };

    const resenias = sequelize.define("resenias", cols, config);
    resenias.associate = function(models){
        resenias.belongsTo(models.usuarios, {
            foreignKey: 'idusuario'
        })
    }
    return resenias;

};