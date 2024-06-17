'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      Autor.hasMany(models.Livro, { foreignKey: 'autorId', as: 'livros' });
    }
  }
  Autor.init({
    nome: DataTypes.STRING,
    biografia: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};
