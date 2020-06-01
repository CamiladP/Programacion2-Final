module.exports = (sequelize, dataTypes) => {

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {type: dataTypes.STRING}, 
        email: {type: dataTypes.STRING}, 
        password: {type: dataTypes.STRING},
        nacimiento: {type: dataTypes.DATE}
    };

    let config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const usuarios = sequelize.define("usuarios", cols, config);

    usuarios.associate = function(models){
        usuarios.hasMany(models.resenias, {
            foreignKey: 'idusuario'
        })
    }
    return usuarios;

};