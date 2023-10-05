'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_remedios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tb_remedio_desc: {
        type: Sequelize.STRING
      },
      tb_remedio_qtd: {
        type: Sequelize.STRING
      },
      tb_remedio_hora: {
        type: Sequelize.TIME
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_remedios');
  }
};