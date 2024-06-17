'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.belongsTo(models.Autor, { foreignKey: 'autorId', as: 'autor' });
    }
  }
  Livro.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    anoPublicacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};
