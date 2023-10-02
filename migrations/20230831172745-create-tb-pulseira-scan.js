'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pulseira_scans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tb_pulseira_scan_fk_cuidador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_cuidadores', key: 'id'},
        onDelete: 'CASCADE'
      },
      tb_pulseira_scan_fk_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_pacientes', key: 'id'},
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_pulseira_scans');
  }
};