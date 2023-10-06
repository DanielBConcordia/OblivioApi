'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_cuidadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tb_cuidador_cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false,
      },
      tb_cuidador_dt_nasc: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tb_cuidador_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_tel: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tb_cuidador_tel_res: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tb_cuidador_nome_s: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_foto_p: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      tb_cuidador_rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_cep: {
        type: Sequelize.CHAR(8),
        allowNull: false,
      },
      tb_cuidador_bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tb_cuidador_cid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_comp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_pr: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tb_cuidador_fk_nivel: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'tb_niveis', key: 'id'},
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_cuidadores');
  }
};