'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const autor = await queryInterface.sequelize.query(
      `SELECT id FROM Autors LIMIT 1;`
    );

    const autorId = autor[0][0].id;

    await queryInterface.bulkInsert('Livros', [{
      titulo: 'Livro Exemplo',
      descricao: 'Descrição do Livro Exemplo',
      anoPublicacao: 2021,
      autorId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Livros', null, {});
  }
};
