'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_cuidadore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_cuidadore.init({
    tb_cuidador_cpf: DataTypes.INTEGER,
    tb_cuidador_dt_nasc: DataTypes.DATE,
    tb_cuidador_email: DataTypes.STRING,
    tb_cuidador_tel: DataTypes.INTEGER,
    tb_cuidador_tel_res: DataTypes.INTEGER,
    tb_cuidador_nome_s: DataTypes.STRING,
    tb_cuidador_nome: DataTypes.STRING,
    tb_cuidador_senha: DataTypes.STRING,
    tb_cuidador_foto_p: DataTypes.BLOB,
    tb_cuidador_rua: DataTypes.STRING,
    tb_cuidador_cep: DataTypes.INTEGER,
    tb_cuidador_bairro: DataTypes.STRING,
    tb_cuidador_numero: DataTypes.INTEGER,
    tb_cuidador_cid: DataTypes.STRING,
    tb_cuidador_uf: DataTypes.STRING,
    tb_cuidador_comp: DataTypes.STRING,
    tb_cuidador_pr: DataTypes.STRING,
    tb_cuidador_fk_nivel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_cuidadore',
  });
  return tb_cuidadore;
};