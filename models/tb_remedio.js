'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_remedio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_remedio.init({
    tb_remedio_desc: DataTypes.STRING,
    tb_remedio_qtd: DataTypes.STRING,
    tb_remedio_hora: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'tb_remedio',
  });
  return tb_remedio;
};