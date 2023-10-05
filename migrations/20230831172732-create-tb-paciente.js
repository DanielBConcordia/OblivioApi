'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tb_paciente_cpf: {
        type: Sequelize.CHAR(11)
      },
      tb_paciente_nome: {
        type: Sequelize.STRING
      },
      tb_paciente_dt_nasc: {
        type: Sequelize.DATE
      },
      tb_paciente_condicao: {
        type: Sequelize.STRING
      },
      tb_paciente_responsavel_legal: {
        type: Sequelize.STRING
      },
      tb_paciente_tipo_sang: {
        type: Sequelize.CHAR(3)
      },
      tb_paciente_temperamento: {
        type: Sequelize.STRING
      },
      tb_paciente_interacao: {
        type: Sequelize.STRING
      },
      tb_paciente_foto: {
        type: Sequelize.BLOB
      },
      tb_paciente_fk_cuidador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tb_cuidadores', key: 'id'},
        onDelete: 'CASCADE'
      },
      tb_paciente_fk_remedio: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'tb_remedios', key: 'id'},
        onDelete: 'CASCADE'
      },
      tb_paciente_fk_alergia: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'tb_alergia', key: 'id'},
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_pacientes');
  }
};