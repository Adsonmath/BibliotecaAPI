'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Autors', [{
      nome: 'Autor Exemplo',
      biografia: 'Biografia do Autor Exemplo',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Autors', null, {});
  }
};
