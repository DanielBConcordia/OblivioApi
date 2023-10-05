'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_paciente.init({
    tb_paciente_cpf: DataTypes.CHAR(11),
    tb_paciente_nome: DataTypes.STRING,
    tb_paciente_dt_nasc: DataTypes.DATE,
    tb_paciente_condicao: DataTypes.STRING,
    tb_paciente_responsavel_legal: DataTypes.STRING,
    tb_paciente_tipo_sang: DataTypes.STRING,
    tb_paciente_temperamento: DataTypes.STRING,
    tb_paciente_interacao: DataTypes.STRING,
    tb_paciente_foto: DataTypes.BLOB,
    tb_paciente_fk_cuidador: DataTypes.INTEGER,
    tb_paciente_fk_remedio: DataTypes.INTEGER,
    tb_paciente_fk_alergia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_paciente',
  });
  return tb_paciente;
};