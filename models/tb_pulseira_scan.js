'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pulseira_scan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_pulseira_scan.init({
    tb_pulseira_scan_fk_cuidador: DataTypes.INTEGER,
    tb_pulseira_scan_fk_paciente: DataTypes.INTEGER,
    tb_pulseira_scan_local: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tb_pulseira_scan',
  });
  return tb_pulseira_scan;
};