'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_alegia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_alegia.init({
    tb_alergia_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_alegia',
  });
  return tb_alegia;
};