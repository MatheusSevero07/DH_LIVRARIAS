'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("cliente", {
      id: { type: Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      email: {type: Sequelize.STRING(75), indicesType: 'UNIQUE'},
      nome: Sequelize.STRING(30),
      sobrenome: Sequelize.STRING(20),
      senha: Sequelize.STRING(60),
      foto_perfil: Sequelize.STRING(100),//implementar front END
      createdAt: Sequelize.DATE, 
      updatedAt: Sequelize.DATE, 

    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('cliente');
  }
};
