'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PessoaFisica', {
      cpf: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      phoneNumber: { type: Sequelize.STRING, allowNull: false },
      birthday: { type: Sequelize.DATE, allowNull: false },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PessoaFisica');
  },
};
