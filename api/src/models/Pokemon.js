const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      image: {
        // type: DataTypes.BLOB,
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },

      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      speed: {
        type: DataTypes.INTEGER,
      },

      height: {
        type: DataTypes.INTEGER,
      },

      weight: {
        type: DataTypes.INTEGER,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
